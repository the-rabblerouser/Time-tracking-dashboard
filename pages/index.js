import React from 'react';
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
						<DateButton>Daily</DateButton>
						<DateButton>Weekly</DateButton>
						<DateButton>Monthly</DateButton>
					</DateContainer>
				</UserContainer>
			</Container>
		</>
	);
}
