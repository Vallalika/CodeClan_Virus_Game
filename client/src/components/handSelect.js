import React from "react";

const HandSelect = ({playerOneHand, onHandSelectedCard,add_organ}) => {
    const handleChange = function(event) {
        debugger
        const chosenCard = playerOneHand[event.target.value]
        onHandSelectedCard(chosenCard)
        add_organ(chosenCard)
    }

    const cardOptions = playerOneHand.map((card, index) => {
        return <option value = {index} key ={index}>{card.color} {card.type} {card.name}</option>

    })

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose your card</option>
            {cardOptions}
        </select>
    )
}

export default HandSelect