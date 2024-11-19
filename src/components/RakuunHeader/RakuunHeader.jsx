import './RakuunHeader.css'
import { RTLogoDark } from '../../components/Icons/RTLogo.jsx'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../providers/Auth.jsx'

export function RakuunHeader() {
  const navigate = useNavigate()
  const { currentUser, logout } = useAuth()

  return <header className="rakuun-header">
    <div className="rakuun-content-container">
      <div className="rakuun-logo">
        <RTLogoDark height={80} width={80} /><h1>Rakuun Tech</h1>
      </div>
      <div className="header-content">
        <div className="rakuun-search-container">
          <form>
            <input type="text" name="" id="" placeholder="Leds, Placas, Sensores"/>
            <button type="submit">Buscar</button>
          </form>
        </div>
        <nav className="rakuun-nav-buttons">
          <ul>
            <li onClick={() => navigate('/categories')}>Categorias</li>
            <li onClick={() => navigate('/donate')}>Donar</li>
            {
              // currentUser
              // ? <li onClick={() => navigate('/profile')}>Perfil</li> 
              // : null
              console.log('currentUser', currentUser)
            }
            {
              !currentUser
              ? <li onClick={() => navigate('/login')}>Login</li> 
              : null
            }
            {
              !currentUser
              ? <li onClick={() => navigate('/register')}>Registro</li> 
              : null
            }
            
            <li onClick={() => navigate('/cart')}>Carrito</li>
            {
              currentUser
              ? <li onClick={() => {console.log('cerrar sesion'); logout()}}>Cerrar sesión</li>
              : null
            }
          </ul>
        </nav>
      </div>
    </div>
  </header>
}