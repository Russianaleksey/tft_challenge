import React from 'react'

const ChampDisplay = ({ champ_name, img }) => {

    return(
        <>
            <h2>{champ_name}</h2>
            <img src={img} />
        </>
    )
}

export default ChampDisplay