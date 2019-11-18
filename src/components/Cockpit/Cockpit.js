import React from 'react';
import styled from 'styled-components';
import './Cockpit.css';



const cockpit = (props) =>{
    const StyledButton = styled.button`
        width: 30%;
        font-size: 150%;
        font-family: sans-serif;
        padding: 1%;
        border: 1px solid black;
        background-color: ${props => props.flag ? 'red' : 'green' };
        color: white;
        :hover{
            background-color : ${props => props.flag ? 'salmon' : 'lightgreen' };
            color: black;
        }
    `;

    const classes = [];
    if(props.persons.length <= 2) classes.push("bold");
    if(props.persons.length <= 1) classes.push("red");
    if(props.persons.length === 0) classes.push("italic");

    return(
        <div>
            <h1>Chave de Quebra</h1>
            <p className = {classes.join(" ")}>React zika do baile</p>
            <StyledButton flag = {props.pressed} onClick = {props.stateOfButton} >Press</StyledButton>
        </div>
    );
};

export default cockpit;