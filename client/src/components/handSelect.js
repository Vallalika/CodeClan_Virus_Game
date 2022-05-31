import React from "react";

const HandSelect = ({playerOneHand, onCardSelected}) => {
    const handleChange = function(event) {
        const chosenCard = playerOneHand[event.target.value]
        onCardSelected(chosenCard)
    }

    const cardOptions = playerOneHand.map((card, index) => {
        return <option value = {index} key ={index}>{card} </option>

    })

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose your card</option>
            {cardOptions}
        </select>
    )
}

export default HandSelect