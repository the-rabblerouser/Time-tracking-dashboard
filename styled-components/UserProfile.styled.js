import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	place-items: center;
`;

export const UserContainer = styled.div`
	background: hsl(235, 46%, 20%);
	height: 11rem;
	width: 20rem;
	border-radius: 10px;
`;

export const UserProfile = styled.div`
	background: hsl(246, 80%, 60%);
	height: 7rem;
	width: 20rem;
	border-radius: 10px;
`;

export const ProfileContainer = styled.div`
	display: grid;
	place-items: center;
	grid-template-columns: 1fr 2fr;
	padding: 0.8rem 1.5rem 0 1.5rem;
`;

export const ImageContainer = styled.div`
	display: grid;
	border: 3px solid #fff;
	border-radius: 100%;
`;

export const ProfileTitle = styled.p`
	font-family: 'Rubik', sans-serif;
	font-weight: 300;
	font-size: 0.85rem;
	color: hsl(236, 100%, 87%);
	margin-bottom: 0.5rem;
`;

export const ProfileName = styled.h1`
	font-family: 'Rubik', sans-serif;
	font-weight: 400;
	font-size: 1.3rem;
	color: hsl(236, 100%, 87%);
	margin-top: 0;
`;

export const DateContainer = styled.div`
	display: grid;
	justify-items: space-around;
	align-items: center;
	grid-template-columns: 1fr 1fr 1fr;
	width: 20rem;
	height: 3.5rem;
`;

export const DateButton = styled.button`
	font-family: 'Rubik', sans-serif;
	font-weight: 400;
	font-size: 1.1rem;
	background: none;
	border: none;
	color: ${(props) =>
		props.selected ? 'hsl(236, 100%, 87%)' : 'hsl(235, 45%, 61%)'};
	width: 100%;
	height: 100%;
`;
