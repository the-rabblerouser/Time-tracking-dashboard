import React, { useState } from 'react';

import styled from 'styled-components';

import User from '../lib/components/User';

// font-family: 'Rubik', sans-serif;

const Container = styled.div`
	display: grid;
	place-items: center;
	margin-top: 2rem;
`;

const StatContainer = styled.div`
	position: relative;
	background: hsl(15, 100%, 70%);
	height: 11rem;
	width: 20rem;
	margin-top: 1.5rem;
	border-radius: 15px;
`;

const SVGContainer = styled.div`
	display: grid;
	justify-items: end;
	z-index: 0;
`;

const StatProfileContainer = styled.div`
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

const CurrentContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: start;
	height: 100%;
`;

const CardTitle = styled.p`
	margin: 0;
	height: 10%;
	font-family: 'Rubik', sans-serif;
	font-weight: 500;
	font-size: 18px;
	color: hsl(236, 100%, 87%);
`;

const CardHours = styled.h1`
	margin: 0;
	height: 45%;
	font-family: 'Rubik', sans-serif;
	font-weight: 300;
	color: hsl(236, 100%, 87%);
`;

const PriorContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: end;
	height: 100%;
`;

const Dots = styled.p`
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

const PriorHours = styled.p`
	height: 50%;
	margin: 0;
	font-family: 'Rubik', sans-serif;
	font-weight: 300;
	font-size: 1rem;
	color: hsl(236, 100%, 87%);
`;

export default function Home() {
	const [selected, setSelected] = useState('Daily');
	const [buttons] = useState(['Daily', 'Weekly', 'Monthly']);

	const WorkSVG = () => (
		<svg width='79' height='79' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='m18.687 10.43 15.464 30.906c.31.682.743 1.322 1.3 1.88.558.557 1.198.99 1.714 1.217L68.237 59.98 52.484 75.732a8.025 8.025 0 0 1-11.355 0L2.934 37.538a8.025 8.025 0 0 1 0-11.356L18.687 10.43Zm19.345-7.99 10.839 10.838 2.065-2.064a5.845 5.845 0 0 1 8.258 0l8.258 8.259a5.845 5.845 0 0 1 0 8.258l-2.064 2.064 10.839 10.84a8.025 8.025 0 0 1 0 11.355l-4.728 4.728L39.126 40.53a1.963 1.963 0 0 1-.578-.413 1.963 1.963 0 0 1-.413-.578L21.95 7.168l4.728-4.728a8.025 8.025 0 0 1 11.355 0Zm17.033 12.903-2.064 2.065 8.258 8.258 2.064-2.064-8.258-8.259Z'
				fill='#D96C47'
				fillRule='nonzero'
			/>
		</svg>
	);

	return (
		<>
			<Container>
				<User selected={selected} setSelected={setSelected} buttons={buttons} />
				<StatContainer>
					<SVGContainer>
						<WorkSVG />
					</SVGContainer>
					<StatProfileContainer>
						<CurrentContainer>
							<CardTitle>Work</CardTitle>
							<CardHours>32hrs</CardHours>
						</CurrentContainer>
						<PriorContainer>
							<Dots>•••</Dots>
							<PriorHours>Last Week - 8hrs</PriorHours>
						</PriorContainer>
					</StatProfileContainer>
				</StatContainer>
			</Container>
		</>
	);
}
