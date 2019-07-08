<<<<<<< HEAD
import React from 'react'
import ChampDisplay from './ChampDisplay'
const ClassDisplay = ({ classes }) => {
    

    return (
        <div>
            {classes.map(({ name, champions }) => {
                return(
                    <h2>
                        {name}
                        {champions.map(({ champ_name, img }) => <ChampDisplay champ_name={champ_name} img={img} />)}
                    </h2>
                )
            })}
        </div>
    )
}

=======
import React from 'react'
import ChampDisplay from './ChampDisplay'
const ClassDisplay = ({ classes }) => {
    

    return (
        <div>
            {classes.map(({ name, champions }) => {
                return(
                    <h2>
                        {name}
                        {champions.map(({ champ_name, img }) => <ChampDisplay champ_name={champ_name} img={img} />)}
                    </h2>
                )
            })}
        </div>
    )
}

>>>>>>> 564294359966e2e6f56c21b41de352c7ec18416c
export default ClassDisplay