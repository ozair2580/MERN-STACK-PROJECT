import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Addproduct from './Addproduct';
import Logout from './Logout';
import Products from './Products';
import Profile from './Profile';
import Update from './Update';
import Signup from './Signup';
import Login from './Login';
import Privatecomp from './Privatecomp';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import { useState } from 'react/cjs/react.development';
import Lint from './Lint';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
const Navbar=()=> {
 
      
  return (
    <div className='apps'>
      
         <Router> 
          <Lint/>
       <Routes>
         <Route element={<Privatecomp/>} >
         <Route exact path='/' element={<Addproduct/>}/>
         <Route  path='/product' element={<Products/>}/>
         <Route path='/profile' element={<Profile/>}/>
         <Route path='/update/:id' element={<Update/>}/>
         <Route  path='/logout' element={<Logout/>}/>
         </Route>

         <Route  path='/signup' element={<Signup/>}/>
         <Route  path='/login:1' element={<Login/>}/>
         
       </Routes>
     </Router>
     
       </div>
  );
}

export default Navbar;
