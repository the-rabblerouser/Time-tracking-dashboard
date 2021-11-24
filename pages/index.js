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
	const [date, setDate] = useState({
		daily: true,
		weekly: false,
		monthly: false,
	});

	console.log(date);

	const buttonToggle = (buttonName) => () =>
		setDate((prev) => ({ [buttonName]: !prev[buttonName] }));

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
						<DateButton selected={date.daily} onClick={buttonToggle('daily')}>
							Daily
						</DateButton>
						<DateButton selected={date.weekly} onClick={buttonToggle('weekly')}>
							Weekly
						</DateButton>
						<DateButton
							selected={date.monthly}
							onClick={buttonToggle('monthly')}>
							Monthly
						</DateButton>
					</DateContainer>
				</UserContainer>
			</Container>
		</>
	);
}
