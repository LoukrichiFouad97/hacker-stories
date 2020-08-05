import React from "react";

import { StyledItem, StyledColumn, StyledButtonSmall } from "./App.styled";
import { ReactComponent as Check } from "./assets/check.svg";

const Item = ({ title, url, author, num_comments, points, onRemoveItem }) => {
	function handleRemoveStory(item) {
		onRemoveItem(item);
	}

	return (
		<StyledItem>
			<StyledColumn width="40%">
				<a href={url}>{title}</a>
			</StyledColumn>
			<StyledColumn width="30%">{author}</StyledColumn>
			<StyledColumn width="10%">{num_comments}</StyledColumn>
			<StyledColumn width="10%">{points}</StyledColumn>
			<StyledColumn width="10%">
				<StyledButtonSmall onClick={handleRemoveStory}>
					Dismiss
					<Check height="18px" width="18px" />
				</StyledButtonSmall>
			</StyledColumn>
		</StyledItem>
	);
};

export default Item;
