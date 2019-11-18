import React  from 'react';
import styled from 'styled-components';
import './Person.css';

const StyledDiv = styled.div` 
    width: 50%;
    margin: 1% auto;
    border: 1px solid black;
    box-shadow: 3px 3px 3px grey;
    padding: 4%;
    text-align: center;
    @media (min-width: 500px) {
        width: 450px;
    }
`;

const person = (props) => {
    return(
        <StyledDiv onDoubleClick={props.doubleClick}>
            <p> Eu sou {props.name} e tenho {props.age} anos</p>
            <input type="text" onChange={props.updated} value={props.name}></input>
        </StyledDiv>
    )
};

export default person;