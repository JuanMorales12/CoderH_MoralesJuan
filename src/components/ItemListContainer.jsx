import React, { useEffect, useState } from 'react'
import { ItemDetailContainer } from './ItemDetailContainer';
import { NavLink, useParams } from 'react-router-dom';
import { getDocs,collection, getFirestore, query, where} from 'firebase/firestore';
import { db } from '../services/db';



export const ItemListContainer = () => {
  const {id} = useParams();
  const [productos, setProductos] = useState(null);

  useEffect(() => {

    if(id !== undefined){
      const productsDBs = query(collection(db,'productos'),where("categoria","==",id));
      getDocs(productsDBs)
        .then(producto => { 
          const productoFiltrado = producto.docs.map(product => ({id:product.id, ...product.data()}))
          setProductos(productoFiltrado);
        }
      ) 
    }else{
      const productsDB = collection(db,'productos');
      getDocs(productsDB)
        .then(products =>{
          const productosFromDB = products.docs.map(doc =>({id:doc.id , ...doc.data()}));
          setProductos(productosFromDB);
        }
        );
      
    }
    
  }, [db,id])
  
  return (
    <>
    {
      productos 
        ?
        <div className='item-container'> 
          {productos.map(product =>{
            return (  
                <NavLink key={product.id} to={`/item/${product.id}`}>
                  <ItemDetailContainer ide={product.id} />
                </NavLink>)
            })}
        </div>
      :
      <div>
        <p>Cargando...</p>
      </div>
      }
    </>
  )
}
