import React from 'react';
import Image from 'next/image';

import styled from 'styled-components';

import userImage from '../public/images/image-jeremy.png';

// font-family: 'Rubik', sans-serif;

export default function Home() {
	const Container = styled.div`
		display: grid;
		justify-content: center;
	`;

	const UserContainer = styled.div`
		background: hsl(235, 46%, 20%);
		height: 12rem;
		width: 20rem;
		border-radius: 10px;
	`;

	const UserProfile = styled.div`
		background: hsl(246, 80%, 60%);
		height: 7rem;
		width: 20rem;
		border-radius: 10px;
	`;

	const ProfileContainer = styled.div`
		display: grid;
		place-items: center;
		grid-template-columns: 1fr 2fr;
		padding: 0.8rem 1.5rem 0 1.5rem;
	`;

	const ImageContainer = styled.div`
		display: grid;
		border: 3px solid #fff;
		border-radius: 100%;
	`;

	const ProfileTitle = styled.p`
		font-family: 'Rubik', sans-serif;
		font-weight: 300;
		font-size: 0.85rem;
		color: hsl(236, 100%, 87%);
		margin-bottom: 0.5rem;
	`;

	const ProfileName = styled.h1`
		font-family: 'Rubik', sans-serif;
		font-weight: 400;
		font-size: 1.3rem;
		color: hsl(236, 100%, 87%);
		margin-top: 0;
	`;

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
				</UserContainer>
			</Container>
		</>
	);
}
