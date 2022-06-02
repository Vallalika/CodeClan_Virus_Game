const WinnerPage = function ({name}) {
    return (
        <div id="winnerPageContent">
            <h1>Congratulations {name} has won the game</h1>
            <img src="./winner_cup.gif" alt="Winner cup" id="cup"/>
        </div>
    )
}

export default WinnerPage