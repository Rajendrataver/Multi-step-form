import './index.css';
interface serviceInterface  {
    service: string,
    serviceError:string
    setService:(e:any)=>void
}
const OurServices = ({ service, serviceError,setService }: serviceInterface) => {
    const isChecked=()=>{
      
    }
    return (<>
        <div className="service-details">
            <h4>Our Services</h4>
            <p>Please select which service you are interested in.</p>
            <span className='error'>{ serviceError}</span>
             <div className="input-fields-container">
                <div className='service-item'><input type="radio" name='service'  value='development' checked={service==='development'} onChange={e=>setService(e)}/><label htmlFor="service"><span><img src="assets/images/dev.png" alt="" /></span> Development</label></div>
               <div className='service-item'><input type="radio" name='service' value='designing' checked={service==='designing'} onChange={e=>setService(e)}/><label htmlFor="service" ><span><img src="assets/images/design.png" alt="" /></span>Web Design</label></div>
               <div className='service-item'><input type="radio" name='service' value='marketing' checked={service==='marketing'} onChange={e=>setService(e)}/><label htmlFor="service"><span><img src="assets/images/marketing.png" alt="" /></span>Marketing</label></div>
               <div className='service-item'><input type="radio" name='service' value='other' checked={service==='other'} onChange={e=>setService(e)}/><label htmlFor="service"><span><img src="assets/images/Setting.png" alt="" /></span>Other</label></div>
            </div>
       </div>
    </>)
}
 
export default OurServices