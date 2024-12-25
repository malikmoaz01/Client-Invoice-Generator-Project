import React from 'react';
import Image1 from '../assets/img8.jpeg';
const Experience = () => {
	return (
		<div className='relative w-full h-full'>
			<div className='flex flex-col lg:flex-row items-stretch'>
				<div
					className='relative w-full lg:w-1/2 bg-cover bg-center flex items-center'
					style={{
						backgroundImage: "url('/img7.jpg')",
						height: '100vh',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}>
					<div className='absolute inset-0 bg-black opacity-50'></div>
					<div className='relative z-10 p-8 md:p-16 text-white'>
						<h2
							data-aos='fade-up'
							className='text-4xl md:text-8xl font-bold mb-4 leading-tight'>
							With Long <br /> Periods of{' '}
							<span className='text-blue-500'>Experience</span>
						</h2>
					</div>
				</div>

				<div className='w-full lg:w-1/2 bg-sky-100 flex items-center'>
					<div
						data-aos='fade-down'
						className='p-8 md:p-16 '>
						<p className='text-lg leading-relaxed'>
							With long periods of experience in the field and various veteran{' '}
							<strong>waterproofing company in Dubai</strong> and Abu Dhabi, TSS
							Dubai is one of the most loved water sealing specialist co-ops in
							UAE.
						</p>
						<p className='mt-6 text-lg leading-relaxed'>
							With long periods of experience in the field and various veteran
							waterproofing company in Dubai, and Abu Dhabi, TSS Dubai is one of
							the most loved water sealing specialist co-ops in UAE. Spillages
							and other waterproofing issues are a typical issue in storm
							cellars of numerous structures. Our experts will assist you with
							understanding the fundamental issue causing the issue and
							recommend you the most effective way to for all time beat the
							issue. Whether you want to overhaul any current systems or
							introduce a whole new system, Waterproofing Contractors in Dubai
							given by TSS are awesome to depend on to get the best answer for
							your waterproofing issue. TSS Dubai has firmly established itself
							as the premier choice for epoxy flooring contractors in Dubai.
							With a team of skilled professionals and a commitment to
							delivering exceptional results, TSS Dubai sets the standard for
							excellence in the industry. At times it isn’t straightforward what
							the waterproofing issues in a cellar and focusing on the
							accompanying subtleties will assist you with distinguishing on the
							off chance that there is any such issue and keenly deal with
							something similar.
						</p>
					</div>
				</div>
			</div>
			<div
				data-aos='fade-up'
				className='my-20'>
				<h1 className='text-center px-3 sm:px-0 text-3xl sm:text-5xl font-bold'>
					{' '}
					Why pick TSS Dubai for your <br /> waterproofing prerequisites in
					Dubai?
				</h1>
				<p className='mt-12 w-full px-3 sm:px-0  lg:w-2/3 text-center text-xl sm:text-2xl mx-auto'>
					Dubai has seen storms, unforgiving weather patterns and lashing
					downpours every now and then. Subsequently, it is vital to safeguard
					the structures from having primary harms because of unforgiving
					climate and downpours. Our organization is adroit in preparing your
					structures for such outrageous weather patterns. <br />
					<br />
					Our Waterproofing Service Dubai have helped different clients over the
					course of the ten years. Our staff address the underlying driver of
					the water entrance that primarily harms the structures. We correct the
					issue and find a super durable answer for your spillage issues. We are
					the best waterproofing company in Dubai, UAE. We are the most trusted
					and reliable waterproofing contractors in Dubai, who complete work on
					time. Call TSS Dubai for the effective waterproofing services in
					Dubai.
				</p>
			</div>
			<div className='flex flex-col lg:flex-row items-center justify-center gap-14 py-12  px-10 sm:px-32'>
				<div
					data-aos='fade-right'
					className='w-full lg:w-1/2 flex items-start flex-col gap-7 text-left lg:text-left'>
					<h4 className='text-xl font-semibold text-blue-500'>Our Mission</h4>
					<h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-800'>
						Ready To Make an Impact?
					</h1>
					<p className='text-xl text-gray-600 mt-6'>
						To provide quality workmanship and customer service and maintain the
						highest level of professionalism, honesty and fairness in our
						relationships with our customers, employees, and vendors. To grow by
						continually providing useful and significant products, services, and
						solutions to markets we already serve – and to expand into new areas
						that build on our competencies and customer interests.
					</p>
					<h2 className='text-3xl sm:text-4xl font-bold text-gray-800 mt-8'>
						Making an Impact
					</h2>
					<p className='text-xl text-gray-600 mt-2'>
						To be the preferred contractor of choice. A company that our
						customers want to work with and our employees are proud to work for.
					</p>
					<button className='mt-6  hover:bg-slate-900 hover:text-white bg-blue-500 px-8 py-3 text-white rounded-full'>
						Explore
					</button>
				</div>

				<div className='w-full lg:w-1/2'>
					<img
						data-aos='fade-left'
						src={Image1}
						alt='Our Mission'
						className='w-full h-auto object-cover rounded-lg shadow-lg'
					/>
				</div>
			</div>
		</div>
	);
};

export default Experience;
