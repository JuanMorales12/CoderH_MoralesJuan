import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { ProductCart } from "./ProductCart";
import { NavLink } from "react-router-dom";

export const CartView = () => {

    const {cart,clearCart,removeItem,total} = useContext(CartContext);
    let elementosCant = cart.length;
    const totalCarrito= elementosCant > 0 ? total() : 0;

    const handleRemove = (id)=>{
        removeItem(id);
    }

  return (
    <>

          { 
            (cart.length > 0) ?
              <>
                {
                cart.map(product =>{ 
                  return <ProductCart view = "full" key = {product.id} product = {product} removeItem = {()=>handleRemove(product.id)} />
                })}

                <div className="cart-total">
                <h3>Total:</h3>
                <span className="total-pagar">{totalCarrito.toFixed(2)}</span>
              </div>
              <div className="button-cart">
                <button><NavLink to ="/checkout">Pagar</NavLink></button>
                <button onClick={clearCart}>Limpiar carrito</button>
              </div>
            </>
            :
            <div>Carro vacío...</div>
            
          }
    </>
  )
}
