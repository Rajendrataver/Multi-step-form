import './index.css'
const Stepper = ({ step }: { step: number }) => {
    console.log(step);
    switch (step) {
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