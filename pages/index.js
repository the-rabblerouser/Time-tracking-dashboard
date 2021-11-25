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
} from '../lib/icons/Icons';

import User from '../lib/components/User';
import Stat from '../lib/components/Stat';

const Container = styled.div`
	display: grid;
	place-items: center;
	margin-top: 2rem;

	@media (min-width: 500px) {
		display: grid;
		place-items: center;
		grid-template-columns: 1fr 3fr;
		width: 100%;
	}
`;

const AllStatsContainer = styled.div`
	@media (min-width: 500px) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;

		width: 100%;
		height: 100%;
	}
`;

export default function Home() {
	const [selected, setSelected] = useState('Daily');
	const [buttons] = useState(['Daily', 'Weekly', 'Monthly']);

	return (
		<>
			<Container>
				<User selected={selected} setSelected={setSelected} buttons={buttons} />
				<AllStatsContainer>
					<Stat
						selected={selected}
						data={data[0]}
						svg={WorkSVG()}
						color={'hsl(15, 100%, 70%)'}
					/>
					<Stat
						selected={selected}
						data={data[1]}
						svg={PlaySVG()}
						color={'hsl(195, 74%, 62%)'}
					/>
					<Stat
						selected={selected}
						data={data[2]}
						svg={StudySVG()}
						color={'hsl(348, 100%, 68%)'}
					/>
					<Stat
						selected={selected}
						data={data[3]}
						svg={ExerciseSVG()}
						color={'hsl(145, 58%, 55%)'}
					/>
					<Stat
						selected={selected}
						data={data[4]}
						svg={SocialSVG()}
						color={'hsl(264, 64%, 52%)'}
					/>
					<Stat
						selected={selected}
						data={data[5]}
						svg={SelfCareSVG()}
						color={'hsl(43, 84%, 65%)'}
					/>
				</AllStatsContainer>
			</Container>
		</>
	);
}
