import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react/cjs/react.development';
import { Navigate, useNavigate } from 'react-router-dom';
 const Addproduct=()=> {
    const [name,setname]=useState('')
    const [price,setprice]=useState('')
    const [category,setcategory]=useState('')
    const [company,setcompany]=useState('')
  
    const navigate=useNavigate();
    const addproduct=async ()=>{
        console.warn(name,price,category,company)
      const result= await fetch('http://localhost:6003/product/Addproduct',{
          method:'post',
          body:JSON.stringify({name,price,category,company}),
          headers:{
              'content-Type':'application/json'
          }
          
      })
      console.warn(await result.json)
      navigate('/product')
      
    }
   
  return (
    <div>
       
           <div className='outer'>
           
           <h1 className='Add'>Addproduct</h1> <br />
       <input className='fieldinput' type="text" value={name}  placeholder='enter name' onChange={(e)=>setname(e.target.value)} /> <br /> 
       <input className='fieldinput' type="text" value={price}  placeholder='enter  price' onChange={(e)=>setprice(e.target.value)} /> <br />
       <input className='fieldinput' type="text" value={category} placeholder='enter  category' onChange={(e)=>setcategory(e.target.value)} /> <br />
       <input className='fieldinput' type="text"  value={company} placeholder='enter  company' onChange={(e)=>setcompany(e.target.value)} /> <br /> <br />
 
       <button className='butt' onClick={addproduct} >Add Item</button> <br />
       
      
       
       
       
       
       </div>
    </div>
  );
};

export default Addproduct;