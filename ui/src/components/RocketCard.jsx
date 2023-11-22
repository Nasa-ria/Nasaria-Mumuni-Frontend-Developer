import { useState } from "react"
import Rocket from "./Rocket";
import './Style.css';

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
            <div class="container mt-5 mx-2">
                <div class="row">
                    <div class="col">
                        <div class="card p-3">
                            <div class="card-body">
                                <h5 class="card-title text-center"> {props.rocket.rocket_name}</h5>
                                <p class="card-text">{truncatedDescription}......</p>

                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button className="btn btn-lg btn-primary" onClick={openPopup}>View Details</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div>
                {isPopupOpen && (
                    <div className="popup">
                        <div className="popup-content">
                            <Rocket rocket={props.rocket} />
                            <button className="btn  btn-primary" onClick={closePopup}>Close</button>
                        </div>
                    </div>
                )}
            </div>

        </>
    )
}
export default RocketCard;