import React from 'react';
import { Divider } from 'antd';
import './sponsors.css';
import tossido from './logos/tossido.jpg';
import delta from './logos/delta.png';
import hoverRobotix from './logos/hoverrobotix.jpg';
import inCampus from './logos/incampus.jpg';
import inMovidu from './logos/inmovidu.jpg';
import isb from './logos/isb.png';
import mtechPost from './logos/mtechpost.png';
import nomobo from './logos/nomobo.jpg';
import skillIndia from './logos/skillindia.jpg';
import sociana from './logos/sociana.jpeg';
import sponsorBull from './logos/sponsor_bull.png';
import town from './logos/town.jpg';
import yi from './logos/yi.png';
import cloudVect from './sponsor_cloud.svg';
import bottomVect from './sponsor_bottom.png';
import cb from './logos/cb.png';

class Sponsor extends React.Component {
	
	render(){

		return (
			<div id='sponsor' className='sponsor_main'>
				<img className='cloudVector' src={cloudVect} />
				<div className='box_01'>
					<Divider id='divi-der'>TITLE SPONSOR</Divider>
					<div className='row1'>
						<a href='https://isb.alienbrains.in/2021' target='_blank'>
						<div className='card' id='test' style={{ width: '25vw', marginTop: '-7vw' }}>
							<img src={isb} class='card-img-top' alt='...' id='spons-image' />
						</div></a>
					</div>
					<Divider id='divi-der' style={{ marginTop: '-4vw' }}>
						CO-SPONSORS
					</Divider>
					<div className='row2'>
						<a href='https://www.deltastore.in/' target='_blank'>
						<div className='card' style={{ width: '10vw' }}>
							<img src={delta} class='card-img-top' alt='...' id='spons-image' />
						</div></a>
						<div className='card' style={{ width: '10vw' }}>
							<img src={sponsorBull} class='card-img-top' alt='...' id='spons-image' />
						</div>
					</div>
					<Divider id='divi-der'>INDIVIDUAL SPONSORS</Divider>
					<div className='column4'>
						<div className='row41'>
							<a href='https://www.marktechpost.com/' target='_blank'>
							<div className='card' style={{ width: '10vw' }} id='spons-image'>
								<img src={mtechPost} class='card-img-top' alt='...' />
								<div class='card-body'>
									<h5 class='card-title'>Educational Partner</h5>
								</div>
							</div></a>
							<a href='http://www.townscript.com/' target='_blank'>
							<div className='card' style={{ width: '10vw' }} id='spons-image'>
								<img src={town} alt='...' class='card-img-top' />
								<div>
									<h5 class='card-title'>Platform Partner</h5>
								</div>
							</div></a>
							<a href='https://www.inmovidutech.com/' target='_blank'>
							<div className='card' style={{ width: '10vw' }} id='spons-image'>
								<img src={inMovidu} class='card-img-top' alt='...' />
								<div class='card-body'>
									<h5 class='card-title'>
										Official Industrial Training & Live Project Partner
									</h5>
								</div>
							</div></a>
						</div>
						<div className='row41'>
							<a href='https://nomobo.in/' target='_blank'>
							<div className='card' style={{ width: '10vw' }} id='spons-image'>
								<img src={nomobo} alt='...' class='card-img-top' />
								<div>
									<h5 class='card-title'>Treasure Hunt Partner</h5>
								</div>
							</div></a>
							<a href='http://www.hoverrobotix.com/' target='_blank'>
							<div className='card' style={{ width: '10vw' }} id='spons-image'>
								<img src={hoverRobotix} class='card-img-top' alt='...' />
								<div class='card-body'>
									<h5 class='card-title'>Tech Gadgets Partner</h5>
								</div>
							</div></a>
							<a href='https://codingblocks.com/' target='_blank'>
							<div className='card' style={{ width: '10vw' }} id='spons-image'>
								<img src={cb} class='card-img-top' alt='...' />
								<div class='card-body'>
									<h5 class='card-title'>Coding Partner</h5>
								</div>
							</div></a>
						</div>
						<div className='row41'>
							<a href='https://skillingindia.in/' target='_blank'>
							<div className='card' style={{ width: '10vw' }} id='spons-image'>
								<img src={skillIndia} class='card-img-top' alt='...' />
								<div class='card-body'>
									<h5 class='card-title'>E-learning Partner</h5>
								</div>
							</div></a>
							<div className='card' style={{ width: '10vw' }} id='spons-image'>
								<img src={sociana} class='card-img-top' alt='...' />
								<div class='card-body'>
									<h5 class='card-title'>Registration Partner</h5>
								</div>
							</div>
							<a href='http://www.tossidoonline.in/' target='_blank'>
							<div className='card' style={{ width: '10vw' }} id='spons-image'>
								<img src={tossido} class='card-img-top' alt='...' />
								<div class='card-body'>
									<h5 class='card-title'>Online Shopping Partner</h5>
								</div>
							</div></a>
						</div>
					</div>
					<Divider id='divi-der' className='media_divider'>MEDIA SPONSORS</Divider>
					<div className='column3'>
						<div className='row41'>
							<a href='https://youthincmag.com/' target='_blank'>
							<div className='card' style={{ width: '10vw' }} id='spons-image'>
								<img src={yi} class='card-img-top' alt='...' />
								<div class='card-body'>
									<h5 class='card-title'>Youth Media Partner</h5>
								</div>
							</div></a>
							<a href='https://incampus.in/' target='_blank'>
							<div className='card' style={{ width: '10vw' }} id='spons-image'>
								<img src={inCampus} class='card-img-top' alt='...' />
								<div class='card-body'>
									<h5 class='card-title'>Outreach Partner</h5>
								</div>
							</div></a>
						</div>
					</div>
				</div>
				<div id='bottomVector'>
					<img id='bottomPng' src={bottomVect} />
				</div>
			</div>
		);
	}
};

export default Sponsor;
