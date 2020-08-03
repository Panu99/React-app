import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

class App extends Component {
  state = {
  persons:[
    { name:'max', age:25},
    {name:'min', age:28},
    {name:'macd', age:25},
  ],
  otherState: 'somthing',
  showPersons : false
}
togglePersonsHandler = () =>{
  const DoesShow = this.state.showPersons;
  this.setState({showPersons: ! DoesShow});

}


  render() {
    const style = {
      backgroundColor : 'black',
      color:'white',
    font : 'inherit',
    border : '2x solid blue',
    padding : '8px',
    courser : 'pointer'
    
    };
    let persons  = null;
    if (this.state.showPersons){
      persons=(
        <div>
          {
            this.state.persons.map(person =>{
              return <Person 
              name={person.name}
              age ={person.age} 
              key = {person.id}
               />

            })
          }
        </div>
      );
      style.backgroundColor ='red';
    }

let classes = ['red','bold'].join('  ');

    return (
      <div className="App">
        <h1>Hi,I am React Developer</h1>
        <p className={classes}><h2>This is Really..?</h2></p>
        <button
        style ={style}
         onClick={this.togglePersonsHandler}>this is  my friend</button>
        {persons}
      </div>
    );
    }
}

export default App;
