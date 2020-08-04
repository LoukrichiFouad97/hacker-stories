import React from "react";

const Item = ({ title, url, author, num_comments, points, onRemoveItem }) => {
	function handleRemoveStory(item) {
		onRemoveItem(item);
	}

	return (
		<div className="item">
			<span style={{ width: "40%" }}>
				<a href={url}>{title}</a>
			</span>
			<span style={{ width: "30%" }}>{author}</span>
			<span style={{ width: "10%" }}>{num_comments}</span>
			<span style={{ width: "10%" }}>{points}</span>
			<span style={{ width: "10%" }}>
				<button className="button button_small" onClick={handleRemoveStory}>
					Dismiss
				</button>
			</span>
		</div>
	);
};

export default Item;
