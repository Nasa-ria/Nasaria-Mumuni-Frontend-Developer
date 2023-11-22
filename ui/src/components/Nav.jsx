import logo from "../Images/logos.png"
import { Link } from "react-scroll";
import './Style.css';


function Nav() {
  return (
    <>
      <nav className="navbar" id="nav">
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items mb-3">
            <li><a href="#"> <Link to="" smooth={true} duration={500}>Home</Link></a></li>
            <li><a href="#"> <Link to="about" smooth={true} duration={500}>About</Link></a></li>
            <li><a href="#"> <Link to="rocket" smooth={true} duration={500}>Rocket</Link></a></li>

          </ul>
          <img className="-pt-2" src={logo} style={{ width: "17em", height: "4.5em", objectFit: "contain" }} />
        </div>
      </nav>
    </>
  )
}
export default Nav;