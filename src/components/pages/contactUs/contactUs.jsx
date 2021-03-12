import React, { useState } from 'react';
import clouds from '../../vectors/contactUs/contact_us_cloud.svg';
import bottom from '../../vectors/contactUs/contact_us_bottom.svg';
import './contactUs.css';
import designHead from '../../vectors/contact_headings/design_head.png';
import studentAdvisor from '../../vectors/contact_headings/student_advisor.png';
import publicrelations from '../../vectors/contact_headings/pr_head.png';
import overallCoordinator from '../../vectors/contact_headings/overall_coordinator.png';
import ikraarHead from '../../vectors/contact_headings/ikraar_head.png';
import danceHead from '../../vectors/contact_headings/dance_head.png';
import contentHead from '../../vectors/contact_headings/content_head.png';
import debateHead from '../../vectors/contact_headings/debate_head.png';
import sketchHead from '../../vectors/contact_headings/sketch_head.png';
import filmHead from '../../vectors/contact_headings/editing_head.png';
import financeHead from '../../vectors/contact_headings/finance_head.png';
import harmonyHead from '../../vectors/contact_headings/harmony_head.png';
import quizHead from '../../vectors/contact_headings/quiz_head.png';
import sponsorshipHead from '../../vectors/contact_headings/sponsorship_head.png';
import photographyHead from '../../vectors/contact_headings/photography_head.png';
import artHead from '../../vectors/contact_headings/brush_head.png';
import managementHead from '../../vectors/contact_headings/management_head.png';
import treasureHead from '../../vectors/contact_headings/treasure_head.png';
import { Carousel } from 'antd';
import aastha from '../../vectors/boarding_passes/aastha.png';
import adwait from '../../vectors/boarding_passes/adwait.png';
import akshay from '../../vectors/boarding_passes/akshay.png';
import khushboo from '../../vectors/boarding_passes/khushboo.png';
import saksham from '../../vectors/boarding_passes/saksham.png';
import sejal from '../../vectors/boarding_passes/sejal.png';
import surya from '../../vectors/boarding_passes/surya.png';
import aadil from '../../vectors/boarding_passes/aadil.png';
import arpit from '../../vectors/boarding_passes/arpit.png';
import darshay from '../../vectors/boarding_passes/darshay.png';
import deep from '../../vectors/boarding_passes/deep.png';
import gunjan from '../../vectors/boarding_passes/gunjan.png';
import harshil from '../../vectors/boarding_passes/harshil.png';
import kartik from '../../vectors/boarding_passes/kartik.png';
import mansi from '../../vectors/boarding_passes/mansi.png';
import namami from '../../vectors/boarding_passes/namami.png';
import naveen from '../../vectors/boarding_passes/naveen.png';
import sanya from '../../vectors/boarding_passes/sanya.png';
import satvik from '../../vectors/boarding_passes/satvik.png';
import sourabh from '../../vectors/boarding_passes/sourabh.png';
import svara from '../../vectors/boarding_passes/svara.png';
import { useSpring, animated as a } from 'react-spring';

