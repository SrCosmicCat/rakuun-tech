import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebaseConfig.js";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
          if (user) {
              setCurrentUser(user);
              const userDoc = await getDoc(doc(db, "users", user.uid));
              if (userDoc.exists()) {
                  setUserData(userDoc.data());
              }
          } else {
              setCurrentUser(null);
              setUserData(null);
          }
          setLoading(false); 
      });

      return unsubscribe;
    }, []);

    const logout = async () => {
        console.log('logout')
        try {
            await auth.signOut();
            setCurrentUser(null);
            setUserData(null);
            console.log("Logged out successfully");
        } catch (error) {
            console.error("Error logging out:", error);
        }
    }

    return (
        <AuthContext.Provider value={{ currentUser, userData, loading, logout }}>
            {children}
        </AuthContext.Provider>
    );
}