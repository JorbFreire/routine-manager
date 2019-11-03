import React from 'react';
import { MdIndeterminateCheckBox } from 'react-icons/md';
import './styles.css'

export function Level(props){
  return(
    <div id="level" >
      <input type="text" placeholder="this is a level"/>
      <button 
        id="remover"
        type="button"
        onClick={() => {
          //erase(props.position);
        }} 
      >
        <MdIndeterminateCheckBox/>
      </button>
    </div>
  );
}

export default Level;