import Hero from '../components/hero';
import Meta from '../lib/meta';

const Home = () => {
	return (
		<>
			{/** title bar start */}
			<Meta title="Captur Photography | Superior Software Solutions" />
			{/** title bar end */}

			<Hero heading="Captur Photography" message="I capture moments in nature and keep them alive" />
		</>
	);
};

export default Home;
