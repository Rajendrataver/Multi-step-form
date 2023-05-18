
import { useContext, useState } from 'react';
import { formContext } from '../Form';
import './index.css';
const ContactDetails = () => {
  const form = useContext(formContext);
  return (<>
        <div className="contact-details">
            <h4>Contact details</h4>
            <p>Please fill your information so we can get in touch with you.</p>
            <div className="input-fields-container">
                <div className="input-item">
                  <label htmlFor="name">Name</label>
                   <div className="input-fields">
                    <input type="text" placeholder="Enter your name" value={form.name} onChange={e => form.setName(e.target.value) } />
                      <span className='error'>{form.nameError}</span>
                        <img src="assets/images/user-icon.png" alt="" className="icon" />
                   </div>
                </div>  
                 <div className="input-item">
                  <label htmlFor="name">Email </label>
                    <div className="input-fields">
                        <input type="text" placeholder="Email address" value={form.email} onChange={ e=>form.setEmail(e.target.value)} />
                        <span className='error'>{form.emailError }</span>            
                         <img src="assets/images/mail.png" alt="" className="icon" />
                   </div>
                </div>
                <div className="input-item">
                  <label htmlFor="name">Phone Number</label>
                    <div className="input-fields">
                        <input type="text" placeholder="Phone number" value={form.mobile} onChange={ e=>form.setMobile(e.target.value)}/>
                        <span className='error'>{form.mobileError }</span>
            <img src="assets/images/phone.png" alt="" className="icon" />
                   </div>
                </div>
                <div className="input-item">
                  <label htmlFor="name">Company</label>
                    <div className="input-fields">
                        <input type="text" placeholder="Company name" value={form.company} onChange={ e=>form.setCompany(e.target.value)}/>
            <span className='error'>{form.companyError }</span>            
            <img src="assets/images/company.png" alt="" className="icon" />
                   </div>
                </div>
            </div>
       </div>
    </>)
}
 
export default ContactDetails