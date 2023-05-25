import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {doc, getDoc, getFirestore} from 'firebase/firestore';
import { db } from '../services/db';
import { ItemCount } from './ItemCount';
import { CartContext } from '../context/CartContext';

export const ItemDetailContainer = ({ide = 0}) => {
  
  let {idProduct} = useParams();
  if(idProduct === undefined)
    idProduct = ide
  const [productoFiltrado, setProducto] = useState(null);
  const {addItem} = useContext(CartContext);

  useEffect(() => {
    if(idProduct !== undefined){
        const itemDB = doc(db,'productos',idProduct)
        
        getDoc(itemDB)
          .then(product =>{
            if(product.exists())
              setProducto({id:product.id,...product.data()});
          })
    }
  
  }, [idProduct,ide])

  const onAddtoCarrito = (quantity) =>{
    const item = {
      id : productoFiltrado.id,
      name:productoFiltrado.nombre,
      price: productoFiltrado.precio,
      img: productoFiltrado.imagen
    }
    addItem(item,quantity);
  }

  const classItem = "item" + (ide == 0 ? " center" : "");
  const classImg = (ide == 0 ? "center-img" : "");
  
    return (
      <>
        {
          productoFiltrado 

          ?
            <div className= {classItem}>
                <figure >
                  <img className = {classImg} src={productoFiltrado.imagen} alt={productoFiltrado.nombre}/>
                </figure>
                <div className="info-product">
                  <h4>{productoFiltrado.nombre}</h4>
                  <p className='category-desc'>{productoFiltrado.categoria}</p>
                  <p className='price'>{productoFiltrado.precio}</p>
                  {ide == 0 ? <ItemCount stock={productoFiltrado.stock} initial={1} onAdd={onAddtoCarrito} /> : <></>}
                </div>
            </div>
          :
          <div>
            <p>Cargando producto...</p>
          </div>
        }
      </>
    )
}
