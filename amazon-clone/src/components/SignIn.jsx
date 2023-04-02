import React from 'react'
import {Box,Text,Button} from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom'

function SignIn() {
    const navigate = useNavigate();
    const HandleClick=()=>{
        navigate(`/login`)
      
    }

    const handleChange=()=>{
        console.log("admin")
        navigate(`/admin`)
    }
  return (
    <div>
        <Box >
            <hr style={{margin:"20px"}}/>
            <Text style={{margin:"5px"}}>See personalized recommendations</Text>
            <Button variant='outline' style={{background:"#FFC941",padding:"6px 70px",margin:"5px",border:"none",borderRadius:"5px"}} onClick={HandleClick}>Sign in</Button>
            <Text>New Customer?<span style={{color:"blue",fontSize:"13px"}}>Start here</span></Text>
            <Text onClick={handleChange}>>>>>>Are you a admin</Text>
            <hr style={{margin:"20px"}}/>
        </Box>
    </div>
  )
}

export default SignIn