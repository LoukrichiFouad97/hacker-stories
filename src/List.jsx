import React from "react";
import Item from "./Item";

const List = ({ list, onRemoveItem }) =>
	list.map(({ objectID, ...item }) => (
		<Item key={objectID} {...item} onRemoveItem={onRemoveItem} />
	));

export default List;
