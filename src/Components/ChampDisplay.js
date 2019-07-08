import React from 'react'

const ChampDisplay = ({ champ_name, img }) => {
    return(
        <>
            <h4>{champ_name}</h4>
            <img src={img} />
        </>
    )
}

export default ChampDisplay