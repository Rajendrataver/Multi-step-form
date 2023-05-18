import { useContext } from 'react';
import { formContext } from '../Form';
import './index.css';
const Budget = () => {
    const form = useContext(formContext);
   return(

       <div className="budget-details">
            <h4>What’s your project budget?</h4>
           <p>Please select the project budget range you have in mind.</p>
           <span className='error'>{form.budgetError}</span>
           <div className="input-fields-container">
               
               <div className='budget-item'><input type="radio" name='budget' value={"$5.000 - $10.000"} checked={form.budget==='$5.000 - $10.000'} onChange={e=>form.setBudget(e.target.value)} /><label htmlFor="service">$5.000 - $10.000</label></div>
               <div className='budget-item'><input type="radio" name='budget' value={"$10.000 - $20.000"} checked={form.budget==='$10.000 - $20.000'} onChange={e=>form.setBudget(e.target.value)}/><label htmlFor="service">$10.000 - $20.000</label></div>
               <div className='budget-item'><input type="radio" name='budget' value={"$20.000 - $50.000"} checked={form.budget==='$20.000 - $50.000'} onChange={e=>form.setBudget(e.target.value)}/><label htmlFor="service">$20.000 - $50.000</label></div>
               <div className='budget-item'><input type="radio" name='budget' value={"$50.000 +"} checked={form.budget==='$50.000 +'} onChange={e=>form.setBudget(e.target.value)}/><label htmlFor="service">$50.000 +</label></div>
            </div>
       </div>
   )
}
 
export default Budget;