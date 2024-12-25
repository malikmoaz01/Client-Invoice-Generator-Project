import React from 'react';

const Services = () => {
	return (
		<div className='bg-sky-100 h-screen py-16 px-4 sm:px-8 lg:px-16 flex items-center'>
			<div className='container mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8'>
				<div className='sm:w-1/2 text-center sm:text-left'>
					<h1 className='text-4xl sm:text-6xl font-bold text-gray-800 mb-4'>
						Waterproofing in Dubai <br />
						<span className='text-red-600'>Services</span> & Solutions
					</h1>
				</div>

				<div className='sm:w-1/2 text-lg sm:text-2xl text-gray-700'>
					<p>
						<span className='text-black font-bold'>
							{' '}
							We request you to kindly let us know your convenient timing for a
							short meeting to explain our waterproofing services in Dubai
							better.
						</span>
						<br />
						<br />
						Further, we would like to inform you that we are the only Technical
						Service Company providing an Extended Warranty period compared to
						other competitors in the market, as we believe in the quality we
						provide to our customers.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Services;
