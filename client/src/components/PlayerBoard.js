import React, { useEffect } from "react";
import Card from "./Card";
import styled from "styled-components";

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


    // debugger
    // let displayArrayOne = []

    const displayBoard = () => {
        // debugger
        console.log("tag",playerBoardArray)

        // if(playerBoardArray.length === 0){
        //     return 
        // }
        // else{
            const displayArrayOne = playerBoardArray.map ((card) => {
                
                return <ItemStyle>  <Card key = {card._id} card = {card}></Card> </ItemStyle> 
            })
            return displayArrayOne
    }


    return (
        <>
        <ListStyle>
                { displayBoard() }
            </ListStyle>
        


            {/* <h3> {displayArrayOne} </h3> */}
            {/* <ListStyle>
             {displayArrayOne} 
            </ListStyle> */}
            
        </>
    )
}

export default PlayerBoard

