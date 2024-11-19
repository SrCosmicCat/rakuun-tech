import { RakuunHeader } from "../components/RakuunHeader/RakuunHeader";
import { useEffect } from 'react';
import { messaging } from '../firebaseConfig.js';
import { getToken } from 'firebase/messaging';


export function Root({ children }) {
  return <>
    <RakuunHeader />
      <main>
        {children}
      </main>
  </> 
}