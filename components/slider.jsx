import Image from 'next/image';
import { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { SliderData } from './slider-data';

const Slider = ({ slides }) => {
	/* declare variables */
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		/* slider section start */
		<section id="gallery" className="mx-auto max-w-6xl">
			<h1 className="p-4 text-center text-3xl font-bold">Gallery</h1>
			<div className="relative flex justify-center p-4">
				{SliderData.map((slide, index) => {
					return (
						<div key={index} className={index === current ? 'opacity-[1] duration-1000 ease-in' : 'opacity-0'}>
							<FaArrowCircleLeft
								onClick={prevSlide}
								className="absolute top-[50%] left-[30px] z-[2] cursor-pointer select-none text-white/70"
								size={50}
							/>

							{/* image component start */}
							{index === current && <Image src={slide.image} alt="/" width="1440" height="600" objectFit="cover" className="rounded-md" />}
							{/* image component end */}

							<FaArrowCircleRight
								onClick={nextSlide}
								className="absolute top-[50%] right-[30px] z-[2] cursor-pointer select-none text-white/70"
								size={50}
							/>
						</div>
					);
				})}
			</div>
		</section>
		/* slider section end */
	);
};

export default Slider;
