import React from 'react';

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
      <button
        id="new-task"
      >
        this goes to "task new" page
      </button>
    </div>
  );
}

export default Home;