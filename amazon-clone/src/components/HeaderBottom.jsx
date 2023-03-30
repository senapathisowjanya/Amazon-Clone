import React from 'react'
import { Box, HStack, Spacer, Text, Image } from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons"
import "./home.css"

function HeaderBottom() {
  return (
    <Box bg="#02214bce" height="45px">
      <HStack>
        <Box width="70%" paddingLeft="20px" pt="7px" >
          <HStack color="white">
            <Box fontWeight="700" className='header_font1'>
              <HStack>
                <HamburgerIcon />
                <Text fontSize='6xl'>All</Text>
              </HStack>
            </Box>
            <Spacer />
            <Box className='header_font1'>

            <Text fontSize='6xl' >Amazon miniTV</Text>
            </Box>
            <Spacer />
            <Box className='header_font1'>

            <Text fontSize='6xl'>Best Sellers</Text>
            </Box>
            <Spacer />
            <Box className='header_font1'>

            <Text fontSize='6xl'>Mobiles</Text>
            </Box>
            <Spacer />
            <Box className='header_font1'>

            <Text fontSize='6xl'>Today's Deals</Text>
            </Box>
            <Spacer />

            <Box className='header_font1'>

            <Text fontSize='6xl'>Customer Service</Text>
            </Box>
            <Spacer />
             <Box className='header_font1'>

            <Text fontSize='6xl'>Electronics</Text>
             </Box>
            
            <Spacer />
            <Box className='header_font1'>
            <Text fontSize='6xl'>Amazon Pay</Text>
            </Box>
            <Spacer />
          </HStack>
        </Box>
        <Box className='header_font1'>
          <Image src='https://m.media-amazon.com/images/G/31/IN-hq/2021/img/Mobile_Traffic_/XCM_Manual_1321458_1651511_IN_3781247_400x39_en_IN._CB655944656_.jpg' alt="Error" width="370px" height="35px" paddingTop="5px" _hover={{ color: "black" }} />
        </Box>
      </HStack>
    </Box>
  )
}

export default HeaderBottom