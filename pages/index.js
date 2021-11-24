import React, { useState } from 'react';

import styled from 'styled-components';

import data from '../lib/data.json';
import {
	WorkSVG,
	PlaySVG,
	StudySVG,
	ExerciseSVG,
	SocialSVG,
	SelfCareSVG,
} from '../lib/Icons/Icons';

import User from '../lib/components/User';
import Stat from '../lib/components/Stat';

// font-family: 'Rubik', sans-serif;

const Container = styled.div`
	display: grid;
	place-items: center;
	margin-top: 2rem;
`;

export default function Home() {
	const [selected, setSelected] = useState('Daily');
	const [buttons] = useState(['Daily', 'Weekly', 'Monthly']);

	return (
		<>
			<Container>
				<User selected={selected} setSelected={setSelected} buttons={buttons} />
				<Stat selected={selected} data={data[0]} svg={WorkSVG()} />
				<Stat selected={selected} data={data[1]} svg={PlaySVG()} />
				<Stat selected={selected} data={data[2]} svg={StudySVG()} />
				<Stat selected={selected} data={data[3]} svg={ExerciseSVG()} />
				<Stat selected={selected} data={data[4]} svg={SocialSVG()} />
				<Stat selected={selected} data={data[5]} svg={SelfCareSVG()} />
			</Container>
		</>
	);
}
