import React, { useEffect, useState } from 'react'
import { CartWidget } from './CartWidget'
//import { categorias } from '../assets/categorias';
import { NavLink } from 'react-router-dom'; 
import {getDocs,collection} from 'firebase/firestore';
import { db } from '../services/db';



export const NavBar = ( { elementosCant}) => {


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
                {categorias.map(category=>{
                  return <NavLink className="container-nav" key={category.id} to={`/category/${category.categoria}`}><p>{category.categoria} </p></NavLink>
                })}
                <CartWidget />
              </>
            :
              <></>
          }
        </>    
  )
}
