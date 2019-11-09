import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
//let persons = null;
class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Aluisera', age: '15'},
      {id: '2', name: 'José', age: '52'},
      {id: '3', name: 'Mariza', age: '54'}
    ],
    switchPressed: false,
  }
  switchButtonState = () =>{
    this.setState({
        switchPressed: !this.switchPressed
    });
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
          {this.state.persons.map((person, index) =>{
            return <Person 
                      doubleClick = {() => this.deletePerson(index)} 
                      name = {person.name} 
                      age ={person.age} 
                      key = {person.id}
                      updated = {(event) => this.updateName(event, person.id)}
                    /> 
          })}
        </div>
      );
    }
    return (
      <div className = 'App'>
        <h1>Chave de Quebra!</h1>
        <button onClick={this.switchButtonState} >Press</button>
        {persons}        
      </div>
    );
  }
}

export default App;
{/* <Person name = {this.state.persons[0].name} age ={this.state.persons[0].age} updated={this.updateName} />
                  <Person name = {this.state.persons[1].name} age ={this.state.persons[1].age} click={this.switchName.bind(this,'Monstraaoo')} />
                  <Person name = {this.state.persons[2].name} age ={this.state.persons[2].age} /> */}