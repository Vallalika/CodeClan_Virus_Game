import React from "react"
import PlayerHand from "../components/PlayerHand"
import PlayerBoard from "../components/PlayerBoard"
import styled from 'styled-components'
import {BrowserRouter as Router, Routes, Link, Route, useNavigate} from "react-router-dom"


const GridWrap = styled.main`
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr 3fr 2fr;
    grid-template-columns: 1fr 3fr 3fr 1fr;

    justify-items: center;
    /* horizontal alignment within each cell */

    align-items: center;
    /* vertical alignment within each cell */
`

const ScreenTitle = styled.h2 `
    grid-column: 2 / 4;
`

const HandArea = styled.section `
    grid-column: 1 / 5;
`
const LeftBoard = styled.section `
    grid-row: 3;
    grid-column: 1 / 3;
`

const RightBoard = styled.section `
    grid-row: 3;
    grid-column: 3 / 5;
`

const PlayerTurn = ({ playerOneName, playerTwoName, playerOneHand, playerTwoHand,setPlayerOneHand, setPlayerTwoHand, refillHand, onCardSelected,onHandSelectedCard, currentPlayer, setCurrentPlayer,  add_organ, play_virus, play_cure, checkBoard, checkHand, playerOneBoardArray, playerTwoBoardArray, check_win}) => {


const onClick = () => {
    if (currentPlayer === 1) {
        refillHand(playerOneHand)
    } else {
        refillHand(playerTwoHand)
    }
}

let Navigate = useNavigate()

const onNextTurnClick = (board) => {

    if(check_win(board) === true){

        console.log("hello")
        Navigate("/winnerpage")
    }
    
    if (currentPlayer === 1){
        setCurrentPlayer(2)
    }
    else{setCurrentPlayer(1)}
}

const playerName = () => {
    if (currentPlayer === 1){
        return(playerOneName)
    }
    else{
        return(playerTwoName)
    }}




    return (
        <>
            <GridWrap>
                <a id="a" href="https://www.goliathgames.us/wp-content/uploads/2019/07/10866710_v3_0419_Virus_IM_ENG-compressed.pdf"> <img id="icon" src="./instructions_icon.svg" alt="instructions icon"/> </a>
                <ScreenTitle> {playerName()}'s Turn</ScreenTitle>
                <img id = "deck" src="./deck_icon.svg" alt="image of deck" onClick={onClick} />
                <HandArea>
                    <PlayerHand 
                        playerOneHand={playerOneHand}
                        setPlayerOneHand={setPlayerOneHand}
                        playerTwoHand={playerTwoHand}
                        setPlayerTwoHand={setPlayerTwoHand}
                        currentPlayer = {currentPlayer}
                        playerOneBoardArray={playerOneBoardArray}
                        playerTwoBoardArray={playerTwoBoardArray}
                        onCardSelected={onCardSelected} 
                        onHandSelectedCard={onHandSelectedCard}
                        add_organ = {add_organ}  
                        play_virus = {play_virus}
                        play_cure = {play_cure} 
                        checkBoard = {checkBoard}
                        checkHand = {checkHand} 
                        />
                     <button onClick={()=> onNextTurnClick(playerOneBoardArray)}>Next Turn</button>


                </HandArea>
                <LeftBoard>
                    <PlayerBoard playerBoardArray={playerOneBoardArray}/>
                </LeftBoard>
                <RightBoard>
                    <PlayerBoard  playerBoardArray={playerTwoBoardArray}/>
                </RightBoard>
            </GridWrap>
        </>
    )
}

export default PlayerTurn