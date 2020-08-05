import React, { useEffect, useRef } from "react";

import styles from "./App.module.css";
import { StyledLabel, StyledInput } from "./App.styled";

export const InputWithLabel = ({
	id,
	type,
	onSearch,
	searchTerm,
	children,
	isFocused,
}) => {
	const inputRef = useRef();

	useEffect(() => {
		if (isFocused && inputRef.current) {
			inputRef.current.focus();
		}
	}, [isFocused]);

	return (
		<>
			<StyledLabel htmlFor={id}>{children}</StyledLabel>
			&nbsp;
			<StyledInput
				type={type}
				id={id}
				onChange={onSearch}
				value={searchTerm}
				ref={inputRef}
				className={styles.input}
				placeholder="Search"
			/>
		</>
	);
};
