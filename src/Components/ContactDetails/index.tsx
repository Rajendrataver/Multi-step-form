import './index.css';
const ContactDetails = () => {
    return (<>
        <div className="contact-details">
            <h4>Contact details</h4>
            <p>Please fill your information so we can get in touch with you.</p>
            <div className="input-fields-container">
                <div className="input-item">
                  <label htmlFor="name">Name</label>
                    <div className="input-fields">
                        <input type="text" placeholder="Enter your name" />
                        <img src="assets/images/user-icon.png" alt="" className="icon"/>
                   </div>
                </div>  
                 <div className="input-item">
                  <label htmlFor="name">Email </label>
                    <div className="input-fields">
                        <input type="text" placeholder="Email address   " />
                        <img src="assets/images/mail.png" alt="" className="icon"/>
                   </div>
                </div>
                <div className="input-item">
                  <label htmlFor="name">Phone Number</label>
                    <div className="input-fields">
                        <input type="text" placeholder="Phone number" />
                        <img src="assets/images/phone.png" alt="" className="icon"/>
                   </div>
                </div>
                <div className="input-item">
                  <label htmlFor="name">Company</label>
                    <div className="input-fields">
                        <input type="text" placeholder="Company name" />
                        <img src="assets/images/company.png" alt="" className="icon"/>
                   </div>
                </div>
            </div>
       </div>
    </>)
}
 
export default ContactDetails