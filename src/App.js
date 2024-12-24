import React from "react";
import Home from "./Pages/Home"
import Cartpage from "./Components/Cartpage";
import SingleProduct from "./Components/SingleProduct";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage";

const App = () => {
  return(
    <div className="">
        <Routes>
            <Route index path="/" element={ <Home/> }/>
            <Route path="/login" element={ <Login/> }/>
            <Route path="/register" element={ <Register/> }/>
            <Route path="/cartpage" element={ <Cartpage/> }/>
            <Route path="/productdetails/:id" element={ <SingleProduct/> }/>
            <Route path="/*" element={ <ErrorPage/> }/>
        </Routes>
    </div>
  )
}

export default App;