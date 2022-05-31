import React from "react"
import PlayerHand from "../components/PlayerHand"
import PlayerBoard from "../components/PlayerBoard"
import styled from 'styled-components'
import { refillHand } from "../services/GameServices"

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

const PlayerTurn = ({ playerOneName, playerTwoName, playerOneHand, playerTwoHand,setPlayerOneHand, setPlayerTwoHand, deck, refillHand, playerTwoBoardArray, onCardSelected,onHandSelectedCard, currentPlayer, add_organ, play_virus, play_cure}) => {


const onClick = () => {
    if (currentPlayer === 1) {
        refillHand(playerOneHand)
    } else {
        refillHand(playerTwoHand)
    }
}

    return (
        <>
            <GridWrap>
                <a id="a" href="https://www.goliathgames.us/wp-content/uploads/2019/07/10866710_v3_0419_Virus_IM_ENG-compressed.pdf"> <img id="icon" src="./instructions_icon.svg" alt="instructions icon"/> </a>
                <ScreenTitle> {playerOneName}'s Turn</ScreenTitle>
                <img id = "deck" src="./deck_icon.svg" alt="image of deck" onClick={onClick} />
                <HandArea>
                    <PlayerHand 
                        playerOneHand={playerOneHand}
                        setPlayerOneHand={setPlayerOneHand}
                        playerTwoHand={playerTwoHand}
                        setPlayerTwoHand={setPlayerTwoHand}
                        currentPlayer = {currentPlayer}
                        playerTwoBoardArray={playerTwoBoardArray}
                        onCardSelected={onCardSelected} 
                        onHandSelectedCard={onHandSelectedCard}
                        add_organ = {add_organ}  
                        play_virus = {play_virus}
                        play_cure = {play_cure}  
                        />

                </HandArea>
                <LeftBoard>
                    <PlayerBoard />
                </LeftBoard>
                <RightBoard>
                    <PlayerBoard />
                </RightBoard>
            </GridWrap>
        </>
    )
}

export default PlayerTurn