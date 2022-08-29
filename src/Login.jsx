import React, { Component } from 'react';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react/cjs/react.development';
import {Link, useNavigate }  from 'react-router-dom';
 import Profile from './Profile';
 import { increment,decreament,bhej,del } from './action/Action';
import './App.css';
import { useDispatch } from 'react-redux';
import { Button } from 'bootstrap';


const Login=({children})=>{
   const [email,setemail]=useState([])
   const [password,setpassword]=useState([])
  // const [res,setres]=useState([])
   const dispache=useDispatch();
  
   
const navigate=useNavigate();
   useEffect(()=>{
   const auth=localStorage.getItem('user');
   if(auth){
    navigate("/")
   }
   },[])
   
   
   const collectdata=async ()=>{
       console.warn(email,password)
      let result= await fetch('http://localhost:6003/student/login',{
          method:'post',
          body:JSON.stringify({email,password}),
          headers:{
              'content-Type':'application/json',
              
          }
          
      });
      result=await result.json();
     

      
      
      if(result.name){
        
        localStorage.setItem('user',JSON.stringify(result));
        // localStorage.setItem('token',JSON.stringify(result.auth));
       

      navigate('/')
      
      
         
           
          
           
           
      }
      else{
          console.log('not matched')
      }
    
      
    // localStorage.setItem(JSON.stringify(result))
    // navigate("/")
   }
   return(
       <div className='outer'>
           <h1 className='fieldinput'>Login</h1>
            
       
       <input type="text" className='fieldinput' value={email} placeholder='enter your email' onChange={(e)=>setemail(e.target.value)} /> <br /> <br />
       <input type="text" className='fieldinput' value={password} placeholder='enter your password' onChange={(e)=>setpassword(e.target.value)} /> <br /> <br />
        
       <button className='fieldinput but' onClick={collectdata}> <button className='fieldinput but hiding' onClick={()=>dispache(bhej(email))}>login</button> </button>
      
       </div>
   )

}

//costom hook 
// const useGlobal=()=>{
//     return useContext(Appcontext)
// }

export default Login;
