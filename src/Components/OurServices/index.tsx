import { useContext } from 'react';
import { formContext } from '../Form';
import './index.css';
const OurServices = () => {
    const form = useContext(formContext);
    return (<>
        <div className="service-details">
            <h4>Our Services</h4>
            <p>Please select which service you are interested in.</p>
            <span className='error'>{ form.serviceError}</span>
             <div className="input-fields-container">
                <div className='service-item'><input type="radio" name='service'  value='development' checked={form.service==='development'} onChange={e=>form.setService(e.target.value)}/><label htmlFor="service"><span><img src="assets/images/dev.png" alt="" /></span> Development</label></div>
               <div className='service-item'><input type="radio" name='service' value='designing' checked={form.service==='designing'} onChange={e=>form.setService(e.target.value)}/><label htmlFor="service" ><span><img src="assets/images/design.png" alt="" /></span>Web Design</label></div>
               <div className='service-item'><input type="radio" name='service' value='marketing' checked={form.service==='marketing'} onChange={e=>form.setService(e.target.value)}/><label htmlFor="service"><span><img src="assets/images/marketing.png" alt="" /></span>Marketing</label></div>
               <div className='service-item'><input type="radio" name='service' value='other' checked={form.service==='other'} onChange={e=>form.setService(e.target.value)}/><label htmlFor="service"><span><img src="assets/images/Setting.png" alt="" /></span>Other</label></div>
            </div>
       </div>
    </>)
}
 
export default OurServices