import React from 'react';
import Image1 from '../assets/img2.webp';

const data = [
	{
		img: Image1,
		name: 'Injection Grouting Works',
		description:
			'Grouting is the task of injecting liquids, Mixed Suspensions, or semi-solid mixtures under compulsion.',
	},
	{
		img: Image1,
		name: 'Waterproofing Solutions',
		description:
			'Providing reliable waterproofing solutions to protect buildings and structures from water damage.',
	},
	{
		img: Image1,
		name: 'Epoxy Flooring',
		description:
			'Durable and aesthetic epoxy flooring solutions for industrial and commercial spaces.',
	},
	{
		img: Image1,
		name: 'Car Park Coating',
		description:
			'High-performance coatings for car park surfaces to ensure durability and safety.',
	},
	{
		img: Image1,
		name: 'Concrete Repair Works',
		description:
			'Comprehensive concrete repair services to extend the life and strength of your structures.',
	},
	{
		img: Image1,
		name: 'Soil Stabilization',
		description:
			'Innovative soil stabilization techniques to improve ground conditions and prevent erosion.',
	},
];

const SubServices = () => {
	return (
		<div className='bg-gradient-to-r from-sky-500 via-sky-700 to-sky-900  py-16 px-4 sm:px-8 lg:px-16'>
			<div className='container mx-auto mt-[-150px] text-center'>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8'>
					{data.map((service, index) => (
						<div
							data-aos='flip-up'
							key={index}
							className='bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300'>
							<img
								src={service.img}
								alt={service.name}
								className='mx-auto w-40 h-56 object-cover'
							/>
							<div className='p-6'>
								<h3 className='text-2xl font-semibold text-gray-800 mb-4'>
									{service.name}
								</h3>
								<p className='text-gray-600 mb-6'>{service.description}</p>
								<button className='mx-auto   hover:bg-slate-900  hover:text-white bg-blue-500 px-8 py-3 text-white rounded-full'>
									Explore
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SubServices;
