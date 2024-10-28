import './Categories.css'
import categories from '../../mocks/categories.json'
import { useNavigate } from 'react-router-dom'

export function Categories() {
  return (
    <section>
      <h2 className="section-name">Categorías</h2>
      <div className="grid">
        {
          categories.map(category => (
            <Category key={category.id} id={category.id} nombre={category.nombre} imagen={category.imagen} />
          ))
        }
      </div>
    </section>
  )
}

export function Category({ id, nombre, imagen }) {
  const navigate = useNavigate()

  return <div onClick={ () => navigate(`/categories/${id}`) } className='grid-element card hoverable'>
    <h3>{nombre}</h3>
    <img src={imagen ?? ''} alt="" />
  </div>
}