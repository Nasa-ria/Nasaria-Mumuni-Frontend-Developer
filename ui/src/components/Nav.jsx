import logo from "../Images/logos.png"
import { Link } from "react-scroll";

function Nav() {



  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <img src={logo} style={{ width: "10em", height: "7em", marginLeft: "6em", }} />

        <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#"><Link to="about" smooth={true} duration={500}>About</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#"><Link to="rocket" smooth={true} duration={500}>Rockets</Link></a>
            </li>
          </ul>
        </div>
        <form className="form-inline my-2  mx-4 my-lg-0 d-flex">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    </>
  )
}
export default Nav