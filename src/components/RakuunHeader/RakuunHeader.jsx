import './RakuunHeader.css'
import { RTLogoDark } from '../../components/Icons/RTLogo.jsx'

export function RakuunHeader() {
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
            <li>Categorias</li>
            <li>Crear cuenta</li>
            <li>Ingresar</li>
            <li>Donar</li>
            <li>Carrito</li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
}