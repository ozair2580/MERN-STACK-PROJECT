import React, { Component } from 'react';
import { useState } from 'react/cjs/react.development';
import Delet from './Delet';
import './App.css';
const LIst=()=> {
    const [name,setname]=useState("");
    const [other,setother]=useState([]);
   
     const man=()=>{
      setother((olditem)=>{
       return [...olditem,name]
      });}

      const deleteItems=(id)=>{
        setother((olditem)=>{
          return olditem.filter((arrEitem,index)=>{
            return index!==id;
          })
         });
      }
    


    return (
      <div className='outer2'>
        
          <input value={name} type="text" onChange={(e)=>{setname(e.target.value)}} />
          <button className='buttonlist' onClick={()=>man()}>add</button>
          
        {
          other.map((e,i)=>{
        return <Delet id={i} key={i} text={e}
        onselect={deleteItems}/>
        
       })
       }  
         
      </div>
    );
  }
  
 
export default LIst;