
import React, { Component } from 'react';
import { useState } from 'react/cjs/react.development';
import './App.css';

const CAlculator=()=>  {
    const [inpu,setinpu]=useState("");

    const click=(e)=>{

        setinpu(inpu.concat(e.target.value))
    }
const clear=()=>{
    setinpu("")
}

const calculate=()=>{
    setinpu(eval(inpu).toString());
}
   
        return (
            <div className='outer2'>
            <input className='inputfull' type="text" placeholder='0' value={inpu}/>
           
            <button className='operator' onClick={click} value="1">1</button>
            <button className='operator' onClick={click} value="2">2</button>
            <button className='operator' onClick={click} value="3">3</button>
            <button  className='operator' onClick={click} value="+">+</button>
            <button className='operator' onClick={click} value="4">4</button>
            <button className='operator' onClick={click} value="5">5</button>
            <button className='operator' onClick={click} value="6">6</button>
            <button className='operator' onClick={click} value="-">-</button>
            <button className='operator' onClick={click} value="7">7</button>
            <button className='operator' onClick={click} value="8">8</button>
            <button className='operator' onClick={click} value="9">9</button>
            <button className='operator' onClick={click} value="*">*</button>  
            <button className='operator' onClick={click} value="0">0</button>
            <button  className='operator' value={"clear"} onClick={clear}>clear</button>
            <button  className='operator' value={"="} onClick={calculate}>=</button>
            <button  className='operator' onClick={click} value="/">/</button>
            </div>
        );
    }


export default CAlculator;