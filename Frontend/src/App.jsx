import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cat from './pages/Catagories'
import Laws from "./pages/Laws";
import Home from "./pages/Home";
import Sign from "./pages/Signinup";
import "./index.css";

const App = () => {

  return(
    <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/categories" element={<Cat/>}/>
          <Route path="/laws" element={<Laws/>}/>
          <Route path="/signinup" element={<Sign/>}/>
        </Routes>
    </div>
  )
}
export default App