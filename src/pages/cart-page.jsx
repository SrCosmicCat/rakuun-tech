import { useEffect, useState } from "react"
import { useCart } from '../hooks/useCart.js'
import { useAuth } from "../providers/Auth.jsx"


export function CartPage() {
  const { cart, addItem, removeItem } = useCart()
  const { currentUser } = useAuth()


  return <section>
    <h1 className="section-name">Mi Carrito</h1>
    <p>
      {
        currentUser
        ? `Sesión iniciada en: ${currentUser.email}`
        : 'Sesión no iniciada'
      }

    </p>
    <div className="cart-page">
      <main>
        <table className="cart-page-products">
          <h2>Productos</h2>
          <tbody>
            {
              cart && cart.map((item, index) =>
                <tr key={item.id} className="cart-item">
                  <td><img src={item.imagen} alt="" /></td>
                  <td className="cart-item-name">{item.nombre}</td>
                  <td className="cart-item-quantity">Cantidad: {item.quantity}</td>
                  <td className="cart-item-total">${item.precio * item.quantity}</td>
                </tr>
              )
            }
          </tbody>
        </table>      
      </main>
      <aside>
        <div className="card">
          <h2>Resumen de compra</h2>
          <p>Total: ${
            cart.reduce((acc, item) => acc + (item.precio * item.quantity), 0)
          }</p>
          <a href="https://mpago.la/1h4xbH4" className="btn-comprar">Comprar</a>
        </div>
        
      </aside>      
    </div>
  </section>
}
