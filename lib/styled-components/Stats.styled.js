import styled from 'styled-components';

export const StatContainer = styled.div`
	position: relative;
	background: ${(props) => props.color};
	height: 11rem;
	width: 20rem;
	margin-top: 1.5rem;
	border-radius: 15px;

	@media (min-width: 500px) {
		margin-top: 0;
		height: 100%;
		width: 16rem;
		place-self: center;
	}
`;

export const SVGContainer = styled.div`
	display: grid;
	justify-items: end;
	margin-right: 1rem;
`;

export const StatProfileContainer = styled.div`
	display: grid;
	grid-template-rows: 1fr 1fr;
	place-items: start;
	position: absolute;
	bottom: 0;
	height: 8.5rem;
	width: 20rem;
	border-radius: 15px;
	background: hsl(235, 46%, 20%);

	@media (min-width: 500px) {
		height: 12.4rem;
		width: 16rem;
	}
`;

export const CurrentContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	place-items: center;
	width: 100%;
	margin-bottom: -1.2rem;

	@media (min-width: 500px) {
		width: 15rem;
	}
`;

export const CardTitle = styled.p`
	margin: 0;
	font-family: 'Rubik', sans-serif;
	font-weight: 500;
	font-size: 18px;
	text-align: left;
	width: 50%;
	color: hsl(236, 100%, 87%);
`;

export const Dots = styled.p`
	display: flex;
	justify-content: end;
	align-items: center;
	text-align: left;
	width: 7rem;
	font-family: 'Rubik', sans-serif;
	font-weight: 500;
	font-size: 1.5rem;
	color: hsl(236, 100%, 87%);
`;

export const PriorContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	place-items: center;
	width: 20rem;
	margin-bottom: 2rem;

	@media (min-width: 500px) {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr;
		margin-bottom: 0;
		width: 15rem;
		justify-items: start;
		margin-left: 1.6rem;
	}
`;

export const CardHours = styled.h1`
	margin: 0;
	font-family: 'Rubik', sans-serif;
	font-weight: 300;
	color: hsl(236, 100%, 87%);
	width: 50%;

	@media (min-width: 500px) {
		font-size: 3rem;
	}
`;

export const PriorHours = styled.p`
	margin: 0;
	font-family: 'Rubik', sans-serif;
	font-weight: 300;
	font-size: 1rem;
	color: hsl(236, 100%, 87%);
`;
