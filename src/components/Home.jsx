import React from 'react';
import Header from './Header';
import { Ourstory } from './Ourstory';
import Services from './Services';
import SubServices from './SubServices';
import MasterPiece from './MasterPiece';
import Experience from './Experience';

const Home = () => {
	return (
		<div>
			<Header></Header>
			<Ourstory></Ourstory>
			<Services></Services>
			<SubServices></SubServices>
			<MasterPiece></MasterPiece>
			<Experience></Experience>
		</div>
	);
};

export default Home;
