import React from "react";
import { InputWithLabel } from "./InputWithLabel";

export const SearchForm = ({ handleSearchSubmit, onSearch, searchTerm }) => {
	return (
		<form onSubmit={handleSearchSubmit} className="search-form">
			<InputWithLabel
				id="search"
				label="Search"
				type="search"
				isFocused
				onSearch={onSearch}
				searchTerm={searchTerm}
			>
				Search:
			</InputWithLabel>
			<button className="button button_large" id="basic-addon2">
				Search
			</button>
		</form>
	);
};
