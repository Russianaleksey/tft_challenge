import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassDisplay from './Components/ClassDisplay'
const App = () => {
  const classes = [
    {
      "name" : "Demon",
      "champions" : [
        {
          "champ_name" : "Evelynn",
          "img" : "https://www.mobafire.com/images/avatars/evelynn-classic.png"
        },
        {
          "champ_name" : "Aatrox",
          "img" : "https://www.mobafire.com/images/avatars/aatrox-classic.png"
        },
        {
          "champ_name" : "Brand",
          "img" : "https://www.mobafire.com/images/avatars/brand-classic.png"
        },
        {
          "champ_name" : "Varus",
          "img" : "https://www.mobafire.com/images/avatars/varus-classic.png"
        },
        {
          "champ_name" : "Elise",
          "img" : "https://www.mobafire.com/images/avatars/elise-classic.png"
        },
        {
          "champ_name" : "Swain",
          "img" : "https://www.mobafire.com/images/avatars/swain-classic.png"
        },
      ]
    }
  ]
  return (
    <div>
      <h1>TFT BATTLE</h1>
      <ClassDisplay classes={classes}/>
    </div>
  );
}

export default App;
