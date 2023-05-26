import { createContext, useState } from "react";


export const CartContext = createContext({
    cart:[]
});

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const addItem = (item,quantity) =>{
        if(!isInCart(item.id)){
            setCart(prev => [...prev,{...item,quantity}]);
            return true;
        }
        return false;

    }
    const cantElementos = () =>{
        let cantidad = 0;
        if(cart.length > 0)
            cart.forEach(item => cantidad += item.quantity)
        return cantidad;
    }

    const removeItem = (itemId) =>{
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
    }

    const clearCart = () =>{
        setCart([]);
    }

    const isInCart = (itemId) =>{
        return cart.some(prod=> prod.id === itemId)
    }

    const total = ()=>{
        return cart.reduce((acc,item)=>{
            let valorTotalItem = item.quantity * item.price;
            acc += valorTotalItem;
            return acc
          },0);
    }

    return (
        <CartContext.Provider value={{cart,addItem,removeItem,clearCart,total,cantElementos}}>
            {children}
        </CartContext.Provider>
    )

}

