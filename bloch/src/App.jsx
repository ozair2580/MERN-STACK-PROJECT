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
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
function App() {
   // const nevigate=useNavigate();
    const logout=()=>{

      localStorage.clear();
     // nevigate('/signup')
    }
  return (
    <div >
       <Router>
         <ul>
           <li><Link className='linc' to='/' >Add product</Link></li>
           <li><Link  className='linc' to='/product' >products</Link></li>
           <li><Link  className='linc' to='/profile' >Profile</Link></li>
           <li> <Link  className='linc' to='/update' >Update</Link></li>
           <li><Link  className='linc' to='/login:1' >Login</Link></li>
           
           <li> <Link onClick={logout} className='linc' to='/logout' >logout</Link> </li>
          <li> <Link  className='linc' to='/signup' >Signup</Link></li>
         </ul>
       
       
       
      
       
       <Routes>
         <Route element={<Privatecomp/>} >
         <Route exact path='/' element={<Addproduct/>}/>
         <Route  path='/product' element={<Products/>}/>
         <Route path='/profile' element={<Profile/>}/>
         <Route path='/update' element={<Update/>}/>
         <Route  path='/logout' element={<Logout/>}/>
         </Route>

         <Route  path='/signup' element={<Signup/>}/>
         <Route  path='/login:1' element={<Login/>}/>
         
       </Routes>
     </Router>
     
       </div>
  );
}

export default App;
