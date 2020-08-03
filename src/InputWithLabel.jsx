import React, { useEffect, useRef } from "react";

const InputWithLabel = ({
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
		<form onSubmit={handleSearchSubmit}>
			<div className="row d-flex align-items-center">
				<label className="h4" htmlFor={id}>
					{children}
				</label>
				&nbsp;
				<div className="col input-group mb-3">
					<input
						type={type}
						id={id}
						onChange={onSearch}
						value={searchTerm}
						ref={inputRef}
						className="form-control col"
						placeholder="Search"
					/>
					<div className="input-group-append">
						<button
							className="input-group-text"
							id="basic-addon2"
						>
							Search
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default InputWithLabel;
