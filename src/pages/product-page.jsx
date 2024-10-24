import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import products from '../mocks/productos.json'

export function ProductPage() {
  const { id } = useParams()

  const [producto, setProducto] = useState()

  useEffect(() => {
    
    // TODO: Fetch jeje
    const productInfo = products.find(producto => producto.id === id)
    
    setProducto(productInfo)
  }, [id])

  return <>
    <h1>{producto && producto.nombre}</h1>
    <p>${producto && producto.precio}</p>
  </>
}
