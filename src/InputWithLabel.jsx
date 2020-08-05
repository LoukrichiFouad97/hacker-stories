import React, { useEffect, useRef } from "react";
import styles from "./App.module.css";

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
			<label className="label" htmlFor={id}>
				{children}
			</label>
			&nbsp;
			<input
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
