import React from "react";

const HandSelect = ({playerOneHand, onHandSelectedCard,add_organ, play_virus, play_cure}) => {
    const handleChange = function(event) {
        const chosenCard = playerOneHand[event.target.value]
        onHandSelectedCard(chosenCard)
        add_organ(chosenCard)
        
        play_virus(chosenCard)
        
        play_cure(chosenCard)
        
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