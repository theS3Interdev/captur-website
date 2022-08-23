import Head from 'next/head';

const Meta = ({ title }) => {
	return (
		<div>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Automate building of websites and web application projects using Next.JS and Tailwind CSS" />
				<link rel="icon" type="image/png" href="/favicon.png" />
				<title>{title}</title>
			</Head>
		</div>
	);
};

Meta.defaultProps = {
	title: 'Home | Superior Software Solutions',
};

export default Meta;
