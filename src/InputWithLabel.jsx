import React, { useEffect, useRef } from "react";

export const InputWithLabel = ({
	id,
	type,
	onSearch,
	searchTerm,
	children,
	isFocused,
	handleSearchSubmit,
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
				className="input"
				placeholder="Search"
			/>
		</>
	);
};
