<<<<<<< HEAD
import React from 'react'

const ChampDisplay = ({ champ_name, img }) => {
    return(
        <>
            <h4>{champ_name}</h4>
            <img src={img} />
        </>
    )
}

=======
import React from 'react'

const ChampDisplay = ({ champ_name, img }) => {

    return(
        <>
            <h2>{champ_name}</h2>
            <img src={img} />
        </>
    )
}

>>>>>>> 564294359966e2e6f56c21b41de352c7ec18416c
export default ChampDisplay