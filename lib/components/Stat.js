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

const Stat = ({ selected, svg, data, color }) => {
	const {
		title,
		timeframes: { daily, weekly, monthly },
	} = data;

	const selectedData = function (selected) {
		if (selected === 'Daily') {
			return daily;
		}
		if (selected === 'Weekly') {
			return weekly;
		}
		if (selected === 'Monthly') {
			return monthly;
		}
	};

	return (
		<>
			<StatContainer color={color}>
				<SVGContainer>{svg}</SVGContainer>
				<StatProfileContainer>
					<CurrentContainer>
						<CardTitle>{title}</CardTitle>
						<CardHours>{selectedData(selected).current}hrs</CardHours>
					</CurrentContainer>
					<PriorContainer>
						<Dots>•••</Dots>
						<PriorHours>
							Last Week - {selectedData(selected).previous}hrs
						</PriorHours>
					</PriorContainer>
				</StatProfileContainer>
			</StatContainer>
		</>
	);
};

export default Stat;
