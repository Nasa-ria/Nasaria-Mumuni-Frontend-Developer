import { useState } from "react"
import Rocket from "./Rocket";
import './Style.css';
import { Card, Button, Col,  } from 'react-bootstrap';

function RocketCard(props) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const fullDescription = props.rocket.description;
    // Displaying only the first 100 characters of the description
    const truncatedDescription = fullDescription ? fullDescription.substring(0, 100) : '';



    return (
        <>
         <Col xs={12} lg={4} className=" rocketlist pb-2">

         <Card >
      <Card.Body>
        <Card.Title>{props.rocket.rocket_name}</Card.Title>
        <Card.Text>
        {truncatedDescription}.....
        </Card.Text>
        <Button onClick={openPopup} >View Details</Button>

      </Card.Body>
    </Card>
 
                        </Col>
           
        
                {isPopupOpen && (
                    <div className="popup">
                        <div className="popup-content">
                            <Rocket rocket={props.rocket} />
                            <button className="btn  btn-primary" onClick={closePopup}>Close</button>
                        </div>
                    </div>
                )}
          

        </>
    )
}
export default RocketCard;