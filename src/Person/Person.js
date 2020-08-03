import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    return (
    <div className="Person">
    <p>{props.children}</p> 
     <h2>I am {props.name} {props.age}  </h2>

    </div>)
};
 export default Radium(person);