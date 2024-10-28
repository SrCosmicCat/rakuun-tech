import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import products from '../mocks/productos.json'

import { CopyBlock, dracula } from 'react-code-blocks'

export function ProductPage() {
  const { id } = useParams()

  const [producto, setProducto] = useState()

  useEffect(() => {
    
    // TODO: Fetch 
    const productInfo = products.find(producto => producto.id === id)
    
    setProducto(productInfo)
  }, [id])

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
        <form>
          <div className="form-group">
            <label htmlFor="cantidad">Cantidad:</label>
            <input type="number" name="cantidad" id="cantidad" />
            <p className="span">({producto && producto.stock}) disponibles</p>
          </div>
          <button type="submit">Añadir al carrito</button>
        </form>
      </div>
    </aside>
  </section>
}
