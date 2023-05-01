import React, { useEffect, useState } from 'react'
import {productos} from "../assets/productos.js"
import { useParams } from 'react-router-dom';


export const ItemDetailContainer = ({ide}) => {
  
  let {idProduct} = useParams();
  if(idProduct === undefined)
    idProduct = ide
  const [productoFiltrado, setProducto] = useState();


  useEffect(() => {
    if(idProduct !== undefined){
      const productoNew = productos.filter(product => product.id == idProduct);
      setProducto(productoNew[0]);
    }
  }, [idProduct,ide])
  

  if(productoFiltrado !== undefined)
  {
    return (
      <>
          <div className='item'>
              <p>{productoFiltrado.nombre}</p>
              <p>{productoFiltrado.categoria}</p>
              <p>{productoFiltrado.precio}</p>
          </div>
        
      </>
    )
  }
}
