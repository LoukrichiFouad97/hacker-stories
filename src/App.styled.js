import styled from "styled-components";

export const StyledContainer = styled.div`
	height: 100vh;
	padding: 20px;

	background: #83a4d4;
	background: linear-gradient(to left, #b6fbff, #83a4d4);

	color: #171212;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const StyledHeadlinePrimary = styled.h1`
	font-size: 48px;
	font-weight: 300;
	letter-spacing: 2px;
	svg {
		margin-right: 10px;
		margin-bottom: 5px;
	}
`;

export const StyledItem = styled.div`
	display: flex;
	align-items: center;
	padding-bottom: 5px;
`;

export const StyledColumn = styled.span`
	padding: 0 5px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;

	a {
		color: inherit;
	}

	width: ${(props) => props.width};
`;

export const StyledButton = styled.button`
	background: transparent;
	border: 1px solid #171212;
	padding: 5px;
	cursor: pointer;

	transform: all 0.1s ease-in;

	&:hover {
		background: #171212;
		color: #fff;
	}

	svg {
		g {
			fill: #fff;
			strock: #fff;
		}
	}
`;

export const StyledButtonSmall = styled(StyledButton)`
	padding: 5px;
`;

export const StyledButtonLarge = styled(StyledButton)`
	padding: 10px;
`;

export const StyledSearchForm = styled.form`
	padding: 10px 0 20px 0;
	display: flex;
	align-items: baseline;
`;

export const StyledLabel = styled.label`
	border-top: 1px solid #171212;
	border-left: 1px solid #171212;
	padding-left: 5px;
	font-size: 24px;
`;

export const StyledInput = styled.input`
	border: none;
	border-bottom: 1px solid #171212;
	background-color: transparent;
	font-size: 24px;
`;
