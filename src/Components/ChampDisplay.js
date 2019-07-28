
import React from 'react'

const ChampDisplay = ({ champ_name, img, origin, champ_class, tier }) => {
    return (
        <div className={"champ-display"}>
            <div id={champ_name} className="card" onClick={() => classToggle(champ_name)}>
                <img className="champ-card-back champ-card" src={"https://i.pinimg.com/originals/fd/0c/b9/fd0cb97ac9aaa1341195b1c4ab58fb6f.png"}/>
                <img className="champ-card-image champ-card" src={img}/>
            </div>
        </div>
    )
}

function classToggle(element) {
    if(document.getElementById(element).className == "card") {
        document.getElementById(element).className = "card is-flipped";
    }
    else {
        document.getElementById(element).className = "card";
    }
}

export default ChampDisplay