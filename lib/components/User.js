import React from 'react';
import Image from 'next/image';

import {
	UserContainer,
	UserProfile,
	ProfileContainer,
	UserNameContainer,
	ImageContainer,
	ProfileTitle,
	ProfileName,
	DateContainer,
	DateButton,
} from '../styled-components/UserProfile.styled';
import userImage from '../../public/images/image-jeremy.png';

const User = ({ selected, setSelected, buttons }) => {
	const buttonToggle = (btn) => setSelected(btn);

	return (
		<>
			<UserContainer>
				<UserProfile>
					<ProfileContainer>
						<ImageContainer>
							<Image src={userImage} height={70} width={70} />
						</ImageContainer>
						<UserNameContainer>
							<ProfileTitle>Report for</ProfileTitle>
							<ProfileName>Jeremy Robson</ProfileName>
						</UserNameContainer>
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
		</>
	);
};

export default User;
