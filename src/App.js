import React, { useEffect, useReducer, useCallback } from "react";

import InputWithLabel from "./InputWithLabel";
import UseSemiPersistentState from "./useSemiPersistentState";
import List from "./List";

import "./App.css";

function App() {
	const INITIAL_STATE = [
		{
			title: "React",
			url: "https://reactjs.org/",
			author: "Jordan Walke",
			num_comments: 3,
			points: 4,
			objectID: 0,
		},
		{
			title: "Redux",
			url: "https://redux.js.org/",
			author: "Dan Abramov, Andrew Clark",
			num_comments: 2,
			points: 5,
			objectID: 1,
		},
	];

	// action types
	const REMOVE_STORIES = "REMOVE_STORIES";
	const STORIES_FETCH_INIT = "STORIES_FETCH_INIT";
	const STORIES_FETCH_SUCCESS = "STORIES_FETCH_SUCCESS";
	const STORIES_FETCH_FAILURE = "STORIES_FETCH_FAILURE";

	const storiesReducer = (state, { type, payload }) => {
		switch (type) {
			case STORIES_FETCH_INIT:
				return {
					...state,
					isLoading: true,
					isError: false,
				};
			case STORIES_FETCH_SUCCESS:
				return {
					...state,
					isLoading: false,
					isError: false,
					data: payload,
				};
			case STORIES_FETCH_FAILURE:
				return {
					...state,
					isLoading: false,
					isError: true,
				};
			case REMOVE_STORIES:
				return state.filter((story) => story.objectID !== payload.objectID);
			default:
				return state;
		}
	};

	const [stories, dispatchStories] = useReducer(storiesReducer, {
		data: [],
		isLoading: false,
		isError: false,
	});

	const handleRemoveStory = (item) => {
		dispatchStories({ type: "REMOVE_STORIES", payload: item });
	};

	const [searchTerm, setSearchTerm] = UseSemiPersistentState(
		"searchTerm",
		"react"
	);

	const changeHandler = (e) => setSearchTerm(e.target.value);

	const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query=";

	const handleFetchStories = useCallback(() => {
		if (!searchTerm) return;

		dispatchStories({ type: STORIES_FETCH_INIT });
		fetch(`${API_ENDPOINT}${searchTerm}`)
			.then((res) => res.json())
			.then((result) => {
				return dispatchStories({
					type: STORIES_FETCH_SUCCESS,
					payload: result.hits,
				});
			})
			.catch(() => {
				dispatchStories({ type: STORIES_FETCH_FAILURE });
			});
	}, [searchTerm]);

	useEffect(() => {
		handleFetchStories();
	}, [handleFetchStories]);

	return (
		<>
			<div className="header bg-warning" style={{ height: "200px" }}>
				<div className="h-100 container d-flex flex-column align-items-center justify-content-around">
					<h1>My Hacker Stories</h1>
					<InputWithLabel
						id="search"
						label="Search"
						type="search"
						onSearch={changeHandler}
						search={searchTerm}
						isFocused
					>
						<strong>Search:</strong>
					</InputWithLabel>
					<p>
						You searched for:{" "}
						<span className="font-weight-bold">{searchTerm}</span>{" "}
					</p>
				</div>
			</div>

			<hr />

			{stories.isError && <h3>Oops! Something went wrong...</h3>}

			{stories.isLoading ? (
				<h3>Loading Stories</h3>
			) : (
				<List list={stories.data} onRemoveItem={handleRemoveStory} />
			)}
		</>
	);
}

export default App;
