import React, { useState } from 'react';
import Image1 from '../assets/Logo1-removebg-preview.png';
import { IoMenu, IoClose } from 'react-icons/io5';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen((prevState) => !prevState);
	};

	return (
		<>
			<div className='relative top-0 left-0 w-full z-10 bg-transparent'>
				<div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32'>
					<img
						className='w-[120px] h-[70px]'
						src={Image1}
						alt='Logo'
					/>
					<ul className='hidden md:flex gap-7 text-2xl text-white'>
						<a
							href='#home'
							className='cursor-pointer'>
							Home
						</a>
						<a
							href='#about'
							className='cursor-pointer'>
							About
						</a>
						<a
							href='#projects'
							className='cursor-pointer'>
							Projects
						</a>
						<a
							href='#contact'
							className='cursor-pointer'>
							Contact
						</a>
					</ul>
					<button className='hidden md:block hover:bg-slate-900 hover:text-white bg-blue-500 px-8 py-3 text-white rounded-full'>
						Free Demo
					</button>
					<IoMenu
						className='md:hidden text-white text-3xl cursor-pointer'
						onClick={toggleMenu}
					/>
				</div>

				<div
					className={`md:hidden fixed w-full right-0 top-0 bottom-0 bg-white transition-transform ${
						isMenuOpen ? 'translate-x-0' : 'translate-x-full'
					}`}>
					<div className='flex justify-end p-6'>
						<IoClose
							className='text-3xl cursor-pointer'
							onClick={toggleMenu}
						/>
					</div>
					<ul className='flex flex-col items-center gap-4 mt-5 px-5 text-lg font-medium'>
						<a
							href='#home'
							className='px-4 py-2 rounded-full inline-block hover:bg-gray-200'
							onClick={toggleMenu}>
							Home
						</a>
						<a
							href='#about'
							className='px-4 py-2 rounded-full inline-block hover:bg-gray-200'
							onClick={toggleMenu}>
							About
						</a>
						<a
							href='#projects'
							className='px-4 py-2 rounded-full inline-block hover:bg-gray-200'
							onClick={toggleMenu}>
							Projects
						</a>
						<a
							href='#contact'
							className='px-4 py-2 rounded-full inline-block hover:bg-gray-200'
							onClick={toggleMenu}>
							Contact
						</a>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Navbar;
