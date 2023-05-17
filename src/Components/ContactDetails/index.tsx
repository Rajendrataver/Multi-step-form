
import { useState } from 'react';
import './index.css';

interface contactInterface{
  name: string,
  email: string,
  mobile: string,
  company: string,
  nameError:string
  emailError: string
  mobileError: string
  companyError:string
  setEmail: (e: any) => void,
  setMobile: (e: any) => void,
  setCompany: (e: any) => void,
  setName: (e: any) => void

}

const ContactDetails = ({ name,email,mobile,company,nameError,emailError,mobileError,companyError,setMobile,setCompany, setEmail,setName}:contactInterface ) => {
  return (<>
        <div className="contact-details">
            <h4>Contact details</h4>
            <p>Please fill your information so we can get in touch with you.</p>
            <div className="input-fields-container">
                <div className="input-item">
                  <label htmlFor="name">Name</label>
                   <div className="input-fields">
                    <input type="text" placeholder="Enter your name" value={name} onChange={e => { setName(e) }} />
                      <span className='error'>{nameError }</span>
                        <img src="assets/images/user-icon.png" alt="" className="icon" />
                   </div>
                </div>  
                 <div className="input-item">
                  <label htmlFor="name">Email </label>
                    <div className="input-fields">
                        <input type="text" placeholder="Email address" value={email} onChange={ e=>setEmail(e)} />
                        <span className='error'>{emailError }</span>            
                         <img src="assets/images/mail.png" alt="" className="icon" />
                   </div>
                </div>
                <div className="input-item">
                  <label htmlFor="name">Phone Number</label>
                    <div className="input-fields">
                        <input type="text" placeholder="Phone number" value={mobile} onChange={ e=>setMobile(e)}/>
                        <span className='error'>{mobileError }</span>
            <img src="assets/images/phone.png" alt="" className="icon" />
                   </div>
                </div>
                <div className="input-item">
                  <label htmlFor="name">Company</label>
                    <div className="input-fields">
                        <input type="text" placeholder="Company name" value={company} onChange={ e=>setCompany(e)}/>
            <span className='error'>{companyError }</span>            
            <img src="assets/images/company.png" alt="" className="icon" />
                   </div>
                </div>
            </div>
       </div>
    </>)
}
 
export default ContactDetails