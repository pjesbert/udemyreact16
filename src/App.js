import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';

class App extends Component {
  //state can only be use when you extends Components
  //and can be access in this class only. -jesbert
  state = {
      persons: [
        { id:"1",name: 'jes', age:22 },
        { id:"2",name: 'mark', age:23 },
        { id:"3",name: 'bill', age:24 }
      ],
      showPersons: false
    }

    
     nameSwitchHandler = (event,personid) => {
      //output of this syntax is an index only u shit!
      const personIndex = this.state.persons.findIndex(p =>{
        return p.id === personid
      })
      //instead of using [] we use {} because we manipulate 1 property of an object you shit!
      const person = {
        ...this.state.persons[personIndex]
      };

      person.name = event.target.value;
      //We're fetching an array u shit! so we have to use [] u dumb ass
      const statePerson = [...this.state.persons]
      statePerson[personIndex] = person
      this.setState({
        persons: statePerson
     })
    }

    deletePersonHandler = (personIndex) => {
      const persons = [...this.state.persons];
      persons.splice(personIndex,1);
      this.setState( {persons:persons} );
    }

    togglePersonHandler = () =>{
      
      let doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
     
    }

  render() {
    //this is JSX example
    const style ={
      backgroundColor:"green",
      color:"white",
      font:"inherit",
      border:"1px solid blue",
      padding:"8px",
      cursor:"pointer"
    }

    let person = null;
    if(this.state.showPersons){
          person =(
            <div>
              {this.state.persons.map((arrperson,arrindex) =>{
                return( 
                  <Person 
                    click = {() => this.deletePersonHandler(arrindex)}
                    name = {arrperson.name}
                    age = {arrperson.age}
                    key={arrperson.id}
                    changed = {(event) => this.nameSwitchHandler(event,arrperson.id)}
                  />)
                      
              })}
           </div> 
          )
                style.backgroundColor="red";
    }
    const classes = [];
    const fromState = this.state.persons.length;

    if(fromState <=2){
      classes.push('red');
    }
    if(fromState<=1){
      classes.push('bold');
    }


    return (
      <div className="App">
        <h1>Hi, im jesbert</h1>
        <p className={classes.join('')}> This is working</p>
        <button 
          style={style} 
          onClick={this.togglePersonHandler}>Switch name
        </button>
        {person}
        </div>
    );
   // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi I\'m jesbert'))
  }
}


export default Radium(App);
