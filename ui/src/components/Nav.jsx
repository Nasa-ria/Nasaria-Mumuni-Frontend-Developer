import logo from "../Images/logos.png"
import { Link } from "react-scroll";


function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <img src={logo} style={{ width: "15em", height: "10em", marginLeft: "6em", }} />
        <div className="collapse navbar-collapse justify-content-md-center " id="navbarsExample08">
          <ul className="navbar-nav d-flex">
            <li className="nav-item " style={{fontSize:"2em"}}>
              <Link to="about" smooth={true} duration={500}>About</Link>
            </li>
            <li className="nav-item" style={{fontSize:"2em"}}>
              <Link to="rocket" smooth={true} duration={500}>Rockets</Link>
            </li>
          </ul>
        </div>
   </nav>
    </>
  )
}
export default Nav;