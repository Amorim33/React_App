import React  from 'react';
import './Person.css';
const person = (props) => {
    return(
        <div className="Person"  onDoubleClick={props.doubleClick}>
            <p> Eu sou {props.name} e tenho {props.age} anos</p>
            <input type="text" onChange={props.updated} value={props.name}></input>
        </div>
    )
};

export default person;