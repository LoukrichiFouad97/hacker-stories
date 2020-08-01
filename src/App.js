import React, { useEffect, useReducer, useState } from "react";

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
	const SET_STORIES = "SET_STORIES";
	const REMOVE_STORIES = "REMOVE_STORIES";

	const storiesReducer = (state, { type, payload }) => {
		switch (type) {
			case SET_STORIES:
				return payload;
			case REMOVE_STORIES:
				return state.filter((story) => story.objectID !== payload.objectID);
			default:
				return state;
		}
	};

	const [stories, dispatchStories] = useReducer(storiesReducer, []);

	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const handleRemoveStory = (item) => {
		dispatchStories({ type: "REMOVE_STORIES", payload: item });
	};

	const [searchTerm, setSearchTerm] = UseSemiPersistentState(
		"searchTerm",
		"react"
	);

	const changeHandler = (e) => setSearchTerm(e.target.value);

	const searchedStories = stories.filter((story) =>
		story.title.toLowerCase().includes(searchTerm)
	);

	const getAsyncStories = () => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve({ data: { stories: INITIAL_STATE } });
			}, 2000);
		});
	};

	useEffect(() => {
		setIsLoading(true);
		getAsyncStories()
			.then((result) => {
				dispatchStories({ type: "SET_STORIES", payload: result.data.stories });
				setIsLoading(false);
			})
			.catch(() => {
				setIsError(true);
			});
	}, []);

	return (
		<>
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
			<p>You searched for: {searchTerm}</p>
			<hr />

			{isError && <h3>Oops! Something went wrong...</h3>}

			{isLoading ? (
				<h3>Loading Stories</h3>
			) : (
				<List list={searchedStories} onRemoveItem={handleRemoveStory} />
			)}
		</>
	);
}

export default App;
