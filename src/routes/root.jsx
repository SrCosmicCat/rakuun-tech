import { RakuunHeader } from "../components/RakuunHeader/RakuunHeader";
import { useEffect } from 'react';
import { messaging } from '../firebaseConfig.js';
import { getToken } from 'firebase/messaging';


export function Root({ children }) {

  // async function requestPermission() {
  //   //requesting permission using Notification API
  //   const permission = await Notification.requestPermission();
  
  //   if (permission === "granted") {
  //     const token = await getToken(messaging, {
  //       vapidKey: 'BDQGdnVr0SwZKOenLchueayAY0mM-d08ejejmeOfmjjPguwp-UzjcFHDUexYfrT2qz0kIbboaikG1VeC65Fk9QI',
  //     });
  
  //     //We can send token to server
  //     console.log("Token generated : ", token);
  //   } else if (permission === "denied") {
  //     //notifications are blocked
  //     alert("You denied for the notification");
  //   }
  // }

  // useEffect(() => {
  //   requestPermission();
  // }, []);



  return <>
    <RakuunHeader />
      <main>
        {children}
      </main>
  </> 
}