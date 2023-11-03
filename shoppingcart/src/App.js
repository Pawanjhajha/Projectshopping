import{BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './login';
import Reg from './Reg';
import Dashboard from './dashboard';
import Header from './Header';
import Footer from './footer';
import { Contextapi } from './Contextapi';
import { useEffect, useState } from 'react';
import Adminproduct from './Adminproduct';
import Productadd from './Productadd';
import Productupdate from './productupdate';
import Productdelete from './Productdelete';
import Usermanagement from './Usermanagement';
import Forgot from './Forgot';
import Usersproduct from './Usersproduct';
import Cart from './Cart';
import Checkout from './Checkout';


function App() {
  const [loginname, setLoginname]=useState(localStorage.getItem('loginname'))
  const[cart,setCart]=useState(JSON.parse(localStorage.getItem('cart')))
  useEffect(()=>{},[cart])
  localStorage.setItem('cart',JSON.stringify(cart))
  return ( 
    <Router>
     <Contextapi.Provider value={{loginname, setLoginname, cart,setCart}}>
      <Header/>
      <main>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/reg' element={<Reg/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/usersproduct' element={<Usersproduct/>}></Route>
        <Route path='/adminproduct' element={<Adminproduct/>}></Route>
        <Route path='/adminproductadd' element={<Productadd/>}></Route>
        <Route path='/productupdate/:id' element={<Productupdate/>}></Route>
        <Route path='/productdelete/:id' element={<Productdelete/>}></Route>
        <Route path='/usermanagement' element={<Usermanagement/>}></Route>
        <Route path='/forgot' element={<Forgot/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
      </Routes>
      </main>
      <Footer/>
      </Contextapi.Provider>
    </Router>
   );
}

export default App;