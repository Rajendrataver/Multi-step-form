import './index.css'
import Stepper from '../Stepper';
import ContactDetails from '../ContactDetails';
import { createContext, useState } from 'react';
import OurServices from '../OurServices';
import Budget from '../Budget';
import Submit from '../Submit';
import { VoidExpression } from 'typescript';

interface form{
    step:number
    name: string,
    email: string,
    mobile: string,
    company: string,
    budget: string,
    service:string,
    nameError: string
    emailError: string,
    mobileError: string,
    companyError: string,
    budgetError: string,
    serviceError: string,
    setName: (value: string) => void
    setEmail: (value: string) => void
    setMobile: (value: string) => void
    setCompany: (value: string) => void
    setService: (value: string) => void
    setBudget:(value:string)=>void
}
const details = {
    setName: (value: string) => { },
    setEmail: (value:string) => { },
    setMobile: (value:string) => { },
    setCompany: (value:string) => { },
    setService: (value: string) => { },
    setBudget: (value:string) => { },
    step:1,
    name: '',
    email: '',
    mobile: '',
    company: '',
    budget: '',
    service: '',
    budgetError: '',
    serviceError:'',
    nameError: '',
    emailError: '',
    mobileError: '',
    companyError: '',
}
const formContext = createContext<form>(details);

const Form = () => {
    const [step, setStep] = useState<number>(1);
    
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
    

    const data = {
        setName,
        setBudget,
        setCompany,
        setEmail, setService,
        setMobile,
    step,
    name,
    email,
    mobile,
    company,
    budget,
    service,
    nameError,
    emailError,
    mobileError,
    companyError,
    budgetError,
    serviceError
    }
    
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
                    <formContext.Provider value={data}>
                    <div className='form'>
                        <Stepper/>
                        <hr />
                        <form onSubmit={handleSubmit}>
                            {
                                step === 1 && <ContactDetails/>
                            }  

                            {
                                step === 2 && <OurServices />
                            }  
                            {
                                step === 3 && <Budget  />
                            }  
                            {
                                step === 4 && <Submit />
                            }  
                        </form>
                    </div>
                    </formContext.Provider>
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
export {formContext}
export default Form;