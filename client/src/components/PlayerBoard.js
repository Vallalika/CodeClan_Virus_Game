import React, { useEffect } from "react";
import styled from "styled-components";
import BoardCard from "./BoardCard";

const ListStyle = styled.ul `
list-style-type: none;
padding-left: 0;
display: flex;
justify-content: space-between;
`
const ItemStyle = styled.li `
display: inline-block;
`



const PlayerBoard = ({playerBoardArray}) => {

    const displayBoard = () => {

        console.log("tag",playerBoardArray)

            const displayArrayOne = playerBoardArray.map ((card) => {
                
                return <ItemStyle>  <BoardCard key = {card._id} card = {card}></BoardCard> </ItemStyle> 
            })
            return displayArrayOne
    }


    return (
        <>
        <ListStyle>
                { displayBoard() }
            </ListStyle>
            
        </>
    )
}

export default PlayerBoard

