
import { useContext, useEffect, useState } from "react"
import { connectApi, } from "../lib/function"
import './Style.css';
import RocketCard from "./RocketCard"
import { Pagination, InputGroup, Form, Button, Row, Col } from 'react-bootstrap';



function RocketList() {
  const [filteredRockets, setFilteredRockets] = useState([]);
  const [rockets, setRockets] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentRockets, setCurrentRockets]=useState([]);

  const [searchNotFound, setSearchNotFound] = useState(false);

  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = (pageNumber) => {setCurrentPage(pageNumber)
  
    const indexOfLastRocket = pageNumber * itemsPerPage;
    const indexOfFirstRocket = indexOfLastRocket - itemsPerPage;
    setCurrentRockets( filteredRockets.slice(indexOfFirstRocket, indexOfLastRocket));
    console.log(currentRockets);
    // setFilteredRockets(currentRockets)
  
  };





  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await connectApi("/rockets", "GET")
        const data = await response;
        if (data.success) {
          setRockets(data.data);
          setFilteredRockets(data.data)
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

  useEffect(()=>{
    paginate(1)
  },[filteredRockets])
  

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
    setFilteredRockets(rockets); // Clear search results
    setSearchNotFound(false); // Hide "No results found" message
  };


 

  return (
    <>
      {/* search */}
      <Row>
        <Col className="rockettitle">
        <h3 className=" text-center mt-5" id="rocket">ROCKETS</h3>
          <InputGroup className="search mb-3">
            <Form.Control
              placeholder="search by name,country or company"
              value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="primary"  onClick={ ()=>handleSearch()}><i class="bi bi-search"></i></Button>
          </InputGroup></Col>
      </Row>

    <Row>
       <Col className="pb-2">
            <Button variant="primary"  onClick={ ()=>setFilteredRockets(rockets)}>Reload</Button>
            </Col>
    </Row>
      <Row>  
         
      {currentRockets.map((rocket) => (
          < RocketCard key={rocket.id} rocket={rocket} />

        ))}
      
      {filteredRockets.length < 1 && <Col>No Record Found </Col>}
      </Row>




      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination>
          {Array.from({ length: Math.ceil(filteredRockets.length / itemsPerPage) }).map((_, index) => (
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