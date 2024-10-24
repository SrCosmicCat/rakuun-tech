import './Categories.css'
import categories from '../../mocks/categories.json'
import { useNavigate } from 'react-router-dom'

export function Categories() {
  
  return (
    <div>
      <h2>Categorias</h2>
      <ul className='categories'>
        {
          categories.map(category => (
            <li key={category.id}>
              <Category id={category.id} nombre={category.nombre} imagen={category.imagen} />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export function Category({ id, nombre, imagen }) {
  const navigate = useNavigate()

  return <div className='category'>
    <h3 onClick={ () => navigate(`/categories/${id}`) }>{nombre}</h3>
    <img src={imagen ?? ''} alt="" />
  </div>
}