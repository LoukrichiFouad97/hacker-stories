import React, { useEffect, useRef } from "react";

const InputWithLabel = ({
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
			<label htmlFor={id}>{children}</label>
			&nbsp;
			<input
				type={type}
				id={id}
				onChange={onSearch}
				value={searchTerm}
				ref={inputRef}
			/>
		</>
	);
};

export default InputWithLabel;
