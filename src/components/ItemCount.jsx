import { useState } from "react"

export const ItemCount = ({stock, initial, onAdd}) => {

    const [quantity, setQuantity] = useState(initial);

    const Increment = () =>{
        if(quantity <= stock )
            setQuantity(quantity + 1);
    }
    const Decrement = () =>{
        if(quantity > 1)
            setQuantity(quantity - 1 );
    }

    const handleAdd = () =>{
        
        onAdd(quantity);
    }

  return (
    <>
        <div className="botonera-item">
            <button className="button-item" onClick={Decrement}><p>-</p></button>
            <h4 className="cantidad-add">{quantity}</h4>
            <button className="button-item" onClick={Increment}><p>+</p></button>
        </div>
        <button className="add-to-cart-btn" onClick={handleAdd}>
            <span className="btn-text">Añadir al carrito</span>
            <span className="btn-icon"><img src="https://w7.pngwing.com/pngs/225/984/png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping.png" alt="" className="cart-add" /></span>
        </button>
    </>
  )
}
