import './index.css'
import Stepper from '../Stepper';
import ContactDetails from '../ContactDetails';
import { useReducer, useRef, useState } from 'react';
import OurServices from '../OurServices';
import Budget from '../Budget';
import Submit from '../Submit';


const Form = () => {
    const [step, setStep] = useState<number>(1);
    const steps = [
        'Contact Details',
        'Our Services',
        "What's Your Project Budget ?",
        "Submit"
    ]
    const handleSubmit = () => {
            setStep(1)
    }
    const nextStep = ()=>{
        setStep(step + 1);
    }

    const previousStep = ()=>{
        setStep(step - 1);
    }
    return (<>
        <section className="form-section">
            <div className="container">
                 <div className="form-container">
                    <h2>Get a project quote</h2>
                    <p>Please fill the form below to receive a quote for your project. Feel free to add as much detail as needed.</p>
                    <div className='form'>
                        <Stepper step={step} />
                        <hr />
                        <form>
                            {
                                step === 1 && <ContactDetails />
                            }  
                            {
                                step === 2 && <OurServices />
                            }  
                            {
                                step === 3 && <Budget />
                            }  

                            {
                                step === 4 && <Submit />
                            }  
                        </form>
                    </div>
                    <div className='action-buttons'>
                        {
                          step!==1&&  <button className='btn outline preview' onClick={previousStep}>Previous step</button>
                        }
                        {
                           step!==4&&  <button className='btn next' onClick={nextStep}>Next step</button>
                        }
                        {
                            step===4&& <button className='btn submit' onClick={handleSubmit}>Submit</button>
                        }
                    </div>
                    <div style={{clear:'both'}}></div>
                 </div>
                
            </div>
        </section>
    </>);
}
 
export default Form;