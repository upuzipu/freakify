import React, {useState} from 'react';
import "./RegistrationPage.css"
import {useNavigate} from "react-router-dom";


export function RegistrationPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate('/login')
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name.length > 0 && email.length > 0 && password.length > 0) {
            navigateToLogin()
        }
        else {
            alert('xd')
        }
    };

    return (
        <div className="RegistrationForm">
            <div className="header">
                <h2>
                    Registration
                </h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form">
                    <h3>
                        Login
                    </h3>
                    <input name="username" onChange={(e) => setName(e.target.value)}/>
                    <h3>
                        E-mail
                    </h3>
                    <input name="mail" onChange={(e) => setEmail(e.target.value)}/>
                    <h3>
                        Password
                    </h3>
                    <input name="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                    <h3>
                        Password
                    </h3>
                    <input name="password" type="password"/>
                    <h3/>
                    <input value={'BE FREAK'} type="submit" name="registerAccount" />
                </div>
            </form>
        </div>

    )
}

export default RegistrationPage;

