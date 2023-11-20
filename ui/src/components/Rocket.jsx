import { connectApi,} from "../lib/function"
import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'

function Rocket(props){
        const[rocket,setRocket]=useState({
        })
        // const {id}=useParams()

        var id = props.rocket.rocket_id;
  useEffect(() => {
    const findOne = async () => {
      try {
        const response = await connectApi("/rockets/" + id);
        const data = await response;
        if (data.success) {
          // Set the state with the rocket object
          setRocket(data.data);
          // console.log('Rocket Data:', data.data);
        } else {
          console.error('Error in server response:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    findOne();
  }, [id]);
        
          


    return(
        <>
        {console.log(rocket)}
           <h3 className="text-center">{rocket.rocket_name}</h3>
           <p>Description: {rocket.description}</p>
           <p>Company: {rocket.company}</p>
           <p>Country: {rocket.country}</p>
           <h3> <Link to={rocket.wikipedia}>wikipedia</Link></h3>
        </>
    )
}
export default Rocket; 