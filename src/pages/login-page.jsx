import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig.js";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (error) {
            console.error("Error logging in:", error);
            setErrorMessage(
                "Email or password is incorrect. Please try again."
            );
        }
    };

    return (
      <section>
          <div>
            <form onSubmit={handleSubmit} className="login-form">
              <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="name">Email:</label> <br />
                    <input type="email" name="name" id="name" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label> <br />
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                {errorMessage && (
                    <p>
                        {errorMessage}
                    </p>
                )}
                <button type="submit">Iniciar sesión</button>
                <p>¿Aún no tienes una cuenta? Registrate <a onClick={() => navigate("/register")}>aquí</a></p>
                </form>
          </div>
        </section>
    );
}

export default LoginPage;