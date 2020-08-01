import React from "react";
import { useState } from "react";

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

	const [stories, setStories] = useState(INITIAL_STATE);

	const handleRemoveStory = (item) => {
		const newStorties = stories.filter((story) => {
			return item.objectID !== story.objectID;
		});

		setStories(newStorties);
	};

	const [searchTerm, setSearchTerm] = UseSemiPersistentState(
		"searchTerm",
		"react"
	);

	const changeHandler = (e) => setSearchTerm(e.target.value);

	const searchedStories = stories.filter((story) =>
		story.title.toLowerCase().includes(searchTerm)
	);

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
			<List list={searchedStories} onRemoveItem={handleRemoveStory} />
		</>
	);
}

export default App;
