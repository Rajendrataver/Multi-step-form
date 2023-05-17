import './index.css'
const Marketing = () => {
    return (<>
        <section className='marketing-section'>
            <div className="container">
                <div className="marketing-container">
                    <div className='marketing-part-1'>
                        <div className='details'>
                            <div className="logo">
                                <img src="assets/images/Logo2.png" alt="" />
                            </div>
                            <h4>Take a look at our amazing premium Webflow Templates</h4>
                            <p>Also than having free Webflow cloneables, we create cutting-edge premium Webflow templates too.</p>
                            <button className='btn'>Browse templates</button>
                        </div>
                        <div className='marketing-image'>
                            <div className='img'>
                                <img src="assets/images/m1.png" alt="" />
                               </div>
                        </div>
                    </div>
                    <div className='marketing-part-2'>
                      <div className='details'>
                            <div className="logo">
                                <img src="assets/images/logo3.png" alt="" />
                            </div>
                            <h4>Looking to design & develop an amazing 
Webflow website?</h4>
                            <p>If you want to get a hand from the amazing team behind BRIX Templates, get in touch with BRIX Agency today.</p>
                            <button className='btn'>Get a quote</button>
                        </div>
                        <div className='marketing-image'>
                            <div className='img'>
                                <img src="assets/images/m2.png" alt="" />
                               </div>
                        </div>
                    </div>
                </div>
            </div>
     </section>
    </>);
}
 
export default Marketing;