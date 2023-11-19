
import { useContext, useEffect, useState } from "react"
import { connectApi,abortController} from "../lib/function"
import './Style.css';
import Rocket from "./Rocket"

function RocketList(props){
  // const{auth}=useContext(AuthContext)
  // const[rockets,setRockets]=useState([])
  // useEffect(()=>{
  //   const getRockets = async() =>{
  //     // /fetch posts from back end
  //     const response =await connectApi("/rockets","GET")
  //     // set posts
  //     setRockets(response.data);
      
  //   }
  //    getRockets()
  //    return()=>{
  //      if(abortController){
  //      abortController.abort() 
  //      }
  //    }
  //    },[])

    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
    const openPopup = () => {
      setIsPopupOpen(true);
    };
  
    const closePopup = () => {
      setIsPopupOpen(false);
    };
  
  
      
    return(
      <> 

      <h3 className="text-center">ROCKETS</h3>
  <div class="album py-5 bg-light">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
            {/* {rockets.map((rocket)=>( */}
              <div class="card mb-4 box-shadow">
                <div class="card-body">
                <h5 class="card-title"> rocket.name</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                 <p class="card-text">type:rocket.type</p>
                 <p class="card-text">status:rocket.name</p>
                   
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                    <button onClick={openPopup}>View Details</button>

                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
               {/* ))} */}
            </div>
            </div>
   </div>
   </div>
  
   <div>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            {/* Popup Content */}
         
            {/* Add other rocket details here */}
            <Rocket/>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
   

    </>
    
     )
}
export default RocketList;