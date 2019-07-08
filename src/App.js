import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ClassDisplay from './Components/ClassDisplay'
import ChampDisplay from './Components/ChampDisplay'
const App = () => {

  const [champs, setChamps] = useState([])

  const champlist = [
    {
      "champ_name": "Darius",
      "img": "",
      "origin": ["Imperial"],
      "class": ["Knight"],
      "tier": 1
    },
    {
      "champ_name": "Fiora",
      "img": "",
      "origin": ["Noble"],
      "class": ["Blademaster"],
      "tier": 1
    },
    {
      "champ_name": "Garen",
      "img": "",
      "origin": ["Noble"],
      "class": ["Knight"],
      "tier": 1
    },
    {
      "champ_name": "Graves",
      "img": "",
      "origin": ["Pirate"],
      "class": ["Gunslinger"],
      "tier": 1
    },
    {
      "champ_name": "Kassadin",
      "img": "",
      "origin": ["Void"],
      "class": ["Sorcerer"],
      "tier": 1
    },
    {
      "champ_name": "Kha'Zix",
      "img": "",
      "origin": ["Void"],
      "class": ["Assassin"],
      "tier": 1
    },
    {
      "champ_name": "Mordekaiser",
      "img": "",
      "origin": ["Phantom"],
      "class": ["Knight"],
      "tier": 1
    },
    {
      "champ_name": "Nidalee",
      "img": "",
      "origin": ["Wild"],
      "class": ["Shapeshifter"],
      "tier": 1
    },
    {
      "champ_name": "Tristana",
      "img": "",
      "origin": ["Yordle"],
      "class": ["Gunslinger"],
      "tier": 1
    },
    {
      "champ_name": "Vayne",
      "img": "",
      "origin": ["Noble"],
      "class": ["Ranger"],
      "tier": 1
    },
    {
      "champ_name": "Warwick",
      "img": "",
      "origin": ["Wild"],
      "class": ["Brawler"],
      "tier": 1
    },
  ]

  const classes = [
    {
      "name": "Demon",
      "champions": [
        {
          "champ_name": "Evelynn",
          "img": "https://www.mobafire.com/images/avatars/evelynn-classic.png"
        },
        {
          "champ_name": "Aatrox",
          "img": "https://www.mobafire.com/images/avatars/aatrox-classic.png"
        },
        {
          "champ_name": "Brand",
          "img": "https://www.mobafire.com/images/avatars/brand-classic.png"
        },
        {
          "champ_name": "Varus",
          "img": "https://www.mobafire.com/images/avatars/varus-classic.png"
        },
        {
          "champ_name": "Elise",
          "img": "https://www.mobafire.com/images/avatars/elise-classic.png"
        },
        {
          "champ_name": "Swain",
          "img": "https://www.mobafire.com/images/avatars/swain-classic.png"
        },
      ]
    },
    {
      "name": "Dragon",
      "champions": [
        {
          "champ_name": "Aurelion Sol",
          "img": "https://www.mobafire.com/images/avatars/aurelion-sol-classic.png"
        },
        {
          "champ_name": "Shyvana",
          "img": "https://www.mobafire.com/images/avatars/shyvana-classic.png"
        },
      ]
    },
    {
      "name": "Exile",
      "champions": [
        {
          "champ_name": "Yasuo",
          "img": "https://www.mobafire.com/images/avatars/yasuo-classic.png"
        },
      ]
    },
    {
      "name": "Glacial",
      "champions": [
        {
          "champ_name": "Anivia",
          "img": "https://www.mobafire.com/images/avatars/anivia-classic.png"
        },
        {
          "champ_name": "Ashe",
          "img": "https://www.mobafire.com/images/avatars/ashe-classic.png"
        },
        {
          "champ_name": "Braum",
          "img": "https://www.mobafire.com/images/avatars/braum-classic.png"
        },
        {
          "champ_name": "Lissandra",
          "img": "https://www.mobafire.com/images/avatars/lissandra-classic.png"
        },
        {
          "champ_name": "Sejuani",
          "img": "https://www.mobafire.com/images/avatars/sejuani-classic.png"
        },
        {
          "champ_name": "Volibear",
          "img": "https://www.mobafire.com/images/avatars/volibear-classic.png"
        },
      ]
    },
    {
      "name": "Imperial",
      "champions": [
        {
          "champ_name": "Darius",
          "img": "https://www.mobafire.com/images/avatars/darius-classic.png"
        },
        {
          "champ_name": "Draven",
          "img": "https://www.mobafire.com/images/avatars/draven-classic.png"
        },
        {
          "champ_name": "Katarina",
          "img": "https://www.mobafire.com/images/avatars/katarina-classic.png"
        },
        {
          "champ_name": "Swain",
          "img": "https://www.mobafire.com/images/avatars/swain-classic.png"
        },
      ]
    },
    {
      "name": "Ninja",
      "champions": [
        {
          "champ_name": "Akali",
          "img": "https://www.mobafire.com/images/avatars/akali-classic.png"
        },
        {
          "champ_name": "Kennen",
          "img": "https://www.mobafire.com/images/avatars/kennen-classic.png"
        },
        {
          "champ_name": "Shen",
          "img": "https://www.mobafire.com/images/avatars/shen-classic.png"
        },
        {
          "champ_name": "Zed",
          "img": "https://www.mobafire.com/images/avatars/zed-classic.png"
        },
      ]
    },
    {
      "name": "Noble",
      "champions": [
        {
          "champ_name": "Fiora",
          "img": "https://www.mobafire.com/images/avatars/fiora-classic.png"
        },
        {
          "champ_name": "Garen",
          "img": "https://www.mobafire.com/images/avatars/garen-classic.png"
        },
        {
          "champ_name": "Kayle",
          "img": "https://www.mobafire.com/images/avatars/kayle-classic.png"
        },
        {
          "champ_name": "Leona",
          "img": "https://www.mobafire.com/images/avatars/leona-classic.png"
        },
        {
          "champ_name": "Lucian",
          "img": "https://www.mobafire.com/images/avatars/lucian-classic.png"
        },
        {
          "champ_name": "Vayne",
          "img": "https://www.mobafire.com/images/avatars/vayne-classic.png"
        },
      ]
    },
    {
      "name": "Noble",
      "champions": [
        {
          "champ_name": "Fiora",
          "img": "https://www.mobafire.com/images/avatars/fiora-classic.png"
        },
        {
          "champ_name": "Garen",
          "img": "https://www.mobafire.com/images/avatars/garen-classic.png"
        },
        {
          "champ_name": "Kayle",
          "img": "https://www.mobafire.com/images/avatars/kayle-classic.png"
        },
        {
          "champ_name": "Leona",
          "img": "https://www.mobafire.com/images/avatars/leona-classic.png"
        },
        {
          "champ_name": "Lucian",
          "img": "https://www.mobafire.com/images/avatars/lucian-classic.png"
        },
        {
          "champ_name": "Vayne",
          "img": "https://www.mobafire.com/images/avatars/vayne-classic.png"
        },
      ]
    },
    {
      "name": "Phantom",
      "champions": [
        {
          "champ_name": "Karthus",
          "img": "https://www.mobafire.com/images/avatars/karthus-classic.png"
        },
        {
          "champ_name": "Kindred",
          "img": "https://www.mobafire.com/images/avatars/kindred-classic.png"
        },
        {
          "champ_name": "Mordekaiser",
          "img": "https://www.mobafire.com/images/avatars/mordekaiser-classic.png"
        },
      ]
    },
    {
      "name": "Pirate",
      "champions": [
        {
          "champ_name": "Gangplank",
          "img": "https://www.mobafire.com/images/avatars/gangplank-classic.png"
        },
        {
          "champ_name": "Graves",
          "img": "https://www.mobafire.com/images/avatars/graves-classic.png"
        },
        {
          "champ_name": "Miss Fortune",
          "img": "https://www.mobafire.com/images/avatars/miss-fortune-classic.png"
        },
        {
          "champ_name": "Pyke",
          "img": "https://www.mobafire.com/images/avatars/pyke-classic.png"
        },
      ]
    },
    {
      "name": "Robot",
      "champions": [
        {
          "champ_name": "Blitzcrank",
          "img": "https://www.mobafire.com/images/avatars/blitzcrank-classic.png"
        },
      ]
    },
    {
      "name": "Void",
      "champions": [
        {
          "champ_name": "Cho Gath",
          "img": "https://www.mobafire.com/images/avatars/chogath-classic.png"
        },
        {
          "champ_name": "Kassadin",
          "img": "https://www.mobafire.com/images/avatars/kassadin-classic.png"
        },
        {
          "champ_name": "Kha'Zix",
          "img": "https://www.mobafire.com/images/avatars/khazix-classic.png"
        },
        {
          "champ_name": "Rek'Sai",
          "img": "https://www.mobafire.com/images/avatars/reksai-classic.png"
        },
      ]
    },
    {
      "name": "Wild",
      "champions": [
        {
          "champ_name": "Ahri",
          "img": "https://www.mobafire.com/images/avatars/ahri-classic.png"
        },
        {
          "champ_name": "Gnar",
          "img": "https://www.mobafire.com/images/avatars/gnar-classic.png"
        },
        {
          "champ_name": "Nidalee",
          "img": "https://www.mobafire.com/images/avatars/nidalee-classic.png"
        },
        {
          "champ_name": "Rengar",
          "img": "https://www.mobafire.com/images/avatars/rengar-classic.png"
        },
        {
          "champ_name": "Warwick",
          "img": "https://www.mobafire.com/images/avatars/warwick-classic.png"
        },
      ]
    },
    {
      "name": "Yordle",
      "champions": [
        {
          "champ_name": "Gnar",
          "img": "https://www.mobafire.com/images/avatars/gnar-classic.png"
        },
        {
          "champ_name": "Kennen",
          "img": "https://www.mobafire.com/images/avatars/kennen-classic.png"
        },
        {
          "champ_name": "Lulu",
          "img": "https://www.mobafire.com/images/avatars/lulu-classic.png"
        },
        {
          "champ_name": "Poppy",
          "img": "https://www.mobafire.com/images/avatars/poppy-classic.png"
        },
        {
          "champ_name": "Tristana",
          "img": "https://www.mobafire.com/images/avatars/tristana-classic.png"
        },
        {
          "champ_name": "Veigar",
          "img": "https://www.mobafire.com/images/avatars/veigar-classic.png"
        },
      ]
    },
    {
      "name": "Assassin",
      "champions": [
        {
          "champ_name": "Akali",
          "img": "https://www.mobafire.com/images/avatars/Akali-classic.png"
        },
        {
          "champ_name": "Evelynn",
          "img": "https://www.mobafire.com/images/avatars/evelynn-classic.png"
        },
        {
          "champ_name": "Katarina",
          "img": "https://www.mobafire.com/images/avatars/katarina-classic.png"
        },
        {
          "champ_name": "Kha'Zix",
          "img": "https://www.mobafire.com/images/avatars/khazix-classic.png"
        },
        {
          "champ_name": "Pyke",
          "img": "https://www.mobafire.com/images/avatars/pyke-classic.png"
        },
        {
          "champ_name": "Rengar",
          "img": "https://www.mobafire.com/images/avatars/rengar-classic.png"
        },
        {
          "champ_name": "Zed",
          "img": "https://www.mobafire.com/images/avatars/zed-classic.png"
        },
      ]
    },
    {
      "name": "Blademaster",
      "champions": [
        {
          "champ_name": "Aatrox",
          "img": "https://www.mobafire.com/images/avatars/aatrox-classic.png"
        },
        {
          "champ_name": "Draven",
          "img": "https://www.mobafire.com/images/avatars/draven-classic.png"
        },
        {
          "champ_name": "Fiora",
          "img": "https://www.mobafire.com/images/avatars/fiora-classic.png"
        },
        {
          "champ_name": "Gangplank",
          "img": "https://www.mobafire.com/images/avatars/gangplank-classic.png"
        },
        {
          "champ_name": "Shen",
          "img": "https://www.mobafire.com/images/avatars/shen-classic.png"
        },
        {
          "champ_name": "Yasuo",
          "img": "https://www.mobafire.com/images/avatars/yasuo-classic.png"
        },
      ]
    },
    {
      "name": "Brawler",
      "champions": [
        {
          "champ_name": "Blitzcrank",
          "img": "https://www.mobafire.com/images/avatars/blitzcrank-classic.png"
        },
        {
          "champ_name": "Cho'Gath",
          "img": "https://www.mobafire.com/images/avatars/chogath-classic.png"
        },
        {
          "champ_name": "Rek'Sai",
          "img": "https://www.mobafire.com/images/avatars/reksai-classic.png"
        },
        {
          "champ_name": "Volibear",
          "img": "https://www.mobafire.com/images/avatars/volibear-classic.png"
        },
        {
          "champ_name": "Warwick",
          "img": "https://www.mobafire.com/images/avatars/warwick-classic.png"
        },
      ]
    },
    {
      "name": "Elementalist",
      "champions": [
        {
          "champ_name": "Anivia",
          "img": "https://www.mobafire.com/images/avatars/anivia-classic.png"
        },
        {
          "champ_name": "Brand",
          "img": "https://www.mobafire.com/images/avatars/brand-classic.png"
        },
        {
          "champ_name": "Kennen",
          "img": "https://www.mobafire.com/images/avatars/kennen-classic.png"
        },
        {
          "champ_name": "Lissandra",
          "img": "https://www.mobafire.com/images/avatars/lissandra-classic.png"
        },
      ]
    },
    {
      "name": "Guardian",
      "champions": [
        {
          "champ_name": "Braum",
          "img": "https://www.mobafire.com/images/avatars/braum-classic.png"
        },
        {
          "champ_name": "Leona",
          "img": "https://www.mobafire.com/images/avatars/leona-classic.png"
        },
      ]
    },
    {
      "name": "Gunslinger",
      "champions": [
        {
          "champ_name": "Gangplank",
          "img": "https://www.mobafire.com/images/avatars/gangplank-classic.png"
        },
        {
          "champ_name": "Graves",
          "img": "https://www.mobafire.com/images/avatars/graves-classic.png"
        },
        {
          "champ_name": "Lucian",
          "img": "https://www.mobafire.com/images/avatars/lucian-classic.png"
        },
        {
          "champ_name": "Miss Fortune",
          "img": "https://www.mobafire.com/images/avatars/miss-fortune-classic.png"
        },
        {
          "champ_name": "Tristana",
          "img": "https://www.mobafire.com/images/avatars/tristana-classic.png"
        },
      ]
    },
    {
      "name": "Knight",
      "champions": [
        {
          "champ_name": "Darius",
          "img": "https://www.mobafire.com/images/avatars/darius-classic.png"
        },
        {
          "champ_name": "Garen",
          "img": "https://www.mobafire.com/images/avatars/garen-classic.png"
        },
        {
          "champ_name": "Kayle",
          "img": "https://www.mobafire.com/images/avatars/lucian-classic.png"
        },
        {
          "champ_name": "Mordekaiser",
          "img": "https://www.mobafire.com/images/avatars/mordekaiser-classic.png"
        },
        {
          "champ_name": "Poppy",
          "img": "https://www.mobafire.com/images/avatars/poppy-classic.png"
        },
        {
          "champ_name": "Sejuani",
          "img": "https://www.mobafire.com/images/avatars/sejuani-classic.png"
        },
      ]
    },
    {
      "name": "Ranger",
      "champions": [
        {
          "champ_name": "Ashe",
          "img": "https://www.mobafire.com/images/avatars/ashe-classic.png"
        },
        {
          "champ_name": "Kindred",
          "img": "https://www.mobafire.com/images/avatars/kindred-classic.png"
        },
        {
          "champ_name": "Varus",
          "img": "https://www.mobafire.com/images/avatars/varus-classic.png"
        },
        {
          "champ_name": "Vayne",
          "img": "https://www.mobafire.com/images/avatars/vayne-classic.png"
        },
      ]
    },
    {
      "name": "Shapeshifter",
      "champions": [
        {
          "champ_name": "Elise",
          "img": "https://www.mobafire.com/images/avatars/elise-classic.png"
        },
        {
          "champ_name": "Gnar",
          "img": "https://www.mobafire.com/images/avatars/gnar-classic.png"
        },
        {
          "champ_name": "Nidalee",
          "img": "https://www.mobafire.com/images/avatars/nidalee-classic.png"
        },
        {
          "champ_name": "Shyvana",
          "img": "https://www.mobafire.com/images/avatars/shyvana-classic.png"
        },
        {
          "champ_name": "Swain",
          "img": "https://www.mobafire.com/images/avatars/swain-classic.png"
        },
      ]
    },
    {
      "name": "Sorcerer",
      "champions": [
        {
          "champ_name": "Ahri",
          "img": "https://www.mobafire.com/images/avatars/ahri-classic.png"
        },
        {
          "champ_name": "Aurelion Sol",
          "img": "https://www.mobafire.com/images/avatars/aurelion-sol-classic.png"
        },
        {
          "champ_name": "Karthus",
          "img": "https://www.mobafire.com/images/avatars/karthus-classic.png"
        },
        {
          "champ_name": "Kassadin",
          "img": "https://www.mobafire.com/images/avatars/kassadin-classic.png"
        },
        {
          "champ_name": "Lulu",
          "img": "https://www.mobafire.com/images/avatars/lulu-classic.png"
        },
        {
          "champ_name": "Morgana",
          "img": "https://www.mobafire.com/images/avatars/morgana-classic.png"
        },
        {
          "champ_name": "Veigar",
          "img": "https://www.mobafire.com/images/avatars/veigar-classic.png"
        },
      ]
    },
  ]

  const selectRandom = () => {
    let holdArr = []
    setChamps([null])
    for (let i = 0; i < 7; i++) {
      let randClass = Math.floor(Math.random() * Math.floor(classes.length))
      let randChamp = Math.floor(Math.random() * Math.floor(classes[randClass].champions.length))
      let resultingChamp = classes[randClass].champions[randChamp]
      if (holdArr.some(e => e.champ_name === resultingChamp.champ_name)) {
        i--;
      }
      else {
        holdArr = holdArr.concat(resultingChamp)
      }
    }
    setChamps(holdArr)
    console.log(champs)
  }

  return (
    <div>
      <h1 className="main-title">TFT BATTLE</h1>
      <div className="select-random-container">
        <button onClick={() => selectRandom()} className="btn select-random-btn">SELECT RANDOM</button>
      </div>
      {/* <ClassDisplay classes={classes} /> */}
      <div className="random-champ-display">
        {champs.map(({ champ_name, img }) => {
          return (
            <ChampDisplay champ_name={champ_name} img={img} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
