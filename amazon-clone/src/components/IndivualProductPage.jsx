import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Footer from './Footer'
import Headers from '../Headers'
IndivualProductPage()

function IndivualProductPage() {
  const id=useParams()
  console.log("indu")
const [data,setData]=useState()


useEffect(()=>{
  fetch(`https://6422c67b77e7062b3e224e73.mockapi.io/products/${id}`)
  .then((res)=>res.json())
  .then((datat)=>{
    console.log("product",id)
    setData(datat)
  })
},[])
console.log("and",data)

  return (
    <div>
      <Headers />
      <Footer />
    </div>
  )
}

export default IndivualProductPage;