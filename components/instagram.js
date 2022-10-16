import InstagramImage from './instagram-image';
import IgImg1 from '../public/ig-img-1.jpeg';
import IgImg2 from '../public/ig-img-2.jpeg';
import IgImg3 from '../public/ig-img-3.jpeg';
import IgImg4 from '../public/ig-img-4.jpeg';
import IgImg5 from '../public/ig-img-5.jpeg';
import IgImg6 from '../public/ig-img-6.jpeg';

const Instagram = () => {
	return (
		<div className="mx-auto max-w-[1240px] py-24 text-center">
			<p className="text-3xl font-bold">Follow me on Instagram</p>
			<p className="pb-4">@Captur</p>
			<div className="grid grid-cols-2 gap-2 p-4 md:grid-cols-3 lg:grid-cols-6">
				<InstagramImage socialImage={IgImg1} />
				<InstagramImage socialImage={IgImg2} />
				<InstagramImage socialImage={IgImg3} />
				<InstagramImage socialImage={IgImg4} />
				<InstagramImage socialImage={IgImg5} />
				<InstagramImage socialImage={IgImg6} />
			</div>
		</div>
	);
};

export default Instagram;
