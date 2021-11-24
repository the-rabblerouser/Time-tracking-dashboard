import React, { useState } from 'react';

import styled from 'styled-components';

import data from '../lib/data.json';

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
				<Stat data={data[0]} />
			</Container>
		</>
	);
}
