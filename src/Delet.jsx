import React, { Component } from 'react';
import './App.css';

const Delet=(props)=> {
  
        return (
<div>
 <li className='li'> <button className='batn' onClick={()=>props.onselect(props.id)}>x</button>{props.text}</li>
       </div> );
    }


export default Delet;