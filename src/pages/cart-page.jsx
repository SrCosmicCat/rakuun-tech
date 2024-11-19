import { useEffect, useState } from "react"
import { useCart } from '../hooks/useCart.js'

export function CartPage() {
  const { cart, addItem, removeItem } = useCart()
  


  return <section>
    <h1 className="section-name">Mi Carrito</h1>
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

      </aside>
    </div>
  </section>
}
