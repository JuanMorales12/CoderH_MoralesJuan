import React, { useContext, useState } from 'react'
import logo from '../assets/carrito.svg'
import {Carrito2} from '../assets/carrito2'
import { ProductCart } from './ProductCart';
import { CartContext } from '../context/CartContext';
import { NavLink } from 'react-router-dom';
//import '../style/index.css';

export const CartWidget = () => {


  const {cart,removeItem,clearCart,total} = useContext(CartContext);

  
  const [cartVisible, setVisible] = useState(false);
  
  let elementosCant = cart.length;
  const totalCarrito = (elementosCant > 0) ? total() : 0;
  const handleVisible = () =>{
    setVisible(!cartVisible);
  }

  const handleRemove = (id) => {
    removeItem(id);
  }

  const visibleClass = "container-cart-products " + (cartVisible ? "" : "hidden-cart");
  
  return (
    <div className="container-icon">
        <img src={logo} className="carrito" onClick={handleVisible}/>
        <div className="count-products">
          <span className="contador-productos">{elementosCant}</span>
        </div>
        <div className= {visibleClass}>
          {
            (cart.length > 0) ?
              <>
                {
                cart.map(product =>{
                  return <ProductCart view = "small" key = {product.id} product = {product} removeItem = {()=>handleRemove(product.id)} />
                })}

                <div className="cart-total">
                <h3>Total:</h3>
                <span className="total-pagar">{totalCarrito.toFixed(2)}</span>
              </div>
              <button onClick={handleVisible}><NavLink to = "/cart">Ver carrito</NavLink></button>
              <button onClick={handleVisible}><NavLink to ="/checkout">Pagar</NavLink></button>
            </>
            :
            <div>Carro vacío...</div>
            
          }
            

          </div>
    </div>
  )
}
