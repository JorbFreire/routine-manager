import React from 'react';
import { Link } from 'react-router-dom'
import handleLogin from '../handlers/handleLogin';
import './styles.css';

function Login() {
  return (
    <div 
      id="login"
      className="page"
    >
      <div className="main-box">
        <header> <h1> Hi! </h1> </header>
        <Link to="/registration">
          <p> <i>Create new acount </i></p>
        </Link>
        <form>
          <label htmlFor="email"></label>
          <input 
            id="email"
            type="email"
            placeholder="e-mail"
          />
          <label htmlFor="password"></label>
          <input 
            id="password"
            type="password"
            placeholder="password"
          />
          <button
            onClick={handleLogin}
            type="submit"
            id="login-button"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;