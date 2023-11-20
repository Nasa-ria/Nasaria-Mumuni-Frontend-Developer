
import { useLocation, useNavigate, useParams } from "react-router-dom";
export function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}

export const connectApi = async(endpoint,method="GET",data=null)=>{
    const Url="http://localhost:8000";

 let options={
     mode:"cors",
     method:method,
     headers:{
      "content-Type":"application/json",
      "Authorization":"zaCELgL.0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx"
    }
 }
 let optionsData;
 if(data){
     optionsData={...options,body:JSON.stringify(data)}
     options= optionsData
 }
 const response = await fetch(Url + endpoint,options)
 return response.json()
 }
