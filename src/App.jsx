import React from 'react'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import './style/index.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import logo from './assets/Logo.png'

export const App = () => {
  return (
    <BrowserRouter >

        <div className='container'>
            <div className='logo'>
              <NavLink to="/"> <img src={logo} alt="" /> </NavLink>
            </div>
            <NavBar />
            <Routes>
                <Route path='/' element = {<ItemListContainer />} />
                <Route path="/category/:id" element = {<ItemListContainer />} />
                <Route path="/item/:idProduct" element = {<ItemDetailContainer />} />
            </Routes>
        </div>  
    </BrowserRouter>
  )
}