const ContactUs = () => {
	const [card, setCard] = useState({
		ifcard: true,
		studentAdvCard: false,
		managementHead: false,
		prHead: false,
		sponsHead: false,
		financeHead: false,
		designHead: false,
		contentHead: false,
		danceHead: false,
		symphonyHead: false,
		harmonyHead: false,
		quizHead: false,
		debateHead: false,
		ikraarHead: false,
		brushHead: false,
		sketchHead: false,
		treasureHead: false,
		vividHead: false,
		filmwarsHead: false,
		eventHeads: false,
	});

	// const [contacts, setContacts] = useState({
	// 	khushboo: false,
	// 	saksham: false,
	// 	harshil: false,
	// 	aadil: false,
	// 	aastha: false,
	// 	adwait: false,
	// 	surya: false,
	// 	sourabh: false,
	// 	darshay: false,
	// 	sanya: false,
	// 	sejal: false,
	// 	namami: false,
	// 	kartik: false,
	// 	svara: false,
	// 	satvik: false,
	// 	deep: false,
	// 	gunjan: false,
	// 	mansi: false,
	// 	akshay: false,
	// 	arpit: false,
	// 	naveen: false,
	// });

	const [flipped, setFlipped] = useState(false);

	const { transform, opacity } = useSpring({
		opacity: flipped ? 1 : 0,
		transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
		config: { mass: 5, tension: 500, friction: 80 },
	});

	return (
		<div className='contactUs'>
			<img src={clouds} />
			<div className='container-1'>
				<div className='designation'>
					<span
						className='individualDesignation'
						style={{ opacity: card.ifcard ? '1' : '' }}
						onClick={() => {
							setCard({ ifcard: true });
						}}
					>
						{' '}
						Overall Coordinator
					</span>
					<span
						className='individualDesignation'
						style={{ opacity: card.studentAdvCard ? '1' : '' }}
						onClick={() => {
							setCard({ studentAdvCard: true });
						}}
					>
						Student Adviser
					</span>
					<span
						className='individualDesignation'
						style={{ opacity: card.managementHead ? '1' : '' }}
						onClick={() => {
							setCard({ managementHead: true });
						}}
					>
						Management Head
					</span>
					<span
						className='individualDesignation'
						style={{ opacity: card.sponsorshipHead ? '1' : '' }}
						onClick={() => {
							setCard({ sponsorshipHead: true });
						}}
					>
						Sponsorship Head
					</span>
				</div>
				<div className='box-2'>
					<div
						onClick={() => setFlipped((state) => !state)}
						style={{ display: card.designHead ? '' : 'none' }}
					>
						<a.img
							className='c back'
							src={designHead}
							style={{
								opacity: opacity.interpolate((o) => 1 - o),
								transform,
							}}
						/>
						<a.img
							className='c front'
							src={khushboo}
							style={{
								// display: contacts.khushboo ? '' : 'none',
								opacity,
								transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
							}}
						/>
					</div>

					<div
						onClick={() => setFlipped((state) => !state)}
						style={{ display: card.studentAdvCard ? '' : 'none' }}
					>
						<a.img
							className='c back'
							src={studentAdvisor}
							style={{
								opacity: opacity.interpolate((o) => 1 - o),
								transform,
							}}
						/>
						<a.img
							className='c front'
							src={harshil}
							style={{
								opacity,
								transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
							}}
						/>
					</div>

					<div
						onClick={() => setFlipped((flipped) => !flipped)}
						style={{ display: card.ifcard ? '' : 'none' }}
					>
						<a.img
							className='c back'
							src={overallCoordinator}
							// onClick={() =>
							// 	setContacts({
							// 		saksham: true,
							// 		harshil: false,
							// 		aadil: false,
							// 		aastha: false,
							// 		adwait: false,
							// 		surya: false,
							// 		sourabh: false,
							// 		darshay: false,
							// 		sanya: false,
							// 		sejal: false,
							// 		namami: false,
							// 		kartik: false,
							// 		svara: false,
							// 		satvik: false,
							// 		deep: false,
							// 		gunjan: false,
							// 		mansi: false,
							// 		akshay: false,
							// 		arpit: false,
							// 		naveen: false,
							// 	})
							// }
							style={{
								opacity: opacity.interpolate((o) => 1 - o),
								transform,
							}}
						/>
						<a.img
							className='c front'
							src={saksham}
							style={{
								// display: contacts.saksham ? 'block' : 'none',
								opacity,
								transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
							}}
						/>
					</div>

					<div
						onClick={() => setFlipped((flipped) => !flipped)}
						style={{ display: card.financeHead ? '' : 'none' }}
					>
						<a.img
							className='c back'
							src={financeHead}
							// onClick={() =>
							// 	setContacts({
							// 		saksham: false,
							// 		harshil: false,
							// 		aadil: false,
							// 		aastha: false,
							// 		adwait: false,
							// 		surya: false,
							// 		sourabh: false,
							// 		darshay: true,
							// 		sanya: false,
							// 		sejal: false,
							// 		namami: false,
							// 		kartik: false,
							// 		svara: false,
							// 		satvik: false,
							// 		deep: false,
							// 		gunjan: false,
							// 		mansi: false,
							// 		akshay: false,
							// 		arpit: false,
							// 		naveen: false,
							// 	})
							// }
							style={{
								opacity: opacity.interpolate((o) => 1 - o),
								transform,
							}}
						/>
						<a.img
							className='c front'
							src={darshay}
							style={{
								// display: contacts.darshay ? 'block' : 'none',
								opacity,
								transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
							}}
						/>
					</div>

					<div
						onClick={() => setFlipped((state) => !state)}
						style={{ display: card.contentHead ? '' : 'none' }}
					>
						<a.img
							className='c back'
							src={contentHead}
							// onClick={() =>
							// 	setContacts({
							// 		saksham: false,
							// 		harshil: false,
							// 		aadil: false,
							// 		aastha: false,
							// 		adwait: false,
							// 		surya: false,
							// 		sourabh: false,
							// 		darshay: false,
							// 		sanya: true,
							// 		sejal: false,
							// 		namami: false,
							// 		kartik: false,
							// 		svara: false,
							// 		satvik: false,
							// 		deep: false,
							// 		gunjan: false,
							// 		mansi: false,
							// 		akshay: false,
							// 		arpit: false,
							// 		naveen: false,
							// 	})
							// }
							style={{
								opacity: opacity.interpolate((o) => 1 - o),
								transform,
							}}
						/>
						<a.img
							className='c front'
							src={sanya}
							style={{
								// display: contacts.sanya ? 'block' : 'none',
								opacity,
								transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
							}}
						/>
					</div>

					<div
						onClick={() => {
							setFlipped((state) => !state);
							// setContacts((contacts) => !contacts);
						}}
						style={{ display: card.managementHead ? 'block' : 'none' }}
					>
						<a.img
							className='c back'
							src={managementHead}
							// onClick={() =>
							// 	setContacts({
							// 		saksham: false,
							// 		harshil: false,
							// 		aadil: true,
							// 		aastha: false,
							// 		adwait: false,
							// 		surya: false,
							// 		sourabh: false,
							// 		darshay: false,
							// 		sanya: false,
							// 		sejal: false,
							// 		namami: false,
							// 		kartik: false,
							// 		svara: false,
							// 		satvik: false,
							// 		deep: false,
							// 		gunjan: false,
							// 		mansi: false,
							// 		akshay: false,
							// 		arpit: false,
							// 		naveen: false,
							// 	})
							// }
							style={{
								opacity: opacity.interpolate((o) => 1 - o),
								transform,
							}}
						/>
						<a.img
							className='c front'
							src={aadil}
							style={{
								// display: contacts.aadil ? 'block' : 'none',
								opacity,
								transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
							}}
						/>
					</div>

					{/* <img
						src={publicrelations}
						style={{ display: card.prHead ? '' : 'none' }}
					/>
					<img src={ikraarHead} style={{ display: card.ikraarHead ? '' : 'none' }} />
					<img src={debateHead} style={{ display: card.debateHead ? '' : 'none' }} />
					<img src={sketchHead} style={{ display: card.sketchHead ? '' : 'none' }} />
					<img src={filmHead} style={{ display: card.filmwarsHead ? '' : 'none' }} />
					<img
						src={harmonyHead}
						style={{ display: card.harmonyHead ? '' : 'none' }}
					/>
					<img src={quizHead} style={{ display: card.quizHead ? '' : 'none' }} />
					<img src={danceHead} style={{ display: card.danceHead ? '' : 'none' }} />
					<img
						src={sponsorshipHead}
						style={{ display: card.sponsHead ? '' : 'none' }}
					/>
					<img
						src={photographyHead}
						style={{ display: card.vividHead ? '' : 'none' }}
					/>
					<img src={artHead} style={{ display: card.brushHead ? '' : 'none' }} />
					<img
						src={treasureHead}
						style={{ display: card.treasureHead ? '' : 'none' }}
					/> */}

					<Carousel vertical style={{ display: card.eventHeads ? 'block' : 'none' }}>
						<div>
							<img src={filmHead} />
						</div>
						<div>
							<img src={filmHead} />
						</div>
						<div>
							<img src={filmHead} />
						</div>
						<div>
							<img src={filmHead} />
						</div>
					</Carousel>
				</div>
				<div className='box-3'>
					<span
						className='individualDesignation'
						style={{ opacity: card.prHead ? '1' : '' }}
						onClick={() => {
							setCard({ prHead: true });
						}}
					>
						Public Relations Head
					</span>
					<span
						className='individualDesignation'
						style={{ opacity: card.designHead ? '1' : '' }}
						onClick={() => {
							setCard({ designHead: true });
						}}
					>
						Design Head
					</span>
					<span
						className='individualDesignation'
						style={{ opacity: card.financeHead ? '1' : '' }}
						onClick={() => {
							setCard({ financeHead: true });
						}}
					>
						Finance Head
					</span>
					<span
						className='individualDesignation'
						style={{ opacity: card.contentHead ? '1' : '' }}
						onClick={() => {
							setCard({ contentHead: true });
						}}
					>
						Social Media and Content Head
					</span>
					<span
						className='individualDesignation'
						style={{ opacity: card.eventHeads ? '1' : '' }}
						onClick={() => {
							setCard({ eventHeads: true });
						}}
					>
						Event Heads
					</span>
				</div>
			</div>
			<img src={bottom} style={{ marginTop: '-40vw', zIndex: '-1' }} />
		</div>
	);
};

export default ContactUs;
