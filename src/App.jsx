import React from 'react'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import './style/index.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import logo from './assets/Logo2.png'
import { CartProvider } from './context/CartContext';
import { CartView } from './components/CartView';
import { Order } from './components/Order';
import { Footer } from './components/Footer';
import { AboutUs } from './components/AboutUs';


export const App = () => {

  return (

    <BrowserRouter >
      <CartProvider>
          <div className='container'>
              <div className='logo'>
                <NavLink to="/"> <img src={logo} alt="" /> </NavLink>
              </div>

              <div className='container-header'>
                <NavBar />
              </div>
              
              <div className='container-body'>
                <div className="body-info">
                  <Routes>
                      <Route path='/' element = {<ItemListContainer />} />
                      <Route path="/category/:id" element = {<ItemListContainer />} />
                      <Route path="/item/:idProduct" element = {<ItemDetailContainer />} />
                      <Route path="/cart" element = {<CartView/>}/>
                      <Route path="/checkout" element = {<Order/>}/>
                      <Route path="/aboutus" element = {<AboutUs/>}/>
                  </Routes>
                </div>
              </div>
              <Footer/>
          </div>  
        </CartProvider>
    </BrowserRouter>
  )
}
