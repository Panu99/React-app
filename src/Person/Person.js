import React from 'react';
// import './Person.css';

import styled from 'styled-components';

const Stylediv = styled.div`
width: 60%;
margin: 16px auto;
border: 1px solid #eee;
box-shadow: 0 2px 3px #ccc;
padding: 16px;
text-align: center;`;


const person = (props) => {
    return (
    // <div className="Person">
    <Stylediv>
    <p>{props.children}</p> 
     <h2>I am Pranav hegde....{props.name} {props.age}  </h2>

    </Stylediv>);
};
 export default person;