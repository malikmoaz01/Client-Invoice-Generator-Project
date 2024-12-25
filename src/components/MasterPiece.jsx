import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import Image1 from '../assets/img4.jpg';
import Image2 from '../assets/img5.jpg';
import Image3 from '../assets/img6.jpg';
import Image4 from '../assets/img3.jpg';
import Image5 from '../assets/img10.jpg';
import Image6 from '../assets/img11.jpg';
const projects = [
	{ id: 1, image: Image1, title: 'Warner Bros' },
	{ id: 2, image: Image2, title: 'Marina Mall L - 1' },
	{ id: 3, image: Image3, title: 'Burj Khalifa' },
	{ id: 4, image: Image4, title: 'Queen Elizabeth Ship' },
];
const data = [
	{
		img: Image5,
		name: 'Marine Solutions',
		description:
			'Our experienced team possesses specialized knowledge to effectively waterproof marine structures, including docks, piers, and offshore platforms. We provide comprehensive solutions that protect against water ingress and corrosion, ensuring long-lasting performance even in harsh marine conditions.',
	},
	{
		img: Image6,
		name: 'Star Hotel Solutions',
		description:
			'From basements to rooftops, swimming pools to spa facilities, our meticulous approach and attention to detail protect against water damage, mold growth, and structural deterioration. With us, you can provide a luxurious and comfortable experience for your guests, free from water intrusion concerns.',
	},
];

const MasterPiece = () => {
	return (
		<>
			<div className=' bg-sky-100 py-20 '>
				<div className='text-center mb-12'>
					<h1 className='text-4xl  lg:text-5xl font-bold text-gray-800'>
						We are specialists in Marine & Hotels
					</h1>
				</div>

				<div className='grid sm:grid-cols-1 md:grid-cols-2 gap-12 sm:px-20 px-4'>
					{data.map((item, index) => (
						<div
							data-aos='flip-right'
							key={index}
							className='bg-white shadow-md rounded-lg overflow-hidden'>
							<img
								src={item.img}
								alt={item.name}
								className='w-full h-64 object-cover'
							/>
							<div className='p-6'>
								<h2 className='text-2xl font-semibold text-gray-800 mb-4'>
									{item.name}
								</h2>
								<p className='text-lg text-gray-600'>{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className=' pb-12 px-4 sm:px-6 lg:px-12 '>
				<div className='flex pt-10 flex-col lg:flex-row items-start lg:items-center gap-8'>
					<div
						data-aos='fade-right'
						className='w-full lg:w-1/3'>
						<p className='text-blue-500 text-lg font-semibold'>Our Projects</p>
						<h2 className='text-5xl font-bold text-gray-800 mt-2 leading-tight'>
							Our{' '}
							<span className='text-blue-500 underline decoration-4'>
								Masterpieces
							</span>
						</h2>
						<p className='text-gray-600 mt-4 text-lg leading-relaxed'>
							Explore our most remarkable projects, built with precision and
							excellence. From towering skyscrapers to luxury villas, our work
							speaks for itself.
						</p>
						<button className=' mt-5   hover:bg-slate-900  hover:text-white bg-blue-500 px-8 py-3 text-white rounded-full'>
							Explore
						</button>
					</div>

					<div className='w-full lg:w-2/3'>
						<ResponsiveMasonry
							columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
							<Masonry gutter='16px'>
								{projects.map((project) => (
									<div
										data-aos='fade-left'
										key={project.id}
										className='rounded-lg overflow-hidden'>
										<img
											src={project.image}
											alt={project.title}
											className='w-full object-cover'
											style={{ height: 'auto' }}
										/>

										<p className=' text-end  mt-2'>{project.title}</p>
									</div>
								))}
							</Masonry>
						</ResponsiveMasonry>
					</div>
				</div>
			</div>
		</>
	);
};

export default MasterPiece;
