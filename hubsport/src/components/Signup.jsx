import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/alert'
import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Box, Container } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Signup = () => {
  const [email,setEmail]=useState("")
  const [password,setpassword]=useState("")
  const [flag,setFlag]=useState(false)
  const [login,setLogin]=useState(false)

  
  let navigate=useNavigate()
  

  const handleSubmit=(e)=>{
      e.preventDefault();

      if(!email || !password){
          setFlag(true);
//       <Alert status='error'>
//   <AlertIcon />
//   <AlertTitle>Your browser is outdated!</AlertTitle>
//   <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
// </Alert>
          alert("Please Fill Every Field")

      }
      else{
          setFlag(false)
          localStorage.setItem("Email",JSON.stringify(email))
          localStorage.setItem("Password",JSON.stringify(password))
          console.log("Saved in Local Storage")
          setLogin(!login)
          navigate("/login")
          
      }
    }

  return (
    <Container>
    <Box>
      <Box h='20rem' w='25rem'>
      <FormControl onSubmit={handleSubmit}>
      <FormLabel>Email</FormLabel>
      <Input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
      <FormLabel>Password</FormLabel>
      <Input type='password' value={password} onChange={(e)=>setpassword(e.target.value)} />
      <br/>
      <br/>
      <br/>
      <Button colorScheme='orange' w='25rem' onClick={handleSubmit}>Create an account</Button>
      
      </FormControl>
      </Box>
      <Box></Box>
    </Box>
  </Container>
  )
}

export default Signup