import React from "react";

const HandSelect = ({playerOneHand, onHandSelectedCard,add_organ, play_virus}) => {
    const handleChange = function(event) {
        const chosenCard = playerOneHand[event.target.value]
        onHandSelectedCard(chosenCard)
        add_organ(chosenCard)
        console.log("before")
        play_virus(chosenCard)
        console.log("after")
        
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