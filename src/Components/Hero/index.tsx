import HeroFooter from '../HeroFooter';
import Input from '../Input';
import './index.css'
const Hero = () => {
    return (<>
        <section className="hero-section">
            
            <div className="container">
                <div className="hero-container">
                    <h6>Cloneables FOR WEBFLOW</h6>
                    <h1>Multi-step Form Webflow Cloneable Template</h1>
                    <p>Want to receive a monthly email in your inbox with awesome free Webflow cloneables, resources and more? Please submit your email below.  </p>
                    <Input />
                    <span className='flex'><img src="assets/images/right.png" alt="" />  <span>It's  <strong> 100% free</strong> and we will never send more than one email per month</span></span>
                </div>
                <HeroFooter/>
            </div>
    </section>
    </>);
}
 
export default Hero;