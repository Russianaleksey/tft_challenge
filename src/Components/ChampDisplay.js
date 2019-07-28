
import React from 'react'

const ChampDisplay = ({ champ_name, img, origin, champ_class, tier }) => {
    return (
        <div className={"champ-display"}>
            <div id="carddiv" className="card" onClick={(id) => classToggle(id)}>
                <div className="champ-card-back champ-card">Back</div>
                <div className="champ-card-image champ-card">Front</div>
            </div>
        </div>
    )
}


function classToggle(element) {
    console.log(document.getElementById(element));
    if(document.getElementById(element).className == "card") {
        document.getElementById(element).className = "card is-flipped";
    }
    else {
        document.getElementById(element).className = "card";
    }
}

export default ChampDisplay