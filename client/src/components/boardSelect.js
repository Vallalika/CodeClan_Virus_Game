import React from "react";

const BoardSelect = ({playerOneHand, playerTwoBoardArray, onCardSelected}) => {
    const handleChange = function(event) {
        const chosenCard = playerTwoBoardArray[event.target.value]
        onCardSelected(chosenCard)
    }

    const cardOptions = playerTwoBoardArray.map((card, index) => {
        return <option value = {index} key ={index}>{card} </option>

    })

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose a target</option>
            {cardOptions}
        </select>
    )
}

export default BoardSelect