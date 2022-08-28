import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Container, Box } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/layout'
import style from '../Styles/Navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { Alert, AlertIcon, Heading, Image } from '@chakra-ui/react'


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [flag, setFlag] = useState(false)

    let navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        let Emailog = JSON.parse(localStorage.getItem("Email"))
        let Pass = JSON.parse(localStorage.getItem("Password"))

        if (!email || !password) {
            alert("Fill All Fields")
        }
        else if (Pass == password && Emailog == email) {
            alert("Login Successfull")
            navigate("/")
        }
        else {
            alert("Invalid Email or Password")
        }
    }
    return (
        <Container >
            <Box className={style.loginParent}>
                <Box h='20rem' w='25rem'>
                    <FormControl onSubmit={handleLogin}>
                        <Heading as='h3' size='lg' style={{ textAlign: "left" }}>Log In</Heading>
                        <br />
                        <br />
                        <FormLabel>Email</FormLabel>
                        <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <FormLabel>Password</FormLabel>
                        <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <br />
                        <br />
                        <br />
                        <Button colorScheme='orange' w='25rem' onClick={handleLogin}>Log in</Button>

                    </FormControl>
                    <br />
                    <Text className={style.textLogin}>Don't have a HubSpot account? <Link to='/signin' className={style.linkColor}>Sign up

                        Log in with SAML</Link></Text>
                </Box>
                <Box>

                </Box>
            </Box>
        </Container>

    )
}

export default Login