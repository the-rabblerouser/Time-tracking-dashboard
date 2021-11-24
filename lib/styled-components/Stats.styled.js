import styled from 'styled-components';

export const StatContainer = styled.div`
	position: relative;
	background: hsl(15, 100%, 70%);
	height: 11rem;
	width: 20rem;
	margin-top: 1.5rem;
	border-radius: 15px;
`;

export const SVGContainer = styled.div`
	display: grid;
	justify-items: end;
	z-index: 0;
`;

export const StatProfileContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	place-items: center;
	position: absolute;
	bottom: 0;
	height: 8rem;
	width: 20rem;
	border-radius: 15px;
	padding-top: 1rem;
	background: hsl(235, 46%, 20%);
`;

export const CurrentContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: start;
	height: 100%;
`;

export const CardTitle = styled.p`
	margin: 0;
	height: 10%;
	font-family: 'Rubik', sans-serif;
	font-weight: 500;
	font-size: 18px;
	color: hsl(236, 100%, 87%);
`;

export const CardHours = styled.h1`
	margin: 0;
	height: 45%;
	font-family: 'Rubik', sans-serif;
	font-weight: 300;
	color: hsl(236, 100%, 87%);
`;

export const PriorContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: end;
	height: 100%;
`;

export const Dots = styled.p`
	display: flex;
	justify-content: end;
	align-items: center;
	height: 50%;
	margin: 0;
	font-family: 'Rubik', sans-serif;
	font-weight: 500;
	font-size: 1.5rem;
	color: hsl(236, 100%, 87%);
`;

export const PriorHours = styled.p`
	height: 50%;
	margin: 0;
	font-family: 'Rubik', sans-serif;
	font-weight: 300;
	font-size: 1rem;
	color: hsl(236, 100%, 87%);
`;
