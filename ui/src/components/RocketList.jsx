
import { useContext, useEffect, useState } from "react"
import { connectApi, abortController } from "../lib/function"
import './Style.css';
import RocketCard from "./RocketCard"


function RocketList(props) {
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



  // const itemsPerPage = 5; // Number of items per page
  // const [currentPage, setCurrentPage] = useState(1);

  // const indexOfLastRocket = currentPage * itemsPerPage;
  // const indexOfFirstRocket = indexOfLastRocket - itemsPerPage;
  // const currentRockets = rockets.slice(indexOfFirstRocket, indexOfLastRocket);

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>

      <h3 className="text-center" id="rocket">ROCKETS</h3>
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row">
            <RocketCard />
            {/* <RocketCard key={rocket.id} rocket={rocket} /> */}
            {/*    
            <Pagination>
        {Array.from({ length: Math.ceil(rockets.length / itemsPerPage) }).map((_, index) => (
          <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination> */}
          </div>
        </div>
      </div>



    </>

  )
}
export default RocketList;