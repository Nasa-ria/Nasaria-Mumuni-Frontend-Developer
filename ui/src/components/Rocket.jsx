import { connectApi,} from "../lib/function"
import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'

function Rocket(props){
        const[rocket,setRocket]=useState({
        })
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
           <h3 className="text-center">{rocket.rocket_name}</h3>
           <p><b>Description:</b> {rocket.description}</p>
           <p><b>Company:</b> {rocket.company}</p>
           <p><b>Country:</b> {rocket.country}</p>
           <h3> <Link to={rocket.wikipedia}>wikipedia Link</Link></h3>
        </>
    )
}
export default Rocket; 