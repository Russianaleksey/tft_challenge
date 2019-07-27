
import React from 'react'

const ChampDisplay = ({ champ_name, img, origin, champ_class, tier }) => {
    return (
        <div className={`champ-display champ_tier_${tier}`}>
            <h4>{champ_name}</h4>
            <img className="champ-card-image" src={img} alt="error" />
            {origin.map(e => <h4>{e}</h4>)}
            {champ_class.map(e => <h4>{e}</h4>)}
            <h4>{tier}</h4>
        </div>
    )
}

export default ChampDisplay