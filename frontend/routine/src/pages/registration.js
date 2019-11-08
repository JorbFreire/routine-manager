import React from 'react';
import { Link } from 'react-router-dom'
import handleRegistration from '../handlers/handleRegistration';
import './styles.css';

function Registration() {
  return (
    <div 
      id="registration"
      className="page"
    >
      <div className="main-box">
        <header> <h1> Hi! </h1> </header>
        <Link to="/login">
          <p> <i> 
            Alredy have an acount? Click to login! 
          </i></p>
        </Link>
        <form>
          <label htmlFor="email">
            E-mail *
          </label>
          <input 
            id="email"
            type="email"
            placeholder="e-mail"
          />
          <label htmlFor="password">
            Password *
          </label>
          <input 
            id="password"
            type="password"
            placeholder="password"
          />
          <label htmlFor="password">
            Confirm password *
          </label>
          <input 
            id="password"
            type="password"
            placeholder="password"
          />
          <button
            onClick={handleRegistration}
            type="submit"
            id="registration-button"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;