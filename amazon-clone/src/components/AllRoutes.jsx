import React from 'react'
import {Routes,Route} from "react-router-dom"
import MainpageMiddleData from './MainpageMiddleData'
import SpecificProduct from './SpecificProduct'
import Login from './Login'
import SpecificIndPro from './SpecificIndPro'

function AllRoutes() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<MainpageMiddleData/>}/>
      <Route path="/SpecificProduct/:category" element={<SpecificProduct/>}/>
      <Route path="/IndivualProductPage/:id" element={<SpecificIndPro/>}/>
      <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes