import React from "react";

const Item = ({ title, url, author, num_comments, points, onRemoveItem }) => {
	function handleRemoveStory(item) {
		onRemoveItem(item);
	}

	return (
		<div className=" container bg-warning my-1 p-3 d-flex justify-content-between align-items-center rounded">
			<span>
				<a href={url}>{title}</a>
			</span>
			<span>{author}</span>
			<span>{num_comments}</span>
			<span>{points}</span>
			<button className="btn btn-danger" onClick={handleRemoveStory}>
				Dismiss
			</button>
		</div>
	);
};

export default Item;
