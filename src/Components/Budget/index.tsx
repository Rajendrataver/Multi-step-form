import './index.css';

interface budgetInterface{
    budget: string,
    budgetError:string
    setBudget:(e:any)=>void
}

const Budget = ({budget,budgetError,setBudget}:budgetInterface) => {
   return(

       <div className="budget-details">
            <h4>What’s your project budget?</h4>
           <p>Please select the project budget range you have in mind.</p>
           <span className='error'>{budgetError}</span>
           <div className="input-fields-container">
               
               <div className='budget-item'><input type="radio" name='budget' value={"$5.000 - $10.000"} checked={budget==='$5.000 - $10.000'} onChange={e=>setBudget(e)} /><label htmlFor="service">$5.000 - $10.000</label></div>
               <div className='budget-item'><input type="radio" name='budget' value={"$10.000 - $20.000"} checked={budget==='$10.000 - $20.000'} onChange={e=>setBudget(e)}/><label htmlFor="service">$10.000 - $20.000</label></div>
               <div className='budget-item'><input type="radio" name='budget' value={"$20.000 - $50.000"} checked={budget==='$20.000 - $50.000'} onChange={e=>setBudget(e)}/><label htmlFor="service">$20.000 - $50.000</label></div>
               <div className='budget-item'><input type="radio" name='budget' value={"$50.000 +"} checked={budget==='$50.000 +'} onChange={e=>setBudget(e)}/><label htmlFor="service">$50.000 +</label></div>
            </div>
       </div>
   )
}
 
export default Budget;