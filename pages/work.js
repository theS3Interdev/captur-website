import Meta from '../lib/meta';
import Hero from '../components/hero';
import Portfolio from '../components/portfolio';

const work = () => {
	return (
		<div>
			{/** title bar start */}
			<Meta title="Work | Captur Photography | Superior Software Solutions" />
			{/** title bar end */}

			{/** hero section start */}
			<Hero heading="My Work" message="This is some of my recent work traveling the world" />
			{/** hero section end */}

			{/** portfolio section start */}
			<Portfolio />
			{/** portfolio section end */}
		</div>
	);
};

export default work;
