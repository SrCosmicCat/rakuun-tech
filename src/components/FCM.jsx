import { useState, useEffect } from 'react';
import { messaging } from '../firebaseConfig.js';
import { getMessaging, onMessage, getToken } from "firebase/messaging";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // ...
});

function FCM() {
  const [token, setToken] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const permission = Notification.requestPermission()
      .then(permission => {
        console.log("Permission: ", permission);
      })
      .catch(err => {
        console.error("Error al solicitar permiso de notificación:", err);
      });

    // Solicita el token de dispositivo
    getToken(messaging, {
      vapidKey: 'BDQGdnVr0SwZKOenLchueayAY0mM-d08ejejmeOfmjjPguwp-UzjcFHDUexYfrT2qz0kIbboaikG1VeC65Fk9QI',
    }).then(currentToken => {
        if (currentToken) {
          setToken(currentToken);
          // Envía el token a tu servidor para que pueda enviar mensajes
          // a este dispositivo
          console.log("Token de dispositivo:", currentToken);
        } else {
          // Mostrar un mensaje de error
          console.error("No se pudo obtener el token de dispositivo");
        }
      })
      .catch(err => {
        console.error("Error al obtener el token de dispositivo:", err);
      });
  }, []);

  onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
    toast(<Message notification={payload.data} />);
    setMessage(payload);
  });

  return (
    <div>
      {/* {token && <p>Token de dispositivo: {token}</p>}
      {message && <p>Mensaje: {JSON.stringify(message)}</p>}
      <button onClick={notify}>Toast test</button> */}
      <ToastContainer />
    </div>
  );
}

const Message = ({ notification }) => {
  return (
    <>
      <div id="notificationHeader">
        {/* image is optional */}
        <span>{notification.title}</span>
      </div>
      <div id="notificationBody">{notification.body}</div>
    </>
  );
};

export default FCM;