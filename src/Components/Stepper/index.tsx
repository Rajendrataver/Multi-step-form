import './index.css'
import { useContext } from 'react';
import { formContext } from '../Form';
const Stepper = () => {
  const form = useContext(formContext);

  
    switch (form.step) {
        case 1:
        return  <div className="stepper">
              <img src="assets/images/nav1.png" alt="" />
              </div>
        case 2:
        return <div className="stepper">
          <img src="assets/images/nav2.png" alt="" />
        </div>
        case 3:
        return <div className="stepper">
          <img src="assets/images/nav3.png" alt=""/>
        </div>
        case 4:
        return <div className="stepper">
          <img src="assets/images/nav4.png" alt=""  />
        </div>
        default:
        return  <div className="stepper">
              <img src="assets/images/nav1.png" alt="" />
              </div>
    }
}
 
export default Stepper;