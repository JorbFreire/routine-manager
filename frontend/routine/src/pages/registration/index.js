import React from 'react';
import './styles.css';

function handdleRegistration(){
  console.log( "I haddle it");
}
function Registration() {
  return (
    <div 
      id="registration"
      className="page"
    >
      <div id="main-box">
        <header> <h1> Hi! </h1> </header>
        <a href="/login">
          <p> <i> 
            Alredy have an acount? Click to login! 
          </i></p>
        </a>
        <form>
          <label htmlFor="email">
            E-mail *
          </label>
          <input 
            id="email"
            type="text"
            placeholder="e-mail"
          />
          <label htmlFor="password">
            Password *
          </label>
          <input 
            id="password"
            type="text"
            placeholder="password"
          />
          <label htmlFor="password">
            Confirm password *
          </label>
          <input 
            id="password"
            type="text"
            placeholder="password"
          />
          <button
            onClick={handdleRegistration}
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

export default Registration;