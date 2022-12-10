import React from 'react';
import reactlogo from "../images/react-logo.svg"

export default function Main(){
    return(
        <nav>
            <img src={reactlogo} alt='React logo'>
            </img>
            <h3>ReactFacts</h3>
            <h4>React Course-Project 1</h4>
        </nav>
    )
}