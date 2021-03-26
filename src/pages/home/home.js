import React from 'react';
import Homedesktop from './home-desktop';
import Homemobile from './home-mobile';
import './home.css';

const Home = ({ fullpageApi }) => {
	return (
		<>
			<div className='home-desktop'>
				<Homedesktop fullpageApi={fullpageApi}></Homedesktop>
			</div>
			<div className='home-mobile'>
				<Homemobile fullpageApi={fullpageApi}></Homemobile>
			</div>
		</>
	);
};

export default Home;
