import React, {useEffect, useState} from 'react';
import "./LoginPage.css"
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setLogin} from "../../redux/loginSlice";
import axios from "axios";

export function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch()

    const navigate = useNavigate();
    const navigateToMain = () => {
        navigate('/main')
    }

    const handleLogin = (event) => {
        event.preventDefault()
        useEffect(() => {
            axios
                .post("https://localhost:8080/users/login")
                .then((response) => {
                    const login = response.data
                    dispatch(setLogin(login))
                    navigateToMain()
                })
                .catch((error) => {
                    if (error.response) {
                        console.log("you lox")
                    }
                });
        }, []);
    };

    return (
        <div className="LoginForm">
            <div className="header">
                <h2>
                    Log in
                </h2>
            </div>
            <form onSubmit={handleLogin}>
                <div className="form">
                    <h3>
                        E-mail
                    </h3>
                    <input name="login" onChange={(e) => setEmail(e.target.value)}/>
                    <h3>
                        Password
                    </h3>
                    <input name="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                    <h3/>
                    <input value={'Submit'} type="submit" name="registerAccount"/>
                </div>
            </form>
        </div>
    )
}

export default LoginPage