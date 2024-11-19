import './Categories.css'
//import categories from '../../mocks/categories.json'
import { API_URL } from '../../constants.js'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import FCM from '../FCM.jsx'

export function Categories() {
  
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/categorias.json`)
      .then(response => response.json())
      .then(data => setCategories(data))
  }, [])
  
  
  return (
    <section>
      <FCM />
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