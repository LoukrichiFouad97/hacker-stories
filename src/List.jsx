import React, { memo } from "react";

import Item from "./Item";

export const List = memo(
	({ list, onRemoveItem }) =>
		console.log("B:List") ||
		list.map(({ objectID, ...item }) => (
			<Item key={objectID} {...item} onRemoveItem={onRemoveItem} />
		))
);
