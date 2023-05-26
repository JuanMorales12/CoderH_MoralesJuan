import React from 'react'

export const ProductCart = ({product,removeItem,view,deleteBoton = true}) => {
  return (
    
      (view == "small") ? 
        <div className="cart-product">
          <div className="info-cart-product">
            <span className='cantidad-producto-carrito'>
                {product.quantity}
            </span>
            <p className="titulo-producto-carrito">{product.name}</p>
            <span className="precio-producto-carrito">${(product.price * product.quantity).toFixed(2)}</span>
          </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-close" onClick={removeItem}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      :
      (view == "full") ? 

        <div className="cart-item">
          <img src={product.img} alt="Product" className="product-image" />
          <div className="item-details"> 
            <span className="item-name">{product.name}</span>
            <span className="item-quantity">Cantidad: {product.quantity}</span>
          </div>
          <span className="item-price">Total: ${(product.price * product.quantity).toFixed(2)}</span>
          {deleteBoton && 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-close" onClick={removeItem}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>}
        </div>
      :
      <div className="cart-item">
        <img src={product.img} alt="Product" className="product-image" />
        <div className="item-details"> 
          <span className="item-name">{product.name}</span>
          <span className="item-quantity">Cantidad: {product.quantity}</span>
        </div>
        <span className="item-price">Total: ${(product.price * product.quantity).toFixed(2)}</span>
        {deleteBoton && 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-close" onClick={removeItem}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>}
      </div>
  )
}
