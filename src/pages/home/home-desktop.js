import React from 'react';
import './home-desktop.css';
import cultrangLogo from './cultrang-logo.png';
import clouds from './home-cloud.svg';
import bottom from './home-bottom.svg';
import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true
import ReactFullpage from '@fullpage/react-fullpage';

const Home = ({ fullpageApi }) => {
	return (
		<>
			<div className='home--container'>
				<div className='home-top'>
					<img className='home-clouds' src={clouds} alt='clouds'></img>
				</div>
				<div className='navbar-container'>
					<div className='items'>
						<div className='item item1'>HOME</div>
						<div className='item item2'>
							<a
								href='#'
								onClick={() => {
									fullpageApi.moveSectionDown();
								}}
							>
								ABOUT US
							</a>
						</div>
						<div className='item item3'>
							<a
								href='#'
								onClick={() => {
									fullpageApi.moveSectionDown();
									fullpageApi.moveSectionDown();
								}}
							>
								EVENTS
							</a>
						</div>
						<div className='item item4'>
							<a
								href='#'
								onClick={() => {
									fullpageApi.moveSectionDown();
									fullpageApi.moveSectionDown();
									fullpageApi.moveSectionDown();
								}}
							>
								PRO EVENTS
							</a>
						</div>
						<div className='item item5'>
							<a
								href='#'
								onClick={() => {
									fullpageApi.moveSectionDown();
									fullpageApi.moveSectionDown();
									fullpageApi.moveSectionDown();
									fullpageApi.moveSectionDown();
								}}
							>
								SPONSOR
							</a>
						</div>
						<div className='item item6'>
							<a
								href='#'
								onClick={() => {
									fullpageApi.moveSectionDown();
									fullpageApi.moveSectionDown();
									fullpageApi.moveSectionDown();
									fullpageApi.moveSectionDown();
									fullpageApi.moveSectionDown();
								}}
							>
								CONTACT US
							</a>
						</div>
						<div className='item item7'>
							<a href='https://drive.google.com/uc?export=download&id=1qotLJYFWenibQfYfn0nHnApl_EG7_iKP'>
								RULEBOOK
							</a>
						</div>
					</div>
				</div>
				<div className='logo-container'>
					<img src={cultrangLogo} alt='CULTRANG' className='cultrang-logo-pc'></img>
				</div>
				<div className='home-bottom'>
					<img className='bottom-image' src={bottom} alt='bottom'></img>
				</div>
				<div className='bottom-space'></div>
			</div>
		</>
	);
};

export default Home;
