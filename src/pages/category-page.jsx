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

  return <section>
    <h1 className="section-name">{category && category.nombre}</h1>
    <div className="grid products">
      {
        productos && productos.length > 0
        ? (
          productos.map(producto => (<Producto key={producto.id} id={producto.id} imagen={producto.imagen} nombre={producto.nombre} precio={producto.precio}/>))
        )
        : (
          <h4>No se han encontrado productos</h4>
        )
      }
    </div>
  </section>
}

function Producto({ id, imagen, nombre, precio }) {
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`/product/${id}`) } className="grid-element card product hoverable">
      <img src={imagen} alt="" />
      <h3>{nombre}</h3>
      <p className="price">${precio}</p>
    </div>
  )
}
