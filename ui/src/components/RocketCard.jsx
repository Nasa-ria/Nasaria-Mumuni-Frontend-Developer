import { useState } from "react"
import Rocket from "./Rocket";
import './Style.css';

function RocketCard() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };




    return (
        <>
            <div class="col-md-4">

                <div class="card mb-4 box-shadow">
                    <div class="card-body">
                        <h5 class="card-title"> rocket.name</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">type:rocket.type</p>
                        <p class="card-text">status:rocket.name</p>

                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button className="btn btn-lg btn-primary" onClick={openPopup}>View Details</button>

                            </div>
                            <small class="text-muted">9 mins</small>
                        </div>
                    </div>
                </div>
                {/* ))} */}

            </div>
            <div>
                {isPopupOpen && (
                    <div className="popup">
                        <div className="popup-content">
                            {/* Popup Content */}
                            <Rocket />
                            <button className="btn btn-lg btn-primary" onClick={closePopup}>Close</button>
                        </div>
                    </div>
                )}
            </div>

        </>
    )
}
export default RocketCard;