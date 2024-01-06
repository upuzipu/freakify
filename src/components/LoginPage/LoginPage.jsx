import React, {useState} from 'react';
import "./LoginPage.css"
import {useNavigate} from "react-router-dom";

export function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const navigateToMain = () => {
        navigate('/main')
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email.length > 0  && password.length > 0) {
            navigateToMain()
        }
        else {
            alert('xd')
        }
    };

    return (
        <div className="LoginForm">
            <div className="header">
                <h2>
                    Log in
                </h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form">
                    <h3>
                        E-mail
                    </h3>
                    <input name="username" onChange={(e) => setEmail(e.target.value)}/>
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