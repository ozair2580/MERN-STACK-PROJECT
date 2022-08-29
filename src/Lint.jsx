import React from 'react';
import './App.css';
import img1 from './img/th.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate}  from 'react-router-dom';
import { Link } from 'react-router-dom';
    function Lint() {
        const auth=localStorage.getItem('user');
        const navigate=useNavigate();
        const logout=()=>{
            localStorage.clear();
        navigate('/signup')}
           
        return (
            <div>
              <ul className='header'>
               {
           auth ? <><li> <Link onClick={logout} className='linc  ' to='/logout' >logout</Link> </li>
           <li><Link className='linc' to='/' >Add product</Link></li>
           <li><Link  className='linc' to='/product' >products</Link></li>
           <li><Link  className='distance' to='/profile' ><img  className='imgsecond' src={img1} alt="" /> </Link></li>
           <li> <Link  className='linc' to='/update' ></Link></li>
       </>
           :
           <>
          <li> <Link  className='linc' to='/signup' >Signup</Link></li>
          <li><Link  className='linc' to='/login:1' >Login</Link></li>
          </> }
           </ul>    
            </div>
        );
    }
    
    export default Lint;