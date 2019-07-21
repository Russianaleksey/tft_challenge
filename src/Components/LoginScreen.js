import React from 'react';

const LoginScreen = () => {
    return (
        <div className="login-screen">
            <h1 className="login-screen__header">Summoner Login</h1>
            <form>
                <input className="login-screen__username-field" type="text" placeholder="Username" />
            </form>
            <form>
                <input className="login-screen__password-field" type="password" placeholder="Password" />
            </form>
        </div>
    )
}

export default LoginScreen