import { useContext, useState } from "react";
import { ProductCart } from "./ProductCart";
import { CartContext } from "../context/CartContext";
import { RegistrationForm } from "./RegistrationForm";
import { db } from "../services/db";
import { addDoc, collection } from "firebase/firestore";
import { Loader } from "./Loader";

export const Order = () => {

    const {cart,total,clearCart} = useContext(CartContext);
    const [orden, setOrden] = useState(null);
    let elementosCant = cart.length;
    const totalCarrito= elementosCant > 0 ? total() : 0;
    const [isLoading,setLoader] = useState(false);
    const sendOrder = (buyer) =>{
        
        //luego de validaciones

        const items = cart.map(element => ({id:element.id,name:element.name,price:element.price}))
        const total = totalCarrito;
        const orden = {buyer:buyer,items:items,total:total}
        const orderCollection = collection(db,"ordenes");
        setLoader(true);
        addDoc(orderCollection,orden).then(({id})=> {
            setOrden(id);
            clearCart();
            setLoader(false);
        });


    }

  return (
    <>
        {!isLoading && <div className="order">
            {
                orden && <div>Formulario cargado con éxito! Su código de orden es: {orden}</div>
            }
            {(elementosCant > 0 && !orden) ?
                <RegistrationForm onAdd={sendOrder}/>
                :
                (!orden)?
                <div>¡Ups! Primero debes agregar elementos al carrito.</div>
                :
                <div>
                </div>
            }
            {!orden && (elementosCant > 0) && <div className="resumen-prod">
                <h3>Resumen de compra</h3>
                {cart.map(product =>{
                    return <ProductCart key = {product.id} view="medium" product={product} deleteBoton = {false} />
                })}
                <div className="cart-total">
                  <p className = "total-text">Total:</p>
                  <span className="total-pagar-monto">${totalCarrito.toFixed(2)}</span>
                </div>
            </div>
            }
        </div>
        }
        {isLoading && <Loader/>}
    </>
  )
}
