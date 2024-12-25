import React from 'react';
import Image1 from '../assets/img1.jpg';

export const Ourstory = () => {
	return (
		<div className='relative mt-20 overflow-hidden min-h-[550px] sm:min-h-[650px] flex flex-col justify-start items-center duration-200'>
			<div className='container pb-8 sm:pb-0 mt-10'>
				<div className='flex flex-col sm:flex-row justify-evenly items-center text-center sm:text-left gap-20'>
					<div className=' w-full sm:w-1/3 max-w-[500px]'>
						<img
							data-aos='fade-right'
							className='w-full h-auto object-cover rounded-lg'
							src={Image1}
							alt='Waterproofing Solutions'
						/>
					</div>

					<div
						className='w-full sm:w-1/2'
						data-aos='zoom-in'
						data-aos-once='true'>
						<h1
							className='text-3xl sm:text-5xl font-bold'
							data-aos='zoom-out'
							data-aos-duration='500'
							data-aos-once='true'>
							Top Waterproofing Solutions in Dubai
						</h1>
						<p
							className='text-xl mt-5'
							data-aos='fade-up'
							data-aos-duration='500'
							data-aos-delay='100'>
							Since 2009, we have been offering expert waterproofing and surface
							protection services in Dubai. Our team specializes in a wide range
							of technical solutions including waterproofing, epoxy flooring,
							car park coatings, injection grouting, epoxy screeding, expansion
							joints, soil stabilization, earth pit injection, self-levelling,
							and concrete repair. We pride ourselves on working with top-tier
							material suppliers such as Weber, Henkel, MC-Bauchemie, Dermabit,
							SIKA, FOSROC, BASF, and more, ensuring only the highest-quality
							products for our projects.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
