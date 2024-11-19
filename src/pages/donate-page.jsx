import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function DonatePage() {

  const handleSubmit = (event) => {
    event.preventDefault()
    // const formData = new FormData(event.target)
    // const data = Object.fromEntries(formData)

    //console.log(data)

    event.target.reset()
    toast.success("Solicitud enviada correctamente")
  }

  return <section className="donate-page">
    <h1 className="section-name">Donar artículos</h1>
    <div className="content">
      <ToastContainer />
      <main>
        <p className="relevant-text">¿Tienes componentes electrónicos que ya no usas?</p>
        <p className="relevant-text">¡Donalos!</p>
        <p className="relevant-text">En Rakuun Tech recibimos donaciones de componentes electrónicos. Evaluaremos los componentes dependiendo del estado en que se encuentren, y te bonificaremos tu ganancia.</p>
        <p className="relevant-text">La donación de artículos tiene como objetivo ayudar a minimizar el impacto de los componentes electrónicos en el medio ambiente.</p>
      </main>
      <aside>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo:</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Teléfono:</label>
            <input type="tel" name="phone" id="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea name="message" id="message" cols="30" rows="5"></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </aside>
    </div>
  </section>
}