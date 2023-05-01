import React from 'react'
import { CartWidget } from './CartWidget'
import { categorias } from '../assets/categorias';
import { NavLink } from 'react-router-dom'; 
export const NavBar = ( { elementosCant}) => {

  return (
    
        <>
          <div className='container-header'>
            {categorias.map(category=>{
              return  <NavLink className="container-nav" key={category} to={`/category/${category}`}><p>{category} </p></NavLink>
            })}
            <CartWidget elementosCant={elementosCant}/>
          </div>
        </>
    
  )
}
