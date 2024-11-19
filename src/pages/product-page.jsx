import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
// import products from '../mocks/productos.json'
import { API_URL } from '../constants.js'
import { useCart } from '../hooks/useCart.js'

import { CopyBlock, dracula } from 'react-code-blocks'

export function ProductPage() {
  const { id } = useParams()

  const [producto, setProducto] = useState()
  const { cart, addItem, removeItem } = useCart()

  useEffect(() => {
    console.log("id", id);
    fetch(`${API_URL}/productos.json`)
      .then(response => response.json())
      .then(data => {
        const productInfo = data.find(producto => producto.id === id)
        console.log("productInfo", productInfo);
        setProducto(productInfo)
      })
  }, [id])

  const handleSubmit = (event) => {
    event.preventDefault()

    const quantity = parseInt(event.target.quantity.value)

    checkProductInCart(producto)
      ? removeItem(producto)
      : addItem({ ...producto, quantity })    
  }

  const checkProductInCart = (product) => {
    console.log("cart", cart);
    console.log("product", product);
    return cart.some(item => item.id === product.id)
  }


  return <section className="product-page">
    <main>
      <section className="product-data">
        <div className="card">
          <img src={producto && producto.imagen} alt="" />
        </div>
        <div className="details">
          <h2>{producto && producto.nombre}</h2>
          <p className="price">${producto && producto.precio}</p>
          <h3>Descripción</h3>
          <p className="description">{producto && producto.descripcion}</p>
          <h3>Información</h3>
          <p className="info">{
            producto && (
              <ul> {
                producto.info.map((info, index) => <li key={index}>{`${info.nombre}: ${info.valor}`}</li>) 
              }
              </ul>
            )
          }</p>
        </div>
      </section>
      <section>
        <h2>Ejemplo de código</h2>
        <div style={{"marginTop": "10px" }}>
          <CopyBlock
            text={`
              void setup() {
                  pinMode(LED_PIN, OUTPUT);
              }

              void loop() {
                  digitalWrite(LED_PIN, HIGH);
                  delay(1000);
                  digitalWrite(LED_PIN, LOW);
                  delay(1000);
              }
              `}
            language="arduino"
            showLineNumbers={true}
            theme={dracula}
            wrapLines
            code
          />
        </div>

      </section>
    </main>
    <aside>
      <div className="card buy">
        <h2>Comprar</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="quantity">Cantidad:</label>
            <input type="number" name="quantity" id="quantity" />
            <p className="span">({producto && producto.stock}) disponibles</p>
          </div>
          <button type="submit">{
            producto &&
            checkProductInCart(producto)
              ? 'Eliminar del carrito'
              : 'Añadir al carrito'
            }
          </button>
        </form>
      </div>
    </aside>
  </section>
}
