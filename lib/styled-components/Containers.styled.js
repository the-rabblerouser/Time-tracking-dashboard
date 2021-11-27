import styled from 'styled-components';

export const AppContainer = styled.div`
	@media (min-width: 500px) {
		display: grid;
		height: 100vh;
		width: 100%;
		place-items: center;
	}
`;

export const Container = styled.div`
	display: grid;
	place-items: center;
	margin-top: 2rem;

	@media (min-width: 500px) {
		display: grid;
		grid-template-columns: 1fr 3fr;
		margin-top: 0;
		height: 32rem;
	}
`;

export const AllStatsContainer = styled.div`
	@media (min-width: 500px) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 1rem 1rem;
		width: 100%;
		height: 100%;
	}
`;
