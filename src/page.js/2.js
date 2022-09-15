import React from "react";
import { Routes,Route } from "react-router-dom";
import Test5 from "./5";
import Test6 from "./6";

export default function Test2(props){

    return(<>
    <div>{props.children}</div><Routes>
    <Route path="5/*" element={<Test5/>}></Route>
    <Route path="6" element={<Test6/>}></Route>
    </Routes>
    </>)
}