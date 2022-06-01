import React from "react";

const HandSelect = ({playerOneHand, playerTwoHand, onHandSelectedCard,add_organ, play_virus, play_cure, currentPlayer, checkBoard, checkHand}) => {
    const handleChange = function(event) {
        let chosenCard
        if (currentPlayer ===1){
            chosenCard = playerOneHand[event.target.value]
        } else {
            chosenCard = playerTwoHand[event.target.value]
        }
        onHandSelectedCard(chosenCard)
        add_organ(chosenCard)
        
        play_virus(chosenCard)
        
        play_cure(chosenCard)
    }

    const displayOptions = function() {
        let hand = checkHand(currentPlayer, playerOneHand, playerTwoHand)
        const cardOptions = hand.map((card, index) => {
            return <option value = {index} key ={index}>{card.color} {card.type} {card.name}</option>
        })
        return cardOptions
    }
        

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose your card</option>
            {displayOptions()}
        </select>
    )
}

export default HandSelect