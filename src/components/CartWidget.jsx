import React from 'react'
import logo from '../assets/carrito.svg'
//import '../style/index.css';

export const CartWidget = ({elementosCant}) => {
  return (
    <div className='cart-summary p-relative d-inline-block'>
      <a className='js-toggle-cart js-fullscreen-modal-open h5'>
        <img src={logo} className = "carrito"></img>
        <span className="js-cart-widget-amount badge badge-foreground font-small-extra p-quarter">{elementosCant}</span>
      </a>
    </div>
  )
}
