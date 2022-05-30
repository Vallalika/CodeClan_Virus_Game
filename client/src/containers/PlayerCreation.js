import React, { useState } from "react";

const PlayerCreation = () => {

    const [playerOneName, setPlayerOneName] = useState("")
    const [playerTwoName, setPlayerTwoName] = useState("")

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
            <form id="form"> {/* onSubmit={onSubmit} */}
                <div id="players-form">
                    <h2>Player 1 </h2>
                    <input type="text" id="name" onChange={playerOneChange} required/>
                </div>
                <input type="submit" value="Start" id="start-button"/>
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


