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
        <div className="Botonera-Item">
            <button className="Button" onClick={Decrement}>-</button>
            <h4 className="cantidad">{quantity}</h4>
            <button className="Button" onClick={Increment}>+</button>
        </div>
        <button className="agregar-product" onClick={handleAdd}>Añadir al carrito</button>
    </>
  )
}
