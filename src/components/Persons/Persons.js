import React,{ Component } from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) =>{
        return <Person 
                  doubleClick = {() => props.delete(index)} 
                  name = {person.name} 
                  age ={person.age} 
                  key = {person.id}
                  updated = {(event) => props.update(event, person.id)}
                /> 
      });

export default persons;