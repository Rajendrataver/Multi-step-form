import Input from '../Input';
import './index.css'
const Footer = () => {
    return (<footer>
        <div className="container">
            <div className="footer-container">
                 <div className="logo">
                    <img src="./assets/images/Logo.png" alt="" />
                    <p>Copyright © 2021 BRIX Templates | All Rights Reserved</p>
                </div>
                
                <div className="mail-box">
                    <Input/>
                </div>
           </div>
        </div>
    </footer>);
}
 
export default Footer;<>Footer</>