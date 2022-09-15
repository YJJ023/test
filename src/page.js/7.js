import React from "react";
import { Navigate, useParams } from "react-router-dom";


 function Test7(){
console.log(useParams())
   /*  return(<>
    <div>{useParams().id}</div></>) */
    return 1?<div>123</div>:<Navigate to={`/8`}/>
};
export default Test7