import './index.css'
import Stepper from '../Stepper';
import ContactDetails from '../ContactDetails';
import { useReducer, useRef, useState } from 'react';
import OurServices from '../OurServices';
import Budget from '../Budget';
import Submit from '../Submit';


const Form = () => {
    const [step, setStep] = useState<number>(1);
    const steps:string[] = [
        'Contact Details',
        'Our Services',
        "What's Your Project Budget ?",
        "Submit"
    ]
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [mobile, setMobile] = useState<string>('');
    const [company, setCompany] = useState<string>('');
    const [service, setService] = useState<string>('');
    const [budget, setBudget] = useState<string>('');
    const [nameError, setNameError] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [mobileError, setMobileError] = useState<string>('');
    const [companyError, setCompanyError] = useState<string>('');
    const [budgetError, setBudgetError] = useState<string>(' ');
    const [serviceError, setServiceError] = useState<string>(' ');
    
   const handleSubmit=(event:any):void => {
       event.preventDefault();
       let details: object = { name, email, mobile, company,service,budget }
       setStep(1);
       console.log(details)
       setName('');
       setMobile('');
       setEmail('');
       setBudget('');
       setService('');
       setCompany('');
  }
    const nextStep = ():void =>{
        if (!name.length) {
          return setNameError('Enter Name')
        }
        if (!email.length) {
            setNameError('')
            return setEmailError('Enter Email')
        }
        if (!mobile.length) {
            setEmailError('')
            return setMobileError('Enter Mobile')
        }
        if (!company.length) {
            setMobileError('')
            return setCompanyError('Enter Company')
        } if (step===1&&company.length) {
            setCompanyError('');
            setNameError('')
            setMobileError('')
            setEmailError('')
             return setStep(step + 1);
        }
        if (!service.length) {
          return   setServiceError('Select Service')
        }
        if (step === 2&&service.length) {
            setServiceError(' ')
            return setStep(step+1);
        }
        if (!budget.length) {
          return   setBudgetError('Select Budget')
        }
        if (step === 3&&budget.length) {
            setStep(step+1)
            return setBudgetError('');
        }
         setStep(step+1)    
    }

    const previousStep = ():void =>{
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
                        <form onSubmit={handleSubmit}>
                            {
                                step === 1 && <ContactDetails nameError={nameError} emailError = { emailError } mobileError = {mobileError} companyError={companyError}  mobile={mobile} company={company} name={name} email={email} setMobile={ e=>setMobile(e.target.value)} setCompany={e=>setCompany(e.target.value)} setName={e => setName(e.target.value)}  setEmail={e=>setEmail(e.target.value)}  />
                            }  

                            {
                                step === 2 && <OurServices serviceError={serviceError} service={service} setService={e=>setService(e.target.value)} />
                            }  
                            {
                                step === 3 && <Budget budgetError={ budgetError}  budget={budget} setBudget={ e=>setBudget(e.target.value)} />
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
                    </div>
                    <div style={{clear:'both'}}></div>
                 </div>
                
            </div>
        </section>
    </>);
}
 
export default Form;