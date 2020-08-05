import React from "react";
import { InputWithLabel } from "./InputWithLabel";

import styles from "./App.module.css";
import cs from "classnames";

export const SearchForm = ({ handleSearchSubmit, onSearch, searchTerm }) => {
	return (
		<form onSubmit={handleSearchSubmit} className={styles.searchForm}>
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
			<button
				className={cs(styles.button, styles.buttonLarge)}
				id="basic-addon2"
			>
				Search
			</button>
		</form>
	);
};
