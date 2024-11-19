import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig.js";

function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [direction, setDirection] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, "users", user.uid), {
                email: user.email,
                name: name,
                phone: phone,
                direction: direction,
                createdAt: new Date(),
            });

            navigate("/");
        } catch (error) {
            console.error("Error registering:", error);
            setErrorMessage("Registration failed. Please try again.");
        }
    };

    return (
        <section>
            
            <div>

            <form onSubmit={handleSubmit} className="register-form">
                <h2>Registro</h2>
                <div>
                    <label htmlFor="name">Nombre:</label> <br />
                    <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Email:</label> <br />
                    <input type="email" name="name" id="name" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="phone">Teléfono:</label> <br />
                    <input type="tel" name="phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="direction">Dirección:</label> <br />
                    <input type="text" name="direction" id="direction" value={direction} onChange={(e) => setDirection(e.target.value)} required />
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

                    <button type="submit">Crear cuenta</button>
                    <p>¿Ya tienes una cuenta? Inicia sesión <a onClick={() => navigate("/login")}>aquí</a></p>
                </form>
            </div>
        </section>
    );
}

export default RegisterPage;