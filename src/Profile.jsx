import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import img1 from './img/th.jpg'
import './App.css';

// import { useGlobal } from './Login';


const Profile=()=> {
 //const data=useGlobal()
 const sele=useSelector((j)=>j.lebabu)
 console.warn(sele)
  return (
    <div className='profilecss'>
      <img className='imgtag' src={img1} alt="" />
      <span><h2>USER EMAIL:</h2> <h4 className='h44'>{sele.data}</h4></span>
    </div>
  );
};


export default Profile;