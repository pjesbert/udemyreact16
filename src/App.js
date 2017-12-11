import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  //state can only be use when you extends Components
  //and can be access in this class only. -jesbert
  state = {
      persons: [
        { name: 'jes', age:22 },
        { name: 'tasha', age:23 },
        { name: 'marga', age:24 }
      ],
      showPersons: false
    }

    switchNameHandler = (newName) => {
      //console.log('was clicked!');
      //to Change value 
      //Don't do this: this.state.person[0].name = 'Maximilian';
     this.setState({
        persons: [
        { name: 'jesbert', age:22 },
        { name: newName, age:23 },
        { name: 'marga', age:22 }
      ]
      })

  }
     switchInpName = (event) => {
      this.setState({
        persons: [
        { name: 'jesbert', age:22 },
        { name: event.target.value, age:23 },
        { name: 'marga', age:22 }
      ]
     })
    }

    togglePersonHandler = () =>{
      console.log( this.state.showPersons)
      let doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
      console.log(this.state.showPersons)
    }

  render() {
    //this is JSX example
    const style ={
      backgroundColor:"white",
      font:"inherit",
      border:"1px solid blue",
      padding:"8px",
      cursor:"pointer"
    }

    return (
      <div className="App">
        <h1>Hi, im jesbert</h1>
        <p> This is working</p>
        <button 
          style={style} 
          onClick={this.togglePersonHandler}>Switch name</button>
         
        
         { this.state.showPersons === true ?
          <div>
            <Person 
               name ={this.state.persons[0].name} 
               age={this.state.persons[0].age} />
            <Person 
                name ={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this,"jielyn")}
                changed = {this.switchInpName}>My Hobbies: Racing</Person>
            <Person 
                name ={this.state.persons[2].name} 
                age={this.state.persons[2].age} />
           </div> : null
        }

        </div>
    );
   // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi I\'m jesbert'))
  }
}

export default App;
