'use client'
import React, { useState } from "react";
import emailjs from "emailjs-com";

import styles from "./ContactContent.module.css";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [messageSent, setMessageSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (event: { preventDefault: () => void; target: string | HTMLFormElement; }) => {
        event.preventDefault();

        // Verificar si los campos están en blanco
        if (!name || !email || !message) {
            setErrorMessage("Por favor, complete todos los campos");
            return;
        }

        emailjs
            .sendForm(
                "service_ox7aili",
                "template_sbu6hcw",
                event.target,
                "rjcSU1aj5GcjvyJkL",
                { name, email, message }
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setMessageSent(true);
                },
                (error) => {
                    console.log(error.text);
                    setErrorMessage("Se ha producido un error al enviar el mensaje");
                }
            );
    };

    return (
        <div className="container text-center mt-4">
            <h1>Contacto</h1>
            <div className={styles.container}>
                {messageSent ? (
                    <div className={`${styles.alert} ${styles['alert-success']}`} role="alert">
                        ¡Mensaje enviado correctamente!
                    </div>
                ) : (

                    <form className={styles.forM} onSubmit={handleSubmit}>
                        {errorMessage && (
                            <div className="alert alert-danger" role="alert">
                                {errorMessage}
                            </div>
                        )}

                        <div>
                            <label htmlFor="name">Nombre:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Tu nombre y apellido"
                                value={name}
                                className={styles.inPut}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Tu direccion de email"
                                value={email}
                                className={styles.inPut}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="message">Mensaje:</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Tu mensaje"
                                value={message}
                                className={styles.textArea}
                                onChange={(event) => setMessage(event.target.value)}
                            />
                        </div>
                        <button type="submit" className={styles.button1}>Enviar</button>
                    </form>
                )}
            </div>
        </div >
    );
}

export default Contact;