import React from 'react';
import 'antd/dist/antd.css';
import Slider from 'react-slick';
import './aboutUs.css';
import { Image } from 'antd';
import { IMAGE_URL } from './imageUrl';
import Asset1 from './SVG/about us cloud.svg';
import Asset2 from './SVG/about us bottom.svg';

const AboutUs = () => {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2,
		rows: 2,
		dots: true,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					rows: 2,
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
					rows: 1,
				},
			},

			{
				breakpoint: 425,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					rows: 1,
					dots: false,
				},
			},
		],
	};
	return (
		<div className='about-us-container'>
			<div>
				<img src={Asset1} alt='clouds' className='aboutusClouds' />
			</div>
			<div className='heading-container2'>
				<h1 className='heading'>ABOUT US</h1>
			</div>
			<div className='about-us'>
				<div className='content-div'>
					<div className='contents'>
						<div className='content-dark'>
							<div className='content'>
								<p className='regrets'>
									IIT Goa, into its 5th year of existence only has already grown to be a
									much sought-after institution for engineering students and a
									melting-pot of ideas.We are nestled into the vast and beautiful expanse
									of GEC campus in Farmagudi, Goa with a vibrant population of over three
									thousand students and five hundred faculty members and staffs. While we
									strive to achieve excellence in academic endeavors, we are certainly
									touched and influenced by the rich and unique culture of Goa which is
									exactly what we want to celebrate through the Cultural fest of IIT Goa,
									Cult Rang. CultRang is a celebration of the massive diversity that
									characterises our country. sIt aims at instilling a sense of collective
									engagement by encouraging participation from several institutes all
									across the country. It consists of exciting events, competitions and
									workshops featuring experts in related fields, focusing on domains of
									performing arts that recognise the role of various cultures in our
									everyday indulgences.
								</p>
								{/* <div style={{backgroundColor: 'white', width: '100%', height: '1rem', position: 'fixed', bottom: '0' }}></div> */}
							</div>
						</div>
					</div>
					<div className='slider-div' >
						<Slider {...settings}>
							{IMAGE_URL.map((url) => (
								<div>
									<Image className='images' src={url.url} />
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
			<div className='heading-container1'>
				<h1 className='heading'>ABOUT US</h1>
			</div>
			<div className='buildings'>
				<img src={Asset2} alt='buildings' />
			</div>
		</div>
	);
};

export default AboutUs;
