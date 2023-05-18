import './index.css'
const Submit = () => {
    return (<>
    <div className="submit-details">
            <div className="input-fields-container" style={{textAlign:'center'}}>
                <div className="submit-success">
                    <img src="assets/images/submit.png" alt="" />
                </div>
                <div>
                    <h4>Submit your quote request</h4>
                    <p>Please review all the information you previously typed in the past steps, and if all is okay, submit your message to receive a project quote in 24 - 48 hours.</p>
                    <button className='btn'>Submit</button>
                </div>
            </div>
       </div>
    </>);
}
 
export default Submit;