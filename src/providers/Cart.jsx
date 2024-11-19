import { createContext, useState } from "react"

export const CartContext = createContext()

export function CartProvider({ children }) {
  // const [cart, setCart] = useState(() => {
  //   const cart = localStorage.getItem('cart')
  //   return cart ? JSON.parse(cart) : []
  // })

  const [cart, setCart] = useState(JSON.parse(window.localStorage.getItem('cart')) || [])

  const updateLocalStorage = (newCart) => {
    localStorage.setItem('cart', JSON.stringify(newCart))
  }

  const addItem = (item) => {
    const productIndex = cart.findIndex(product => product.id === item.id)
    let newCart = []

    if (productIndex >= 0) {
      newCart = structuredClone(cart)
      newCart[productIndex].quantity += 1
    }
    else {
      newCart = [...cart, { ...item, quantity: 1 }]
    }
    
    setCart(newCart)
    updateLocalStorage(newCart)
  }

  const removeItem = (item) => {
    const productIndex = cart.findIndex(product => product.id === item.id)

    if (productIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart.splice(productIndex, 1)
      setCart(newCart)
      updateLocalStorage(newCart)
    }



    // if (productIndex >= 0) {
    //   const newCart = structuredClone(cart)
    //   newCart[productIndex].quantity -= 1
    //   if (newCart[productIndex].quantity === 0) {
    //     newCart.splice(productIndex, 1)
    //   }
    //   setCart(newCart)
    // }
  }

  const clearCart = () => {
    let newCart = []
    setCart(newCart)
    updateLocalStorage(newCart)
  }

  return <CartContext.Provider value={{ cart, clearCart, addItem, removeItem }}>
    {children}
  </CartContext.Provider>
}