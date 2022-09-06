import React from "react";
import { Link } from "react-router-dom";
import './login.css'

export default function Login() {
    return (
        <div className='login'>

            <h1> LOGIN </h1>
            <div className='input'>

                <label>Login</label>
                <input placeholder='email' />
            </div>


            <div className='input'>

                <label>Senha</label>
                <input placeholder=' passoword' />



            </div>

            <button> <Link to = '/home'> Login </Link>   </button>

        </div>
    )

}