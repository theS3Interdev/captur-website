import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
	/* declare varibales */
	const menuLinks = [
		{ name: 'Home', linkDestination: '/' },
		{ name: 'Gallery', linkDestination: '/#gallery' },
		{ name: 'Work', linkDestination: '/work' },
		{ name: 'Contact', linkDestination: '/contact' },
	];
	const [nav, setNav] = useState(false);
	const [color, setColor] = useState('transparent');
	const [textColor, setTextColor] = useState('white');

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const changeColor = () => {
			if (window.scrollY >= 90) {
				setColor('#ffffff');
				setTextColor('#000000');
			} else {
				setColor('transparent');
				setTextColor('#ffffff');
			}
		};
		window.addEventListener('scroll', changeColor);
	}, []);

	return (
		/* navigation section start */
		<nav style={{ backgroundColor: `${color}` }} className="fixed left-0 top-0 z-10 w-full duration-300 ease-in">
			<div className="m-auto flex max-w-[1240px] items-center justify-between p-4 text-white">
				{/* logo section start */}
				<Link href="/">
					<h1 style={{ color: `${textColor}` }} className="text-4xl font-bold">
						Captur
					</h1>
				</Link>
				{/* logo section end */}

				{/* menu start */}
				<ul style={{ color: `${textColor}` }} className="hidden sm:flex">
					{menuLinks.map((link) => (
						<li key={link.name} className="p-4">
							<Link href={link.linkDestination}>{link.name}</Link>
						</li>
					))}
				</ul>
				{/* menu end */}

				{/* hamburger menu start */}
				<div onClick={handleNav} className="z-10 block sm:hidden">
					{nav ? <AiOutlineClose size={21} style={{ color: `${textColor}` }} /> : <AiOutlineMenu size={21} style={{ color: `${textColor}` }} />}
				</div>
				{/* hamburger menu end */}

				{/* mobile menu start */}
				<div
					className={
						nav
							? 'absolute top-0 left-0 right-0 bottom-0 flex h-screen w-full items-center justify-center bg-neutral-800 text-center duration-300 ease-in sm:hidden'
							: 'absolute top-0 left-[-100%] right-0 bottom-0 flex h-screen w-full items-center justify-center bg-neutral-800 text-center duration-300 ease-in sm:hidden'
					}
				>
					<ul>
						{menuLinks.map((link) => (
							<li key={link.name} onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
								<Link href={link.linkDestination}>{link.name}</Link>
							</li>
						))}
					</ul>
				</div>
				{/* mobile menu end */}
			</div>
		</nav>
		/* navigation section end */
	);
};

export default Navbar;
