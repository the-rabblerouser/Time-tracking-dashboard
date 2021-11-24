import React, { useState } from 'react';
import Image from 'next/image';

import {
	Container,
	UserContainer,
	UserProfile,
	ProfileContainer,
	ImageContainer,
	ProfileTitle,
	ProfileName,
	DateContainer,
	DateButton,
} from '../styled-components/UserProfile.styled';

import userImage from '../public/images/image-jeremy.png';

// font-family: 'Rubik', sans-serif;

export default function Home() {
	const [selected, setSelected] = useState('Daily');
	const [buttons, setButtons] = useState(['Daily', 'Weekly', 'Monthly']);

	const buttonToggle = (name) => setSelected(name);
	return (
		<>
			<Container>
				<UserContainer>
					<UserProfile>
						<ProfileContainer>
							<ImageContainer>
								<Image src={userImage} height={70} width={70} />
							</ImageContainer>
							<div>
								<ProfileTitle>Report for</ProfileTitle>
								<ProfileName>Jeremy Robson</ProfileName>
							</div>
						</ProfileContainer>
					</UserProfile>
					<DateContainer>
						{buttons.map((btn, i) => (
							<DateButton
								key={btn}
								selected={selected}
								button={buttons[i]}
								onClick={() => buttonToggle(btn)}>
								{btn}
							</DateButton>
						))}
					</DateContainer>
				</UserContainer>
			</Container>
		</>
	);
}
