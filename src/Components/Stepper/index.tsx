import './index.css'
const Stepper = ({ step }: { step: number }) => {
    console.log(step);
    switch (step) {
      case 1:
        return  <div className="stepper">
              <img src="assets/images/nav1.png" alt="" />
              </div>
        break;
      case 2:
        return <div className="stepper">
          <img src="assets/images/nav2.png" alt="" />
        </div>
        break;
      case 3:
        return <div className="stepper">
          <img src="assets/images/nav3.png" alt=""/>
        </div>
        break;
        case 4:
        return <div className="stepper">
          <img src="assets/images/nav4.png" alt=""  />
        </div>
        break;
      default:
return  <div className="stepper">
              <img src="assets/images/nav1.png" alt="" />
              </div>
        
        break;
    }
    return (<>
        
       
    </>);
}
 
export default Stepper;