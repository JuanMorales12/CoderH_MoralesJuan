import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {doc, getDoc, getFirestore} from 'firebase/firestore';
import { db } from '../services/db';
import { ItemCount } from './ItemCount';
import { CartContext } from '../context/CartContext';
import { Loader } from './Loader';

export const ItemDetailContainer = ({ide = 0}) => {
  
  let {idProduct} = useParams();
  if(idProduct === undefined)
    idProduct = ide
  const [productoFiltrado, setProducto] = useState(null);
  const [isLoading,setLoader] = useState(false);
  const {addItem} = useContext(CartContext);
  const [addOk, setAdd] = useState(false);
  const [Error, setError] = useState(false);

  useEffect(() => {
    if(idProduct !== undefined){
        const itemDB = doc(db,'productos',idProduct)
        setLoader(true)
        getDoc(itemDB)
          .then(product =>{
            if(product.exists())
              setProducto({id:product.id,...product.data()});
            setLoader(false);
          }
          )
    }
  
  }, [idProduct,ide])

  const onAddtoCarrito = (quantity) =>{
    const item = {
      id : productoFiltrado.id,
      name:productoFiltrado.nombre,
      price: productoFiltrado.precio,
      img: productoFiltrado.imagen
    }
    setAdd(addItem(item,quantity));
    if(addOk){

    }else{
      setError(!addOk);
      setTimeout(()=>{
        setError(addOk);
      },4000)
      
    }
  }

  const classItem = "item" + (ide == 0 ? " center" : "");
  const classImg = (ide == 0 ? "center-img" : "");
  
    return (
      <>
         { !isLoading && productoFiltrado && <div className= {classItem}>
                    <figure >
                      <img className = {classImg} src={productoFiltrado.imagen} alt={productoFiltrado.nombre}/>
                    </figure>
                    <div className="info-product">
                      <h4>{productoFiltrado.nombre}</h4>
                      <p className='category-desc'>{productoFiltrado.categoria}</p>
                      <p className='price'>{productoFiltrado.precio}</p>
                      {ide == 0 && !addOk ? <ItemCount stock={productoFiltrado.stock} initial={1} onAdd={onAddtoCarrito} /> 
                      : <></>}
                      {addOk && <p className='msg-exito'>¡Se agrego con éxito al carrito!</p>}
                      {ide == 0 && !addOk && Error && <p className='msg-error'>¡Ups! Parece que ya agregaste este producto.</p>}
                    </div>
                </div>
        }
        {!isLoading && !productoFiltrado && <div>Ups, parece que el producto no existe</div>}
        {isLoading && <Loader/>}
        
      </>
    )
}
