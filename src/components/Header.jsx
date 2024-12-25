import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Header = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const dynamicWords = ['Platform', 'Opportunities'];

	
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex(
				(prevIndex) => (prevIndex + 1) % dynamicWords.length
			);
		}, 5000);

	
		return () => clearInterval(interval);
	}, [dynamicWords.length]);

	return (
		<div
			className='relative min-h-screen w-full overflow-hidden'
			id='Header'>
		
			<div
				className='absolute inset-0 bg-cover bg-center transition-all duration-1000'
				style={{
					backgroundImage: `url(/header_image${currentImageIndex + 4}.jpg)`,
				}}></div>

			
			<div className='absolute inset-0 bg-black opacity-60'></div>

		
			<div className='relative z-10'>
				
				<Navbar />

				<div className='container mt-36 text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
					
					<h2
						data-aos='fade-up'
						className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-bold pt-20 fade'>
						Welcome to Our
						<span className='text-blue-400'>
							{dynamicWords[currentImageIndex]}
						</span>
					</h2>

					
					<div className='space-x-6 mt-16'>
						<a
							data-aos='fade-right'
							href='#'
							className='bg-blue-500 hover:bg-slate-900 hover:text-white px-8 py-4 rounded-full'>
							Get Started Now
						</a>
						<a
							data-aos='fade-right'
							href='#'
							className='bg-blue-500 hover:bg-slate-900 hover:text-white px-8 py-4 rounded-full'>
							Contact Us
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
