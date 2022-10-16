import Head from 'next/head';

const Meta = ({ title }) => {
	return (
		<div>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="I capture moments in nature and keep them alive" />
				<link rel="icon" type="image/png" href="/favicon.png" />
				<title>{title}</title>
			</Head>
		</div>
	);
};

Meta.defaultProps = {
	title: 'Captur Photography | Superior Software Solutions',
};

export default Meta;
