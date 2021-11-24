import React, { useState } from 'react';

import styled from 'styled-components';

import User from '../lib/components/User';

// font-family: 'Rubik', sans-serif;

const Container = styled.div`
	display: grid;
	place-items: center;
`;

export default function Home() {
	const [selected, setSelected] = useState('Daily');
	const [buttons] = useState(['Daily', 'Weekly', 'Monthly']);

	return (
		<>
			<Container>
				<User selected={selected} setSelected={setSelected} buttons={buttons} />
			</Container>
		</>
	);
}
