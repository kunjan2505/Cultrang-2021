import React, { useState } from 'react';

import FormInput from '../../components/formInput/formInput';
import Top from './SVG/register cloud.svg';
import Bottom from './SVG/register bottom.svg';
import './register.css';
// import Bottom from './SVG/register bottom.svg';

const Register = () => {
	const [data, setdata] = useState({
        name:'',
		email: '',
		password: '',
	});
	const handleSubmit = async (event) => {
		event.preventDefault();
	};
	const handleChange = (event) => {
        console.log(event)
		const { value, name } = event.target;
		// setdata((prevState) => ({
		// 	...prevState,
		// 	[id]: value,
		// }));
        setdata({ [name]: value });
	};
	return (
		<div className='register-container'>
			<div className='clouds'>
				<img src={Top} />
			</div>
			<div className='register-div'>
				<form onSubmit={handleSubmit}>
					<FormInput
						name='name'
						label='NAME'
						type='email'
						value={data.name}
						handleChange={handleChange}
					/>
					<FormInput
						name='email'
						label='EMAIL'
						type='email'
						value={data.email}
						handleChange={handleChange}
					/>
					<FormInput
						name='password'
						label='PASSWORD'
						type='email'
						value={data.password}
						handleChange={handleChange}
					/>
					<div>
						<span className>Register</span>
					</div>
				</form>
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
