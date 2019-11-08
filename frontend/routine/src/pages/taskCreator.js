import React from 'react';
import {Level} from '../components/Level/index';
import handleTaskInputs from '../handlers/handleTaskInputs';

import './styles.css';

function taskCreator() {
  return (
    <div 
      className="page"
      id="task-new"
    >
      <div className="main-box">
        <header> <h2> Create your task! </h2> </header>
        <form>
          <label htmlFor="title">
            Title *
          </label>
          <input 
            id="title"
            type="text"
            placeholder="task title"
          />
          <label htmlFor="time-frame">
            Days of tolerance *
          </label>
          <input 
            id="time-frame"
            type="text"
            placeholder="tolerance"
          />
          <Level />
          <Level />
          <Level />
          <Level />
          <Level />
          <button
            type="button"
            id="level-button"
            onClick={() => {
              //add lvl
            }}
          >
            New level
          </button>
          
          <button
            type="submit"
            id="submit-button"
          >
            Sumit
          </button>
        </form>
      </div>
    </div>
  );
}

export default taskCreator;