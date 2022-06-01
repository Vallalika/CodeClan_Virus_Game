import React, { useState } from "react";
import { Link } from "react-router-dom";

const PlayerCreation = ({setPlayerOneName, setPlayerTwoName}) => {


    const playerOneChange = (event) => {
        setPlayerOneName(event.target.value)
    }
    const playerTwoChange = (event) => {
        setPlayerTwoName(event.target.value)
    }

    return (
        <>
            <div id="header">
                <div id="inst">
                    <span><img id="icon" src="./instructions_icon.svg" alt="instructions icon"/></span>
                    <a id="a" href="https://www.goliathgames.us/wp-content/uploads/2019/07/10866710_v3_0419_Virus_IM_ENG-compressed.pdf">Instructions</a>
                </div>
                <h1><img id="logo" src="./covatars_logo.png" alt="logo"/></h1>
                <div id="h1">.</div>
            </div>
            <form id="form"> 
                <div id="players-form">
                    <h2>Player 1 </h2>
                    <input type="text" id="name" onChange={playerOneChange} required/>
                </div>
                <Link to="/playerTurn" id="start-button">START</Link>
                <div id="players-form">
                    <h2>Player 2 </h2>
                    <input type="text" id="name" onChange={playerTwoChange} required/> 
                </div>
            </form>
            <p id="accesibility">Accessibility Settings</p>
        </>
    )

}
export default PlayerCreation;


