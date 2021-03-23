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
		<div id="about" className='about-us-container'>
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
							<div className='content1'>
								<div className='content11'>
									<p className='regrets'>
										{IMAGE_URL.about.content}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='slider-div'>
						<Slider {...settings}>
							{IMAGE_URL.photos.map((url) => (
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
