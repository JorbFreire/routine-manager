import React from 'react';
import '../styles.css';

function handdleLogin(){
  console.log( "I haddle it");
}
function Login() {
  return (
    <div 
      id="login"
      className="page"
    >
      <div className="main-box">
        <header> <h1> Hi! </h1> </header>
        <a href="/registration">
          <p> <i>Create new acount </i></p>
        </a>
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
            onClick={handdleLogin}
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