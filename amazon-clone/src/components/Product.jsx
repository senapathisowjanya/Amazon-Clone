import React from 'react'
import {Box,Heading,HStack,Image,Link, Spacer} from "@chakra-ui/react"
import "./Product.css"

function Product({heading,image1,image2,image3,image4,link,h1,h2,h3,h4}) {
  return (
    <Box className='product'>
        <Box className='product_info'>
            <Heading fontSize="20px">{heading}</Heading>

    
            <Box pt="10px">
                <HStack>
                  <Box >
            <Image src={image1} alt="error" width="170px"/>
            <Heading fontSize="13px" fontWeight="400"textAlign="center">{h1}</Heading>
            </Box>
            <Box>
            <Image src={image2} alt="error"  width="170px"/>
            <Heading fontSize="13px"fontWeight="400" textAlign="center">{h2}</Heading>
            </Box>
            </HStack>
            </Box>
      <Spacer />
            <Box>
                <HStack>
                  <Box>
            <Image src={image3} alt="error" mt="10px"  width="170px"/>
            <Heading fontSize="13px"fontWeight="400">{h3}</Heading>
            </Box>
            <Box>
            <Image src={image4} alt="error"  width="170px"/>
            <Heading fontSize="13px"fontWeight="400">{h4}</Heading>
            </Box>
            </HStack>
            </Box>
            <Link className='link_seemore1'>{link}</Link>
        </Box>
    </Box>
  )
}

export default Product