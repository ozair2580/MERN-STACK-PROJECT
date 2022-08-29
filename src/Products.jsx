

import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './App.css'
import Update from './Update';


const Products=()=>{
    const [Product,setproduct]=useState([]);
    
    
    
    useEffect(()=>{
     
    


    
    fetch('http://localhost:6003/product/get')
    .then(response=>response.json())
    .then(res=>setproduct(res.message))
       
        
       
        ;


    
},[]);
    

 const deletepro=async (id)=>{
    let result=await  fetch('http://localhost:6003/product/delete/'+id,{
        method:"DELETE"
    })
    result= await result.json()
    if(result){
        fetch('http://localhost:6003/product/get')
        .then(response=>response.json())
        .then(res=>setproduct(res.message))
           
        alert("delete")
    }
 }   

 const searchhandle=async (event)=>{
       let key=event.target.value;
       if(key){
       let result=await fetch('http://localhost:6003/product/search/'+key)
    result=await result.json();
    if(result){
        setproduct(result)
    }
}
else{
    fetch('http://localhost:6003/product/get')
    .then(response=>response.json())
    .then(res=>setproduct(res.message))  
}}

return (


<div class="container">
  <h1 className='harry'>product list</h1>
  <input className='searc' placeholder='Search here......' type="text" onChange={searchhandle}/>
  <table class="table">
    <thead>
      <tr>
          <th>s no</th>
        <th>Name</th>
        <th>price</th>
        <th>category</th>
        <th>company</th>
      </tr>
    </thead>
    
  




    
    {/* <>
    <input type="text" onChange={searchhandle}/>
        <h1>this is products list</h1> 
         <ul className='lii'><li>S no</li>
        <li >Name</li>
        <li >price</li>
        <li className='lii'>category</li>
        <li className='lii'>company</li></ul>
       */}
          
       
           {
               Product.map((e,i)=>
                  //<div>
                //   <ul key={e._id}><li className='lii'>{i}</li>
                            // <li className='lii'>{e.name}</li>
                            // <li className='lii'>{e.price}</li>
                            // <li className='lii'>{e.category}</li>
                            // <li className='lii'>{e.company}</li>
                            // <li className='lii'><button onClick={()=>deletepro(e._id)}>Delete</button>
                            // <Link to={'/update/'+e._id}>Update</Link>
                              
                            // </li>
                            
                            // </ul>

        <tbody >
      <tr >
          <th>{i+1}</th>
        <td>{e.name}</td>
        <td>{e.price}</td>
        <td>{e.category}</td>
        <th>{e.company}</th>
        <th><button className='hovereffect' onClick={()=>deletepro(e._id)}>Delete</button></th>
        <th className='thwitd'><Link className='decorate' to={'/update/'+e._id}>Update</Link></th>
      </tr>
      
    </tbody>
                      
                             
               )
               
                 
           }
            
           
         
     </table>
 </div> 

            
            
)
        }

export default Products;