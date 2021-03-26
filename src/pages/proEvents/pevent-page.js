import React from 'react';
import { useParams, Link } from 'react-router-dom';
import clouds from './peventsTop.svg';
import pevntsbottom from './peventsBottom.svg';
import ticett1 from './standup.jpg';
import ticket2 from './Melodious.jpg';
import ticket3 from './Music.jpg';
import ticket4 from './theatre.jpg';
import ticket5 from './dance.jpg';
import mobilebottom from './mobile-bottom.png';
import './pevent-page.css';

const Event = () => {
	const { id } = useParams();
	var titles = [
		'COMEDY NIGHT',
		'MELODIOUS AU REVOIR',
		'MUSIC WORKSHOP BY ADIL RASHID',
		'THEATER WORKSHOP BY PRADEEP BAJPAI',
		'HIP HOP WORKSHOP BY KUNAL SRIVASTAVA',
	];
	var title = titles[0];
	var ticket = ticett1;
	var discription =
		'Comedic performance in front of a live audience on an online platform, by the esteemed satirist, Appurv Gupta. A pro-event involving humorous instances, jokes, one-liners and much more, to entertain the crowd and tickle some funny bones.';
	if (id === 'melodiousAuRevoir') {
		title = titles[1];
		ticket = ticket2;
		discription =
			'An evening filled with soulful melodies, dedicated to resonant musical performances by a virtuoso coupled with a live performance by a ‘pomedian’ which is sure to drive you nuts! Prepare yourselves to laugh and cry, all at the same time as you join us for this melodious au revoir!';
	} else if (id === 'musicWorkshop') {
		title = titles[2];
		ticket = ticket3;
		discription = '';
	} else if (id === 'theaterWorkshop') {
		title = titles[3];
		ticket = ticket4;
		discription =
			'Want to be a superstar? Join our virtual workshop on 9th of April to learn and get some tips to boost your acting skills with Actor and Director, Mr Pradeep Bajpai. The webinar is open to all, so set up your acting faces and learn something new and fun. Register for Workshop here';
	} else if (id === 'hipHopWorkshop') {
		title = titles[4];
		ticket = ticket5;
		discription =
			'Yearning to learn and have fun with street dance styles? Join our virtual workshop on 10th April to learn Hip Hop from Dancer and Choreographer, Kunal Srivastava. The workshop is open to all, so put on your dancing shoes and join other dancers like yourself to learn something new and fun. No prerequisites, because Anybody Can Dance!';
	}

	return (
		<div className='pro-event-container'>
			<Link to='/'>
				<i className='event-back fa fa-chevron-left'></i>
			</Link>
			<div className='event-context'>
				<div className='pevnt-top'>
					<img src={clouds} alt='clouds'></img>
				</div>

				<div className='pevent-tickets'>
					<div className='ticket-container'>
						<img className='pevent-poster' src={ticket} alt='ticet'></img>
					</div>

					<div className='pevent-register'>
						<div className='pevent-title'>{title}</div>
						<div className='detail-container'>{discription}</div>
						<div className='register-button'>
							<Link to={`/registeration/${id}`}>
								<p className='register-text'>REGISTER</p>
							</Link>
						</div>
					</div>
				</div>

				<div className='pevent-bottom'>
					<img src={pevntsbottom} alt='pevent-bottom'></img>
				</div>
				<div className='pevent-mobile'>
					<div className='pevent-tickets-m'>
						<div className='pevent-title' id='big-title'>
							{title}
						</div>
						<div className='ticket-container-outer'>
							<div className='ticket-container'>
								<img className='pevent-poster' src={ticket} alt='ticet'></img>
							</div>
						</div>

						<div className='details-m'>
							<div className='detail-container-m'>{discription}</div>
						</div>
						<div className='registre-btn-container'>
							<div className='register-button-m'>
								<Link to={`/registeration/${id}`}>
									<p className='register-text'>REGISTER</p>
								</Link>
							</div>
						</div>
					</div>
					<div className='pevnt-mobile-bottom'>
						<img src={mobilebottom} alt='pevent-bottm'></img>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Event;
