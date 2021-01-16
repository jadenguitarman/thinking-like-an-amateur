import Document, { Html, Head, Main, NextScript } from 'next/document';

class OhHellosDoc extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="icon" href="/ring.png" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default OhHellosDoc;
