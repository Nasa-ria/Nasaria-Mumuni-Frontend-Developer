
import { useContext, useEffect, useState } from "react"
import { connectApi, } from "../lib/function"
import './Style.css';
import RocketCard from "./RocketCard"
import { Pagination } from 'react-bootstrap';


function RocketList() {
  const [rockets, setRockets] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRockets, setFilteredRockets] = useState([]);
  const [searchNotFound, setSearchNotFound] = useState(false);

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

  const handleSearch = () => {
    // Convert the search query to lowercase for case-insensitive comparison
    const query = searchQuery.toLowerCase();
    const filteredResults = rockets.filter(
      (rocket) =>
        rocket.rocket_name.toLowerCase().includes(query) ||
        rocket.country.toLowerCase().includes(query) ||
        rocket.company.toLowerCase().includes(query)
    );
    // Update state with the filtered rockets
    setFilteredRockets(filteredResults);
    setSearchNotFound(filteredResults.length === 0);
    setSearchQuery('');
  };

  const handleClose = (rocketId) => {
    // Filter out the rocket with the specified ID when close button is clicked
    const updatedResults = filteredRockets.filter((rocket) => rocket.id !== rocketId);
    setFilteredRockets(updatedResults);
  };

  const handleCloseResults = () => {
    setFilteredRockets([]); // Clear search results
    setSearchNotFound(false); // Hide "No results found" message
  };


  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastRocket = currentPage * itemsPerPage;
  const indexOfFirstRocket = indexOfLastRocket - itemsPerPage;
  const currentRockets = rockets.slice(indexOfFirstRocket, indexOfLastRocket);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {/* search */}
      <div>
        <h3 className="text-center mt-5" id="rocket">ROCKETS</h3>
        <div className="d-flex align-items-center justify-content-center mt-5">
          <div class="col-md-8 ">
            <div class="d-flex form-inputs  align-items-center justify-content-center">
              <input class="form-control form-control-lg"  type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search by name,county or company" />
              <button className="btn btn-lg btn-primary"style={{borderRadius:"0.3em"}} onClick={handleSearch}><i class="bi bi-search"></i></button>
            </div>
          </div>
        </div>
        <div>

          {searchNotFound ? (
            <div className="d-flex row justify-content-center">
            <p  className="text-center" style={{fontFamily:"sans-serif",fontSize:"2em"}}>No results found</p>
            <button className=" btn btn-lg btn-primary " style={{width:"5em"}} onClick={handleCloseResults}>Close</button>
          </div>
          ) : (
            <div className="d-flex justify-content-center mt-4 mx-2">
            {filteredRockets.map((rocket) => (
                 <div class="">
                    <div class=" rounded ">
              <div key={rocket.id} className="rocket-card">
                <h3>{rocket.rocket_name}</h3>
                <p><b>Country:</b> {rocket.country}</p>
                <p><b>Company: </b>{rocket.company}</p>
                <button   className="btn  btn-primary" onClick={() => handleClose(rocket.id)}>Close</button>
              </div>
              </div>
              </div>
            ))}
            </div>
          )}
        </div>
      </div>
      <div className="d-flex mb-3 mt-5  ">
          {rockets.map((rocket) => (
            < RocketCard key={rocket.id} rocket={rocket} />

          ))}
       
       </div>
       <div style={{display:"flex",justifyContent:"center"}}>
       <Pagination>
        {Array.from({ length: Math.ceil(rockets.length / itemsPerPage) }).map((_, index) => (
          <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
       </div>
    </>
  )
}


export default RocketList;