
import { useContext, useEffect, useState } from "react"
import { connectApi, } from "../lib/function"
import './Style.css';
import RocketCard from "./RocketCard"
import { Pagination } from 'react-bootstrap';


function RocketList() {
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await connectApi("/rockets", "GET")
        const data = await response;
        if (data.success) {
          setRockets(data.data);
          // console.log('Rocket Data:', data.data);
        } else {
          console.error('Error in server response:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }

    };

    fetchData();
  }, []);



  const itemsPerPage = 5; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastRocket = currentPage * itemsPerPage;
  const indexOfFirstRocket = indexOfLastRocket - itemsPerPage;
  const currentRockets = rockets.slice(indexOfFirstRocket, indexOfLastRocket);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>

      <h3 className="text-center" id="rocket">ROCKETS</h3>
      <div class="album py-5 bg-light">
        <div class="container">
          {/* <div class="row"> */}
          <div class="row row-cols-1 row-cols-md-2">
            {/* {console.log(rockets)} */}

            {rockets.map((rocket) => (
              < RocketCard key={rocket.id} rocket={rocket} />

            ))}



           
          </div>
        </div>
      </div>
      <Pagination>
              {Array.from({ length: Math.ceil(rockets.length / itemsPerPage) }).map((_, index) => (
                <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                  {index + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </>
          )
}

export default RocketList;