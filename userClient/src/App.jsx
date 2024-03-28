import React from "react";
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from "./Component/Home";
import SwiggyNav from "./Component/SwiggyNav";
const App = () => {
  return (
    <>  
      <BrowserRouter>                
        <Routes>
          {/* <Route element={<SwiggyNav />}  /> */}
          <Route element={<Home />} path="/" />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App