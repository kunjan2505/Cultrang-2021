import React, { useState } from 'react';

import FormInput from '../../components/formInput/formInput';
import Top from './SVG/register cloud.svg';
import Bottom from './SVG/register bottom.svg';
import './register.css';
// import Bottom from './SVG/register bottom.svg';

const Register = () => {
	const [registerData, setRegisterData] = useState({
		leaderName: '',
		teamName: '',
		email: '',
	});
	const handleSubmit = async (event) => {
	};
	const handleChange = (e) =>
		setRegisterData({ ...registerData, [e.target.name]: e.target.value });
	return (
		<div className='register-container'>
			<div className='clouds'>
				<img src={Top} />
			</div>
			<div className='heading-container-reg1'>
				<h1 className='headingReg'>REGISTER</h1>
			</div>
			<div className='register-div'>
				<FormInput
					name='leaderName'
					label='LEADERNAME'
					type='text'
					value={registerData.leaderName}
					handleChange={handleChange}
				/>
				<FormInput
					name='teamName'
					label='TEAM NAME'
					type='text'
					value={registerData.teamName}
					handleChange={handleChange}
				/>
				<FormInput
					name='email'
					label='EMAIL'
					type='email'
					value={registerData.email}
					handleChange={handleChange}
				/>
				<div className='reg-button'>
					<button
						type='button'
						className='btn btn-secondary'
						onClick={() => {
							handleSubmit();
						}}
					>
						Register
					</button>
				</div>
			</div>
			<div className='heading-container-reg'>
				<h1 className='headingReg'>REGISTER</h1>
			</div>
			<div className='bbuilding'>
				<img src={Bottom} />
			</div>
		</div>
	);
};

export default Register;
