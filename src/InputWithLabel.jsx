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
		<div className="row d-flex align-items-center">
			<label className='h4 mt-2 mr-1' htmlFor={id}>
				{children}
			</label>
			&nbsp;
			<input
				type={type}
				id={id}
				onChange={onSearch}
				value={searchTerm}
				ref={inputRef}
				className="col form-control"
			/>
		</div>
	);
};

export default InputWithLabel;
