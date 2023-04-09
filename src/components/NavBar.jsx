import React from 'react'
import { CartWidget } from './CartWidget'
export const NavBar = ( { elementosCant}) => {
  return (
    <>
        <nav>
          
          <button>Seccion 1</button>
          <button>Seccion 2</button>
          <button>Seccion 3</button>
          <CartWidget elementosCant={elementosCant}/>
        </nav>
    </>
  )
}
