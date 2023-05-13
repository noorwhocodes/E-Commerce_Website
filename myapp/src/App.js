import React, { useEffect, useState } from 'react';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Home from './components/Home';
import Product from './components/Product';
import Products from './components/Products';
import { auth } from "./firebase";
import Cart from './components/Cart';
import About from './components/About';
//import NavigationBar from './components//Navbar';

import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom';

function App() {
  const [userName, setUserName] = useState("");
  useEffect(()=>{
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  },[])
  return (
    <>
  
          <Routes>
          <Route path='/' element={<Home />} />
            <Route path='/Home' element={<Home name={userName}/>} />
            <Route path='/products' element={<Products />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/About' element={<About />} />

            <Route path='/Signup' element={<Signup />} />
            <Route path='/Signin' element={<Signin />} />      
          </Routes>
   
  
    
    </>

  );
}

export default App;
