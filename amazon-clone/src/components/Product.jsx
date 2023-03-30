import React from 'react'
import {Box,HStack,Image} from "@chakra-ui/react"
import "./Product.css"

function Product() {
  return (
    <Box className='product'>
        <Box className='product_info'>
            <p>The lean startup</p>
    
            <Box>
                <HStack>
            <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/Flights/Flight_186x116._SY116_CB613655434_.jpg" alt="error"/>
            <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/Flights/Train_186x116._SY116_CB613655434_.jpg" alt="error"/>
            </HStack>
            </Box>

            <Box>
                <HStack>
            <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/Flights/Bus_186x116._SY116_CB613655434_.jpg" alt="error"/>
            <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/Flights/Accessory_186x116._SY116_CB613655434_.jpg" alt="error"/>
            </HStack>
            </Box>
        </Box>
    </Box>
  )
}

export default Product