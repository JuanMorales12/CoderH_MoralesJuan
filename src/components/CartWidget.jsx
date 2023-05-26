import React, { useContext, useEffect, useRef, useState } from 'react'
import logo from '../assets/carrito.svg'
import { ProductCart } from './ProductCart';
import { CartContext } from '../context/CartContext';
import { NavLink } from 'react-router-dom';
import { EmptyCart } from './EmptyCart';

export const CartWidget = () => {


  const {cart,removeItem,clearCart,total,cantElementos} = useContext(CartContext);
  const carritoRef = useRef();
  
  const [cartVisible, setVisible] = useState(false);
  
  let elementosCant = cantElementos();
  const totalCarrito = (elementosCant > 0) ? total() : 0;
  const handleVisible = () =>{
    setVisible(!cartVisible);
  }

  const handleRemove = (id) => {
    removeItem(id);
  }

  useEffect(() => {

    if (cartVisible) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [cartVisible]);

  const handleClickOutside = (event) => {
    // Verificar si el clic ocurrió fuera del contenedor del carrito
    if (carritoRef.current && !carritoRef.current.contains(event.target) && !event.target.classList.contains("icon-close")) {
      setVisible(false);
    }
  };


  const visibleClass = "container-cart-products " + (cartVisible ? "" : "hidden-cart");
  
  return (
    <div className="container-icon" ref={carritoRef}>
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
                <span className="total-pagar">${totalCarrito.toFixed(2)}</span>
              </div>
              <div className="buttons-cart">
                <NavLink to = "/cart"><button className ="cart-button" onClick={handleVisible}>Ver carrito</button></NavLink>
                <NavLink to ="/checkout"><button className ="cart-button" onClick={handleVisible}>Pagar</button></NavLink>
              </div>
            </>
            :
              <EmptyCart/>
            
            
          }
            

          </div>
    </div>
  )
}
