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

		padding: 0.8rem 2.5rem 0 2.5rem;
	`;

	const ProfileImage = styled(Image)`
		border: 10px solid;
		border-radius: 100%;
	`;

	const ProfileTitle = styled.p`
		font-family: 'Rubik', sans-serif;
	`;

	const ProfileName = styled.p`
		font-family: 'Rubik', sans-serif;
	`;

	return (
		<>
			<Container>
				<UserContainer>
					<UserProfile>
						<ProfileContainer>
							<div>
								<ProfileImage src={userImage} height={70} width={70} />
							</div>
							<div>
								<ProfileTitle>Report for</ProfileTitle>
								<ProfileName>Jeremy Robinson</ProfileName>
							</div>
						</ProfileContainer>
					</UserProfile>
				</UserContainer>
			</Container>
		</>
	);
}
