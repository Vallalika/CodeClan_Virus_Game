import React from "react";

const HandCard = ({card}) => {


    return (
        <>
            <h3> {card.color} {card.type} </h3>
            <img src={card["img_url"]} id="card-image" ></img>

        </>
    )
}

export default HandCard