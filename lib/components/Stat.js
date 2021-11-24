import React from 'react';

import {
	StatContainer,
	SVGContainer,
	StatProfileContainer,
	CurrentContainer,
	CardTitle,
	CardHours,
	PriorContainer,
	Dots,
	PriorHours,
} from '../styled-components/Stats.styled';

const Stat = ({ svg, data }) => {
	const {
		title,
		timeframes: { daily },
	} = data;

	return (
		<>
			<StatContainer>
				<SVGContainer>{svg}</SVGContainer>
				<StatProfileContainer>
					<CurrentContainer>
						<CardTitle>{title}</CardTitle>
						<CardHours>{daily.current}hrs</CardHours>
					</CurrentContainer>
					<PriorContainer>
						<Dots>•••</Dots>
						<PriorHours>Last Week - {daily.previous}hrs</PriorHours>
					</PriorContainer>
				</StatProfileContainer>
			</StatContainer>
		</>
	);
};

export default Stat;
