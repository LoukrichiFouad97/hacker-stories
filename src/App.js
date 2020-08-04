import React, { useEffect, useReducer, useCallback, useState } from "react";
import axios from "axios";

import { SearchForm } from "./SearchForm";
import UseSemiPersistentState from "./useSemiPersistentState";
import List from "./List";

import "./App.css";

function App() {
	// action types
	const REMOVE_STORIES = "REMOVE_STORIES";
	const STORIES_FETCH_INIT = "STORIES_FETCH_INIT";
	const STORIES_FETCH_SUCCESS = "STORIES_FETCH_SUCCESS";
	const STORIES_FETCH_FAILURE = "STORIES_FETCH_FAILURE";

	// action reducer
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
				return state.data.filter(
					(story) => story.objectID !== payload.objectID
				);
			default:
				return state;
		}
	};

	const INITIAL_STATE = {
		data: [],
		isLoading: false,
		isError: false,
	};

	const [stories, dispatchStories] = useReducer(storiesReducer, INITIAL_STATE);

	const handleRemoveStory = (item) => {
		dispatchStories({ type: "REMOVE_STORIES", payload: item });
	};

	const [searchTerm, setSearchTerm] = UseSemiPersistentState(
		"searchTerm",
		"react"
	);

	const changeHandler = ({ target: { value } }) => setSearchTerm(value);

	const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query=";

	const [url, setUrl] = useState(`${API_ENDPOINT}${searchTerm}`);

	const handleFetchStories = useCallback(async () => {
		if (!searchTerm) return;

		dispatchStories({ type: STORIES_FETCH_INIT });

		const { data } = await axios.get(url);

		try {
			dispatchStories({
				type: STORIES_FETCH_SUCCESS,
				payload: data.hits,
			});
		} catch (err) {
			dispatchStories({ type: STORIES_FETCH_FAILURE });
		}
	}, [url]);

	useEffect(() => {
		handleFetchStories();
	}, [handleFetchStories]);

	const handleSearchInput = ({ target: { value } }) => {
		setSearchTerm(value);
	};

	const handleSearchSubmit = (e) => {
		e.preventDefault();
		setUrl(`${API_ENDPOINT}${searchTerm}`);
	};

	const error = stories.isError && (
		<h3 className="text-center text-danger">Oops! Something went wrong...</h3>
	);

	const loading = stories.isLoading ? (
		<h3 className="text-center">Loading Stories...</h3>
	) : (
		<List list={stories.data} onRemoveItem={handleRemoveStory} />
	);

	return (
		<>
			<div className="my-container header" style={{ height: "200px" }}>
				<div>
					<h1>My Hacker Stories</h1>
					<SearchForm
						onSearch={changeHandler}
						search={searchTerm}
						onInputChange={handleSearchInput}
						handleSearchSubmit={handleSearchSubmit}
					/>
					<p>
						You searched for: <span>{searchTerm}</span>{" "}
					</p>
				</div>
			</div>
			<hr />

			{error}
			{loading}
		</>
	);
}

export default App;
