import {server} from "../store";
import axios from 'axios';

export const login = (email, password) => async(dispatch)=>{
  try {
    dispatch({type:"loginRequest"});

    const {data} = await axios.post(`${server}/user/login`,{email,password},
    {
      headers:{
        "Content-type":"application/json"
      },
      withCredentials:true,
    }
    );
    
    if(data.success && data.result.isAdmin){
      dispatch({type:"loginSuccess", payload: data});
      localStorage.setItem("isAuthenticated", true);
    } else {
      throw new Error('Unauthorized access. User is not an admin');
    }
  } catch (error) {
    dispatch({type:"loginFail",});
    throw new Error('Failed to login');
  }
};



export const logout = () => async(dispatch)=>{
    try {
        dispatch({type:"logoutRequest"});

        dispatch({type:"logoutSuccess"});
        localStorage.setItem("isAuthenticated", false);
    } catch (error) {
        dispatch({type:"logoutFail",});
    }
};