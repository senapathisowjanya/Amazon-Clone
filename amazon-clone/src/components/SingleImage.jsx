import React from 'react'
import "./Product.css"
import {Heading, Image, VStack,Link,Box} from "@chakra-ui/react"

function SingleImage({h1,image,link,h2}) {
  return (
    <Box className="product"  width="50%">
        <Box className='product_info ' marginLeft="-70px">
        <VStack>
        <Heading fontSize="20px" marginLeft="50px">{h1}
        {h2}</Heading>
        <Image src={image} alt="error" width="200px" height="250px" paddingLeft="70px"/>
        <Link className='link_seemore' >{link}</Link>
        </VStack>
        </Box>

    </Box>
  )
}

export default SingleImage