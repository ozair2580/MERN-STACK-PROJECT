import React, { Component } from 'react';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react/cjs/react.development';
import {useNavigate}  from 'react-router-dom';
import './App.css';



const Signup=()=>{
   const [name,setname]=useState('')
   const [email,setemail]=useState('')
   const [password,setpassword]=useState('')
   const [phone,setphone]=useState('')
   const navigate=useNavigate();
   useEffect(()=>{
   const auth=localStorage.getItem('user');
   if(auth){
     navigate('/login:1')
   }
   })
   
   const collectdata=async ()=>{
      console.warn(name,email,password,phone)
      const result= await fetch('http://localhost:6002/student/signup',{
          method:'post',
          body:JSON.stringify({name,email,password,phone}),
          headers:{
              'content-Type':'application/json'
          }
          
      })
      console.warn(await result.json)
      localStorage.setItem('user',JSON.stringify(result));
      navigate('/login:1')

      
   }
   return(
       <div className='outer'>
           <h1 className='fieldinput'>Register</h1> <br />
       <input className='fieldinput' type="text" value={name} placeholder='enter your name' onChange={(e)=>setname(e.target.value)} /> <br />
       <input className='fieldinput' type="text" value={email} placeholder='enter your email' onChange={(e)=>setemail(e.target.value)} /> <br />
       <input className='fieldinput' type="text" value={password} placeholder='enter your password' onChange={(e)=>setpassword(e.target.value)} /> <br />
       <input className='fieldinput' type="text" value={phone} placeholder='enter your phone' onChange={(e)=>setphone(e.target.value)} /> <br /> <br />
 
       <button className='fieldinput but' onClick={collectdata}>signup</button> <br />
       </div>
   )

}

export default Signup;