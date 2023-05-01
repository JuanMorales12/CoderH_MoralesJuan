import React, { useEffect, useState } from 'react'
import { productos } from '../assets/productos'
import { ItemDetailContainer } from './ItemDetailContainer';
import { NavLink, useParams } from 'react-router-dom';

export const ItemListContainer = () => {
  const {id} = useParams();

  const [productosFiltrados, setProductos] = useState(productos);

  useEffect(() => {
    if(id !== undefined){
      const productosNew = productos.filter(product => product.categoria == id);
      setProductos(productosNew);
    }else{
      setProductos(productos);
    }
  }, [id])

  return (
    <div className='item-container'> 
      {productosFiltrados.map(product =>{
        return (  
                  <NavLink key={product.id} to={`/item/${product.id}`}><ItemDetailContainer ide={product.id} /></NavLink>)
      })}
    </div>
  )
}
