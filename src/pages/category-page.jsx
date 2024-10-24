import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import categories from '../mocks/categories.json'

export function CategoryPage() {
  const { id } = useParams()  
  const [category, setCategory] = useState()
  const [productos, setProductos] = useState([])

  useEffect(() => {
    
    // TODO: Fetch jeje
    const categoryFromJson = categories.find(category => category.id === id)
    
    setCategory(categoryFromJson)
    setProductos(categoryFromJson.productos)

  }, [id])

  return <>
    <h1>{category && category.nombre}</h1>
    {
      productos && productos.length > 0
      ? (
        productos.map(producto => (<Producto key={producto.id} id={producto.id} nombre={producto.nombre} precio={producto.precio}/>))
      )
      : (
        <h4>Noay na</h4>
      )
    }
  </>
}

function Producto({ id, nombre, precio }) {
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`/product/${id}`) }>
      <h3>{nombre}</h3>
      <p>${precio}</p>
    </div>
  )
}
