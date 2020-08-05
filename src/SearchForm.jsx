import React from "react";
import { InputWithLabel } from "./InputWithLabel";

import { StyledSearchForm, StyledButtonLarge } from "./App.styled";

export const SearchForm = ({ handleSearchSubmit, onSearch, searchTerm }) => {
	return (
		<StyledSearchForm onSubmit={handleSearchSubmit}>
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
			<StyledButtonLarge id="basic-addon2">Search</StyledButtonLarge>
		</StyledSearchForm>
	);
};
