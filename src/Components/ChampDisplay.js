
import React from 'react'

const ChampDisplay = ({ champ_name, img }) => {
    return(
        <div className="champ-display">
            <h4>{champ_name}</h4>
            <img className="champ-card-image" src={img} />
        </div>
    )
}

export default ChampDisplay