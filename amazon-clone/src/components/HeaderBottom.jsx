import React from 'react'
import { Box,HStack,Spacer,Text,Image } from '@chakra-ui/react'
import {HamburgerIcon} from "@chakra-ui/icons"

function HeaderBottom() {
  return (
    <Box bg="#02214bce" height="45px">
        <HStack>
        <Box width="70%" paddingLeft="20px" pt="7px">
        <HStack color="white">
            <Box fontWeight="700">
                <HStack>
            <HamburgerIcon  _hover={{color:"black"}}/>
     <Text fontSize='6xl'_hover={{color:"black"}}>All</Text>
     </HStack>
     </Box>
     <Spacer />
     <Text fontSize='6xl' _hover={{color:"black"}}>Amazon miniTV</Text>
     <Spacer />
     <Text fontSize='6xl' _hover={{color:"black"}}>Best Sellers</Text>
     <Spacer />
     <Text fontSize='6xl' _hover={{color:"black"}}>Mobiles</Text>
     <Spacer />
     <Text fontSize='6xl' _hover={{color:"black"}}>Today's Deals</Text>
     <Spacer />
     <Text fontSize='6xl' _hover={{color:"black"}}>Customer Service</Text>
     <Spacer />
     
     <Text fontSize='6xl' _hover={{color:"black"}}>Electronics</Text>
     <Spacer />
     <Text fontSize='6xl' _hover={{color:"black"}}>Amazon Pay</Text>
     <Spacer />
     </HStack>
     </Box>
     <Box>
     <Image src='https://m.media-amazon.com/images/G/31/IN-hq/2021/img/Mobile_Traffic_/XCM_Manual_1321458_1651511_IN_3781247_400x39_en_IN._CB655944656_.jpg' alt="Error" width="370px" height="35px" paddingTop="5px" _hover={{color:"black"}}/>
     </Box>
     </HStack>
    </Box>
  )
}

export default HeaderBottom