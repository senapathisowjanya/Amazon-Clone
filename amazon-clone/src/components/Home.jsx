import React from 'react'
import {Box,Image} from "@chakra-ui/react"
import "./home.css"
import Product from './Product';

function Home() {
  return (
   <Box className='home'>
    <Box className='home_container'>
      <Image 
      className='home_image'
      src="https://m.media-amazon.com/images/I/61qNsQMmLCL._SX3000_.jpg" alt="Error" />
      <Box className='home_row'>
        <Product heading="Book travel tickets and get exciting offers" />
        <Product/>
        <Product/>
      </Box>
      <Box className='home_row'></Box>
      <Box className='home_row'></Box>
    </Box>
   </Box>
  )
}

export default Home;