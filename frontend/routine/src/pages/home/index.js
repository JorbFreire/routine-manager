import React from 'react';
import { Link } from 'react-router-dom'

import Header from '../../components/Header/index';
import List from '../../components/List/index';

import './styles.css';

function Home() {
  return (
    <div 
      className="page"
      id="home"
    >
      <Header />
      <List />
      <Link to="/task/new" >
        <button
          id="create-task"
          type="button"
        >
          this goes to "taskCreator" page
        </button>
      </Link>
    </div>
  );
}

export default Home;