import { useState } from 'react'
import hero from "./assets/hero.png"
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Products from './Pages/Products';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import './context/ThemeContext.css';

function App() {

  const person={
    
    username:"Riyaan",
    age:17,
    email:"riyaan@gmail.com"

  }

  return(
    <ThemeProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products person={person}/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </ThemeProvider>
  );

}

export default App