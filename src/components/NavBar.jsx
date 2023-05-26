import React, { useEffect, useState } from 'react'
import { CartWidget } from './CartWidget'
//import { categorias } from '../assets/categorias';
import { NavLink } from 'react-router-dom'; 
import {getDocs,collection} from 'firebase/firestore';
import { db } from '../services/db';



export const NavBar = () => {


  const [categorias, setCategorias] = useState(null);
  const categoriasDB = collection(db,'categorias');

  useEffect(() => {
    getDocs(categoriasDB)
      .then(categoria => {
        const categoriesFromDb = categoria.docs.map(category => ({id:category.id,...category.data()}));
        setCategorias(categoriesFromDb);
      })
  }, [db])
  

  return (

        <>
          {
            categorias 
            ? 
              <>
                <nav className="navbar">
                  <ul className="nav-list">
                      <li className="nav-item"> <NavLink to="/"> Inicio </NavLink></li>
                      <li className="nav-item dropdown">
                        <a href="" className="dropdown-toggle">Productos</a>
                          <ul className="dropdown-menu">
                            {categorias.map(category=>{
                              return <li key={category.id} className=""><NavLink  to={`/category/${category.categoria}`}><p>{category.categoria} </p></NavLink></li>
                            })}
                          </ul>
                      </li>
                      <li className="nav-item"> <NavLink to="/aboutus"> Sobre nosotros</NavLink></li>
                  </ul>
                </nav>
                <CartWidget />
              </>
            :
              <></>
          }
        </>    
  )
}
