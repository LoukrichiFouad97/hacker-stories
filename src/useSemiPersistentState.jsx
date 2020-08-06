import { useState, useEffect, useRef } from "react";

const UseSemiPersistentState = (key, initialState) => {
	const [value, setValue] = useState(localStorage.getItem(key) || initialState);

	const isMounted = useRef(false);

	useEffect(() => {
		if (!isMounted.current) {
			isMounted.current = true;
		} else {
			console.log("a");
			localStorage.setItem(key, value);
		}
	}, [value, key]);

	return [value, setValue];
};

export default UseSemiPersistentState;
