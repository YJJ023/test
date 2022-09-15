import { Navigate, Route, useLocation } from "react-router-dom";
import { Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import Test1 from "../page.js/1";
import Test2 from "../page.js/2";
// eslint-disable-next-line no-unused-vars
import Test3 from "../page.js/3";
// eslint-disable-next-line no-unused-vars
import Test4 from "../page.js/4";
import './route.css'
/* import Test7   from "../page.js/7"; */
import Test8 from "../page.js/8";
import Test9 from "../page.js/9";

// eslint-disable-next-line no-unused-vars
import Test10 from "../page.js/10";
import { lazy,Suspense} from "react";
const Test7=lazy(()=>{
    console.log(`加载test7`);
    return import("../page.js/7")})
export default function All(){
const navigate=useNavigate();
const location=useLocation();
    return(<>
    <button onClick={()=>{navigate(`/`);console.log(document)}}>跳转0</button>
    <button onClick={()=>{navigate(`/2/6`)}}>跳转2</button>
    <button onClick={()=>{navigate(`/7/123`)}}>跳转7</button>
    <button onClick={()=>{navigate(`/8`)}}>跳转8</button>
    <button onClick={()=>{navigate(`/8/9`);console.log(location)}}>跳转89</button>
    <button onClick={()=>{navigate(-1)}}>跳转-1</button>
    <Routes>
        <Route path="/" element={<Navigate to={`/2/5`}></Navigate>}> </Route>

        <Route path="/7/:id" element={
          <Suspense fallback={<div>114514</div>}> 
             <Test7></Test7>
           </Suspense>}>
        </Route>

        <Route path="/2/*" element={<Test2><div className="aa">221<div>1111</div></div></Test2>}></Route>
        
        <Route path="/8" element={<Test8/>}>
            <Route path="9"  element={<Test9/>}> </Route>
        </Route>
        
        </Routes>    </>)
}