import React from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Firebase from "../components/firebase.jsx";


export default function Cadastro() {
    const auth = getAuth(Firebase);
    const email = 'teste12@gmail.com'
    const password = '12345678'
    function Cadastrar() {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('Correto');
                // Signed in
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                console.log(error);
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    }
    return (
        <div className='login'>

            <h1> Cadastro </h1>
            <div className='input'>

                <label>Login</label>
                <input placeholder='email' />
            </div>


            <div className='input'>

                <label>Senha</label>
                <input placeholder=' passoword' />



            </div>

            <button onClick={() => Cadastrar()}>Cadastro   </button>

        </div>
    )

}