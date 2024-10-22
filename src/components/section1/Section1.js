import React from 'react'
import './Section1.css'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useState } from 'react';
import gsmarena from '../../assets/logos/gsmarena.png'
import newsweek from '../../assets/logos/newsweek.png'
import ndtv from '../../assets/logos/ndtv.png'
import checkbox  from '../../assets/checkbox.svg'

const Section1 = () => {

	const logos = [gsmarena, ndtv, newsweek];

	const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        website: '',
        revenue: ''
    });

	const handleChange = (e) => {
        
		const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

	const handlePhoneChange = (value) => {
        setFormData((prevData) => ({
            ...prevData,
            phone: value,
        }));
    };

	const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); 

		setFormData({
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			website: '',
			revenue: ''
		});
    };
    
  return (
    <div className="section1">
          <div className="col1">
            <h1>adpushup</h1>
            <h2>Grow your ad revenue by more than 40% with Google's Premier Certified Publishing Partner</h2>
			<div className="list">
				<ul>
					<li><img src={checkbox} alt="" width='24px'/> Exclusive access to direct deals.</li>
					<li><img src={checkbox} alt="" width='24px'/> Increased competition for your ad inventory.</li>
					<li><img src={checkbox} alt="" width='24px'/> Ad fraud detection with Google policy compliance.</li>
				</ul>
			</div>
			<div className="logo-container">
				{logos.map((logo, index) => (
					<img key={index} src={logo} alt="" />
				))}
			</div>
          </div>
          <div className="col2">
				<h3>Setup a Demo</h3>
				<p style={{fontSize:'13px'}}>Free 30 Min Website Monetization Consulting Included</p>
				<form className='form' onSubmit={handleSubmit}>
					<input 
					type="text" 
					name='firstName'
					placeholder="First Name" 
					value={formData.firstName} 
					onChange={handleChange} 
					required 
					/>

					<input 
					type="text" 
					name='lastName'
					placeholder="Last Name" 
					value={formData.lastName} 
					onChange={handleChange} 
					required 
					/>

					<input 
					type="text" 
					name='email'
					placeholder="Work email" 
					value={formData.email} 
					onChange={handleChange} 
					required 
					/>

					<PhoneInput
					className='phoneinput'
					country={'in'}
					name='phone'
					value={formData.phone}
					onChange={handlePhoneChange}
					inputStyle={{ width: '100%' }} 
					required
					style={{ marginTop: '10px', marginBottom: '10px' }}
					/>

					<input 
					type="text" 
					name='website'
					placeholder="Website" 
					value={formData.website} 
					onChange={handleChange} 
					required 
					/>

					<select 
					value={formData.revenue} 
					name='revenue'
					onChange={handleChange} 
					required
					>
					<option value="">Monthly Revenue (USD)*</option>
					<option value={'Less than 1000 USD'}>Less than 1000 USD</option>
					<option value={'1,000 - 2,999 USD'}>1,000 - 2,999 USD</option>
					<option value={'3,000 - 10,000 USD'}>3,000 - 10,000 USD</option>
					<option value={'10,000 - 40,000 USD'}>10,000 - 40,000 USD</option>
					<option value={'More than 40,000 USD'}>More than 40,000 USD</option>
					</select>

					<button type="submit">GET A FREE DEMO</button>
				</form>
				<p>By signing up you agree to our <span style={{fontWeight: '900', cursor:'pointer'}}>Terms</span> and <span style={{fontWeight: '900', cursor:'pointer'}}>Privacy Policy</span>.</p>
			</div>

			</div>

  )
}

export default Section1