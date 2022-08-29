import React, { Component } from 'react';
import { useState } from 'react/cjs/react.development';

const  Buyapp=()=>{
    const [inpu,setinpu]=useState(0);

    const plus=()=>{
        if(inpu==10){
        return 10;
    }
    else{
     setinpu(inpu+1)
    }}
    const minus=()=>{
        if(inpu==0){
        return 0;
    }
else{
    setinpu(inpu-1)
}}
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-6">
                    <h2 className='head'>Iphone 10s Max  <b>$500</b></h2>
                    </div>
                    <div  className="col-3 ">
                    <button className='block' onClick={plus}>+</button>
                <h3 className='block'>{inpu}</h3>
                <button className='block' onClick={minus}>-</button>

                    </div>
             <div  className="col-3">
                <h1>price ${inpu*500}</h1>
                </div>
                </div>
                
                
            </div>
        );
    }


export default Buyapp;