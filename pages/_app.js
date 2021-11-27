import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body {
	padding: 0;
	margin: 0;
	background: hsl(226, 43%, 10%);
	min-height: 100%;
}

a {
	color: inherit;
	text-decoration: none;
}

* {
	box-sizing: border-box;
}
`;

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
