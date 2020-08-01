import React from "react";

const Item = ({ title, url, author, num_comments, points, onRemoveItem }) => {
	function handleRemoveStory(item) {
		onRemoveItem(item);
	}

	return (
		<div>
			<span>
				<a href={url}>{title}</a>
			</span>
			<span>{author}</span>
			<span>{num_comments}</span>
			<span>{points}</span>
			<button onClick={handleRemoveStory}>Dismiss</button>
		</div>
	);
};

export default Item;
