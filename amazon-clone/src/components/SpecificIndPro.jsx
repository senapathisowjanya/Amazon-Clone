import { Box ,Text,Image,Button} from "@chakra-ui/react"
import React from 'react'
import { useState } from "react"
import { StarIcon } from "@chakra-ui/icons"
import "./home.css"
import {useNavigate} from "react-router-dom"

const MIN_RATING=1;
const MAX_RATING=5;

function SpecificIndPro({id,category,avatar,description,name,price}) {
    const navigate = useNavigate();

    const [rating]=useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING+ 1)) *MIN_RATING
    )
    const handleChange=(id)=>{
      console.log("hand",id)
      navigate(`/IndivualProductPage/${id}`)
      
    }
  return (
    <Box  id={id} display="flex" flexDirection="column" m="5px" bgColor="white" p="10"> 
        <Text position="absolute" color="gray">{category}</Text>
        <Image src={avatar} h="200px" w="200" objectFit="contain"/>
        <h4 style={{textAlign:"left" ,fontSize:"15px"}}>{name}</h4>
        
        <Box>
         {Array(rating).fill().map((_,i)=>(

        <StarIcon color="yellow"/>
         ))}
        </Box>
        <Text textAlign="left" mt="3px" alignItems="center">{description}</Text>
        <Box>
     <Text textAlign="left" >{price}</Text>
        </Box>
        
<Button
className="button"
      variant='outline'
      
       
  size='md'
  height='40px'
  width='200px'
  border='2px'
  borderColor='green.500'
  borderRadius="5px"
  bgColor="orange"
  color="black"
  mt="9px"
  display="block"
  margin="auto"
  onClick={()=>{
    handleChange(id)
    // console.log(id)
    }}
>
  Add to Basket
</Button>
    </Box>
  )
}


export default SpecificIndPro;