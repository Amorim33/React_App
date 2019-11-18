import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
//let persons = null;



class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Aluisera', age: '15'},
      {id: '2', name: 'José', age: '52'},
      {id: '3', name: 'Mariza', age: '54'}
    ],
    switchPressed: false
  }
  switchButtonState = () =>{
    this.setState({
        switchPressed: !this.state.switchPressed
    });
    console.log(this.state.switchPressed);
  }
  deletePerson = (personIndex) =>{
    // const personsDeleted = this.state.persons.slice();
    const personsDeleted = [...this.state.persons];
    personsDeleted.splice(personIndex,1);
    this.setState({persons: personsDeleted})
  }
  updateName = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });
    
    const personChanged = {...this.state.persons[personIndex]};
    personChanged.name = event.target.value;
    
    const personsChanged = [...this.state.persons];
    personsChanged[personIndex] = personChanged; 
    
    this.setState({ persons: personsChanged });
  }
  render() {
    let persons= null;
    if(this.state.switchPressed){
      persons=(
        <div>
          <Persons persons = {this.state.persons}
                  delete = {this.deletePerson}
                  update = {this.updateName}/>
        </div>
      );
    }

    return (
      <div className = 'App'>
        <Cockpit persons = {this.state.persons} 
                pressed = {this.state.switchPressed} 
                stateOfButton = {this.switchButtonState} />
        {persons}        
      </div>
    );
    
  }
}

export default App;
