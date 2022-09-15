import React from "react";
import { Route,Routes } from "react-router-dom";
import Test7 from "./7";

export default function Test1(){
console.log(1);
 return(<>
 <div>1</div>
 <Routes>
 <Route path="7" element={<Test7/>}></Route></Routes></>)

}