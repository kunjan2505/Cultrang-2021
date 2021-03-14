import React, { useState } from 'react';
import { useHistory, Link, useParams } from 'react-router-dom';
import FormInput from '../../components/formInput/formInput';
import Top from './SVG/register cloud.svg';
import Bottom from './SVG/register bottom.svg';
import './register.css';
import validator from 'validator';
import axios from 'axios';
import { message } from 'antd';

const Register = () => {
	const { id } = useParams();
	const history = useHistory();
	const [registerData, setRegisterData] = useState({
		leaderName: '',
		email: '',
	});
	const { leaderName, email } = registerData;
	const handleSubmit = async () => {
		const newUser = {
			name: leaderName,
			mail: email,
		};
		try {
			if (validator.isEmail(email)) {
				const res = await axios.post(
					`http://cultrangbackend-env.eba-mpa8r9nr.us-east-2.elasticbeanstalk.com/comps/${id}`,
					newUser
				);
				if (res.data.success) {
					console.log(res.data.success);
					message.success('Registration Successful!');
					localStorage.setItem('auth', res.data.success);
					history.push('/registeration-success');
				} else {
					message.error('Registration Failed! Please try again');
				}
			} else {
				message.warning('Please enter a valid email', 1);
			}
		} catch (err) {
			message.error(err.response);
		}
	};
	console.log(id);
	const handleChange = (e) =>
		setRegisterData({ ...registerData, [e.target.name]: e.target.value });
	return (
		<div className='register-container'>
			<div className='clouds'>
				<img src={Top} alt='clouds' />
			</div>
			<div className='heading-container-reg1'>
				<h1 className='headingReg'>REGISTER</h1>
			</div>
			<div className='register-div' style={{ marginBottom: '5rem' }}>
				<FormInput
					name='leaderName'
					label='LEADERNAME'
					type='text'
					value={registerData.leaderName}
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
			<div>
				<Link to='/'>
					<button
						className='btn btn-light'
						style={{ transform: 'translateY(-1px)', marginBottom: '1rem' }}
					>
						Back to home
					</button>
				</Link>
			</div>
			<div className='heading-container-reg'>
				<h1 className='headingReg'>REGISTER</h1>
			</div>
			<div className='bbuilding'>
				<img src={Bottom} alt='bottom' />
			</div>
		</div>
	);
};

export default Register;
