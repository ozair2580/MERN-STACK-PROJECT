import React, { Component } from 'react';
import { useParams,useNavigate} from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react/cjs/react.development';
import './App.css';


const Update=()=> {
    
    const [name,setname]=useState('')
    const [price,setprice]=useState('')
    const [category,setcategory]=useState('')
    const [company,setcompany]=useState('')
    const params=useParams();
    const navigate=useNavigate();

      
    useEffect(()=>{
        getproduct();
    },[])
    
    
    const getproduct=async ()=>{
        console.warn(params)
        let result=await fetch(`http://localhost:6003/product/update/${params.id}`)
        result= await result.json();
        console.warn(result)
       setname(result.name)
      setprice(result.price)
      setcategory(result.category)
      setcompany(result.company)
     
    }
    const updateproduct=async ()=>{
        
        console.warn(name,price,category,company)
      let result= await fetch(`http://localhost:6003/product/update/${params.id}`,{
          method:'put',
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
           
           <h1 className='Add'>update</h1> <br />
       <input className='fieldinput' type="text" value={name}  placeholder='enter name' onChange={(e)=>setname(e.target.value)} /> <br /> 
       <input className='fieldinput' type="text" value={price}  placeholder='enter price' onChange={(e)=>setprice(e.target.value)} /> <br />
       <input className='fieldinput' type="text" value={category} placeholder='enter category' onChange={(e)=>setcategory(e.target.value)} /> <br />
       <input className='fieldinput' type="text"  value={company} placeholder='enter  company' onChange={(e)=>setcompany(e.target.value)} /> <br /> <br />
 
       <button className='butt' onClick={updateproduct} >Add Item</button> <br />
       </div>
       </div>
  )
}

export default Update;
