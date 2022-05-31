// const organCardObject = {
//     score:0,
//     color: green,
//     name: stomach,
//     type: organ,
//     invulnerable: false
// },

// const virusCardObject = {
//     score = -1,
//     color: green,
//     type: virus
// },

// const cureCardObject = {
//     score: +1,
//     color: green,
//     type: cure
// };

// const boardArray = [//max 4 cards];

// const play_organ = (organCard) => {
//     boardArray.push(organCard)

//     // if(organCard.score>=2)
//     // console.log("Sorry, this card is protected")
// }
(player_hand.length < 3)
// const refill_hand = (deck) => {
//    do{ 
//     const index = Math.random.indexOf(deck)
//     player_hand.push(deck[index])}
// }

// const play_virus = (virusCard, player_hand) => {
//     const score = virusCard.score
//     virusCard.score += player_hand.score
// }

// const play_cure = (cureCardObject, player_hand) => {
//     cureCardObject.score += player_hand.score
// }



// const checkWin = (boardArray){
//     //Check if you have 4 organ cards
//     //Check each card object.score >= 0. If true for all 4, 
// }

// // **Winning conditions
// // **
// // A player has to have 4 healthy organs by the end of their turn.

// // **Functions**
// // check_win()
// // refill_hand() - //check if hand has at least 3 cards, if not: refill. Can be the same as initial
// // play_organ() 
// // play_virus()
// // play_cure()
// // swap_cards()
// // end_turn()
// // merge_discard_and_deck()

// // **Initial setup**
// // Each player has 4 empty organ slots.
// // 3 Cards to each player's hand.

// // **Game cycle**
// // Turn starts -> Check if player has 3 cards in hand (else refill) -> play card -> end turn -> check win -> refill hand -> Next Player's Turn (repeat till win)

