import React, { Component } from 'react';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react/cjs/react.development';
import {useNavigate}  from 'react-router-dom';
import './App.css';

const Login=()=>{
   const [email,setemail]=useState('')
   const [password,setpassword]=useState('')
   const navigate=useNavigate();
   useEffect(()=>{
   const auth=localStorage.getItem('user');
   if(auth){
     navigate('/')
   }
   })
   
   
   const collectdata=async ()=>{
       console.warn(email,password)
      const result= await fetch('http://localhost:6002/student/login',{
          method:'post',
          body:JSON.stringify({email,password}),
          headers:{
              'content-Type':'application/json'
          }
          
      });
      console.warn(await result.json)
      if(result ){
          navigate("/logout")
      }
      else{
          console.log('not matched')
      }
      
   }
   return(
       <div className='outer'>
           <h1 className='fieldinput'>Login</h1>
       
       <input type="text" className='fieldinput' value={email} placeholder='enter your email' onChange={(e)=>setemail(e.target.value)} /> <br /> <br />
       <input type="text" className='fieldinput' value={password} placeholder='enter your password' onChange={(e)=>setpassword(e.target.value)} /> <br /> <br />
 
       <button className='fieldinput but' onClick={collectdata}>Login</button>
       </div>
   )

}

export default Login;