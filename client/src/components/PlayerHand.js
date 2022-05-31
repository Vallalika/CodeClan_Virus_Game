import React from "react"
import Card from "./Card"
import styled from 'styled-components'


const ListStyle = styled.ul `
list-style-type: none;
padding-left: 0;
display: flex;
justify-content: space-between;
`
const ItemStyle = styled.li `
display: inline-block;
`


const PlayerHand = ({playerOneHand, playerTwoHand, setPlayerOneHand, setPlayerTwoHand, currentPlayer}) => {
    
    const displayHand = () => {
        console.log("displayHand executing before if")
        if (currentPlayer === 1) {
            console.log("within if")
            const displayArrayOne = playerOneHand.map ((card) => {
            return <ItemStyle> <Card key = {card._id} card = {card} /> </ItemStyle>
            })
            return displayArrayOne
        } else {
            console.log("Player number 2")
            const displayArrayTwo = playerTwoHand.map ((card,index) => {
                return <ItemStyle> <Card key = {card._id} card = {card} /> </ItemStyle>
                })
                return displayArrayTwo
        }
    }

    return (
        <>
            <ListStyle>
                { displayHand() }
            </ListStyle>
        </>
    )
    }

export default PlayerHand