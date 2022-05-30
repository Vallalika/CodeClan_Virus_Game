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

const PlayerHand = ({playerOneHand, playerTwoHand,setPlayerOneHand, setPlayerTwoHand}) => {

    return (
        <>
            <h3> Player Hand component </h3>
            <ListStyle>
                <ItemStyle><Card> Card 1 </Card></ItemStyle>
                <ItemStyle><Card> Card 2 </Card></ItemStyle>
                <ItemStyle><Card> Card 3 </Card></ItemStyle>
            </ListStyle>
        </>
    )
}

export default PlayerHand