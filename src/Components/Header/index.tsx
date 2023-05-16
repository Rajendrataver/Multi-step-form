import './index.css'
const Header = () => {
    return (<>
    <header>
        <div className="container">
            <div className="header-container">
                <div className="logo">
                  <img src="./assets/images/Logo.png" alt="" />
                </div>
                <div className="links">
                    <a href="/" className="btn">Clone now</a>
                </div>
            </div>
        </div>
    </header>
    </> );
}
 
export default Header