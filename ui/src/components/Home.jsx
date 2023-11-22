
import rocket from "../Images/rocket-space-.jpeg"
import RocketList from "./RocketList"
import aboutimg from "../Images/St.jpg"
import { Link } from "react-scroll";

function Home() {



  return (
    <>
  
  
  
      {/* banner */}
     <section className="   mt-5 " >
        <div className=" banner container pb-5">
          <div className=" bannerbody row py-5 align-items-center ">
            <div className="col-lg-6 ">
              <h5 className="display-4 mb-4 font-weight-bold text-black">A modular UI Kit for Bootstrap</h5>
              <p className=" bannertext h5 aa mb-4 pb-3 text-black-50 mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nunc nisi, suscipit id dapibus sit amet, lacinia nec lorem. Aenean eget urna rutrum suscipit.</p>
              {/* <h3 className="text-black mb-6">5.20$</h3> */}
              
            </div>
            <div className=" imgb col-6 .col-sm-4.col-lg-8text-lg-rigt text-center mt-5 mt-lg-0">
              <div className="banner-phoneimage "> <img src={rocket} /> </div>
            </div>
          </div>
       </div>
      </section>

      {/* About us section */}
      <div className="about"style={{width:"100%", backgroundColor:"lightblue",height:"33em"}}>    
      <section className="about"  id="about">
        <div className=" container aboutcontainer ">
          <div className="row gy-3 w-100 pt-5">
            <div className="col-12 col-lg-6 col-xl-5  my-4">
              <img className="img-fluid rounded abtimg" loading="lazy" src={aboutimg} style={{ width: "77em" }} alt="About 1" />
            </div>
            <div className="col-12 col-lg-6 col-xl-7">
              <div className="row justify-content-xl-center">
                <div className="col-12 col-xl-11">
                  <h2 className="mb-3 textstart">Who Are We?</h2>
                  <p className="lead fs-4 text-secondary mb-3">We help people to build incredible brands and superior products. Our perspective is to furnish outstanding captivating services.</p>
                  <p className="mb-5 ">We are a fast-growing company, but we have never lost sight of our core values. We believe in collaboration, innovation, and customer satisfaction. We are always looking for new ways to improve our products and services.</p>
                  <div className="row gy-4 gy-md-0 gx-xxl-5X">
                    <div className="col-12 col-md-6 ">
                      <div className="d-flex">
                        <div className="me-4 text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                          </svg>
                        </div>
                        <div className="abtV">
                          <h2 className="h4 mb-3">Versatile Brand</h2>
                          <p className="text-secondary mb-0">We are crafting a digital method that subsists life across all mediums.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="d-flex">
                        <div className="me-4 text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-fire" viewBox="0 0 16 16">
                            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                          </svg>
                        </div>
                        <div>
                          <h2 className="h4 mb-3">Digital Agency</h2>
                          <p className="text-secondary mb-0">We believe in innovation by merging primary with elaborate ideas.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>
        </div>

      {/* rocket lit */}
      <section className=" rocketlist mt-5 " >
        <div className="container pb-5">
        <RocketList />
       </div>
      </section>
    
      <p className=""><Link to="nav" smooth={true} duration={500}><i class="bi bi-arrow-up" style={{ fontSize: "2em" ,float:"right",marginBottom:6}}></i></Link></p>

      
    </>
  )
}
export default Home