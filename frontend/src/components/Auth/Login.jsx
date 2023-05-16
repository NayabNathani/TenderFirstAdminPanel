import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions/user'
import { useNavigate } from 'react-router-dom'
import {toast} from "react-hot-toast"

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const loginState = useSelector(state => state.user);
  const {isAuthenticated, user} = useSelector(state => state.user);
  const navigate = useNavigate();

  const submitHandler = (e)=>{
    e.preventDefault();
    dispatch(login(email,password))
      .catch(err => setError(err.message));
  };

  useEffect(() => {
    if (error) {
      toast.error("Incorrect Email/Password!");
      dispatch({ type: "clearError" });
    } else if (isAuthenticated) {
      toast.success(`Welcome Back ${user.firstName}`);
      navigate("/");
    }
  }, [dispatch, error, isAuthenticated, navigate, user]);
  

  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent='center' spacing={'16'}>
        <Heading children='Welcome to Tender First' />

        <form onSubmit={submitHandler} style={{width: '100%'}}>
          <Box marginY={'4'}>
            <FormLabel htmlFor='email' children='Email Address'/>
            <Input 
              required
              id='email' 
              value={email} 
              onChange={(e)=>setEmail(e.target.value)}
              placeholder='abc@gmail.com'
              type={"email"}
              focusBorderColor='yellow.500'
            />
          </Box>

          <Box marginY={'4'}>
            <FormLabel htmlFor='password' children='Password'/>
            <Input 
              required
              id='password' 
              value={password} 
              onChange={(e)=>setPassword(e.target.value)}
              placeholder='Enter Your Password'
              type={"password"}
              focusBorderColor='yellow.500'
            />
          </Box>

          <Button my='4' colorScheme={'yellow'} type='submit'>Login</Button>
          {error && <Box color='red.500' textAlign='center'>{error}</Box>}
          {loginState.loading && <Box color='gray.500' textAlign='center'>Logging in...</Box>}
        </form>
      </VStack>
    </Container>
  )
}

export default Login
