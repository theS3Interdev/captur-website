import Meta from '../lib/meta';
import Hero from '../components/hero';
import Contact from '../components/contact';

const contact = () => {
	return (
		<div>
			{/** title bar start */}
			<Meta title="Contact Me | Captur Photography | Superior Software Solutions" />
			{/** title bar end */}
			{/** hero section start */}
			<Hero heading="Contact" message="Submit the form below for more work and quotes" />
			{/** hero section end */}

			{/** contact section start */}
			<Contact />
			{/** contact section end */}
		</div>
	);
};

export default contact;
