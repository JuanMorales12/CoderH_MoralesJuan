import { useContext, useState } from "react";
import { ProductCart } from "./ProductCart";
import { CartContext } from "../context/CartContext";
import { RegistrationForm } from "./RegistrationForm";
import { db } from "../services/db";
import { addDoc, collection } from "firebase/firestore";

export const Order = () => {

    const {cart,total,clearCart} = useContext(CartContext);
    const [orden, setOrden] = useState(null);
    let elementosCant = cart.length;
    const totalCarrito= elementosCant > 0 ? total() : 0;

    const sendOrder = (buyer) =>{
        
        console.log("confirmado")
        //luego de validaciones

        const items = cart.map(element => ({id:element.id,name:element.name,price:element.price}))
        const total = totalCarrito;
        const orden = {buyer:buyer,items:items,total:total}
        const orderCollection = collection(db,"ordenes");
        addDoc(orderCollection,orden).then(({id})=> setOrden(id));
        clearCart();

    }

  return (
    <>
        <div>Productos</div>
        <div className="order">
            <div className="resumen-prod">
                {cart.map(product =>{
                    return <ProductCart key = {product.id} view="medium" product={product} deleteBoton = {false} />
                })}
            </div>
            {
                orden && <div>Formulario cargado con éxito! Su código de orden es: {orden}</div>
            }
            {(elementosCant > 0 && !orden) ?
                <RegistrationForm onAdd={sendOrder}/>
                :
                (!orden)?
                <div>Agrega elementos al carrito primero</div>
                :
                <div>
                </div>
            }
        </div>
    </>
  )
}
