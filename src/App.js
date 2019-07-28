import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import ClassDisplay from './Components/ClassDisplay'
import ChampDisplay from './Components/ChampDisplay'
const App = () => {

  const [champs, setChamps] = useState([])

  const champlist = [
    {
      "champ_name": "Darius",
      "img": "/images/Darius.JPG",
      "origin": ["Imperial"],
      "champ_class": ["Knight"],
      "tier": 1
    },
    {
      "champ_name": "Fiora",
      "img": "/images/Fiora.JPG",
      "origin": ["Noble"],
      "champ_class": ["Blademaster"],
      "tier": 1
    },
    {
      "champ_name": "Garen",
      "img": "/images/Garen.JPG",
      "origin": ["Noble"],
      "champ_class": ["Knight"],
      "tier": 1
    },
    {
      "champ_name": "Graves",
      "img": "/images/Graves.png",
      "origin": ["Pirate"],
      "champ_class": ["Gunslinger"],
      "tier": 1
    },
    {
      "champ_name": "Kassadin",
      "img": "/images/Kassadin.JPG",
      "origin": ["Void"],
      "champ_class": ["Sorcerer"],
      "tier": 1
    },
    {
      "champ_name": "Kha'Zix",
      "img": "/images/KhaZix.JPG",
      "origin": ["Void"],
      "champ_class": ["Assassin"],
      "tier": 1
    },
    {
      "champ_name": "Mordekaiser",
      "img": "/images/Mordekaiser.png",
      "origin": ["Phantom"],
      "champ_class": ["Knight"],
      "tier": 1
    },
    {
      "champ_name": "Nidalee",
      "img": "/images/Nidalee.JPG",
      "origin": ["Wild"],
      "champ_class": ["Shapeshifter"],
      "tier": 1
    },
    {
      "champ_name": "Tristana",
      "img": "/images/Tristana.JPG",
      "origin": ["Yordle"],
      "champ_class": ["Gunslinger"],
      "tier": 1
    },
    {
      "champ_name": "Vayne",
      "img": "/images/Vayne.JPG",
      "origin": ["Noble"],
      "champ_class": ["Ranger"],
      "tier": 1
    },
    {
      "champ_name": "Warwick",
      "img": "/images/Warwick.png",
      "origin": ["Wild"],
      "champ_class": ["Brawler"],
      "tier": 1
    },
    {
      "champ_name": "Ahri",
      "img": "/images/Ahri.JPG",
      "origin": ["Wild"],
      "champ_class": ["Sorcerer"],
      "tier": 2
    },
    {
      "champ_name": "Blitzcrank",
      "img": "/images/Blitzcrank.JPG",
      "origin": ["Robot"],
      "champ_class": ["Brawler"],
      "tier": 2
    },
    {
      "champ_name": "Braum",
      "img": "/images/Braum.JPG",
      "origin": ["Glacial"],
      "champ_class": ["Guardian"],
      "tier": 2
    },
    {
      "champ_name": "Elise",
      "img": "/images/Elise.JPG",
      "origin": ["Demon"],
      "champ_class": ["Shapeshifter"],
      "tier": 2
    },
    {
      "champ_name": "Lissandra",
      "img": "/images/Lissandra.JPG",
      "origin": ["Glacial"],
      "champ_class": ["Elementalist"],
      "tier": 2
    },
    {
      "champ_name": "Lucian",
      "img": "/images/Lucian.JPG",
      "origin": ["Noble"],
      "champ_class": ["Gunslinger"],
      "tier": 2
    },
    {
      "champ_name": "Lulu",
      "img": "/images/Lulu.JPG",
      "origin": ["Yordle"],
      "champ_class": ["Sorcerer"],
      "tier": 2
    },
    {
      "champ_name": "Pyke",
      "img": "/images/Pyke.JPG",
      "origin": ["Pirate"],
      "champ_class": ["Assassin"],
      "tier": 2
    },
    {
      "champ_name": "Rek'Sai",
      "img": "/images/RekSai.JPG",
      "origin": ["Void"],
      "champ_class": ["Brawler"],
      "tier": 2
    },
    {
      "champ_name": "Shen",
      "img": "/images/Shen.JPG",
      "origin": ["Ninja"],
      "champ_class": ["Blademaster"],
      "tier": 2
    },
    {
      "champ_name": "Varus",
      "img": "/images/Varus.JPG",
      "origin": ["Demon"],
      "champ_class": ["Ranger"],
      "tier": 2
    },
    {
      "champ_name": "Zed",
      "img": "/images/Zed.JPG",
      "origin": ["Ninja"],
      "champ_class": ["Assassin"],
      "tier": 2
    },
    {
      "champ_name": "Aatrox",
      "img": "/images/Aatrox.JPG",
      "origin": ["Demon"],
      "champ_class": ["Blademaster"],
      "tier": 3
    },
    {
      "champ_name": "Ashe",
      "img": "/images/Ashe.JPG",
      "origin": ["Glacial"],
      "champ_class": ["Ranger"],
      "tier": 3
    },
    {
      "champ_name": "Evelynn",
      "img": "/images/Evelynn.JPG",
      "origin": ["Demon"],
      "champ_class": ["Assassin"],
      "tier": 3
    },
    {
      "champ_name": "Gangplank",
      "img": "/images/Gangplank.JPG",
      "origin": ["Pirate"],
      "champ_class": ["Blademaster", "Gunslinger"],
      "tier": 3
    },
    {
      "champ_name": "Katarina",
      "img": "/images/Katarina.JPG",
      "origin": ["Imperial"],
      "champ_class": ["Assassin"],
      "tier": 3
    },
    {
      "champ_name": "Kennen",
      "img": "/images/Kennen.JPG",
      "origin": ["Ninja", "Yordle"],
      "champ_class": ["Elementalist"],
      "tier": 3
    },
    {
      "champ_name": "Morgana",
      "img": "/images/Morgana.JPG",
      "origin": ["Demon"],
      "champ_class": ["Sorcerer"],
      "tier": 3
    },
    {
      "champ_name": "Poppy",
      "img": "/images/Poppy.JPG",
      "origin": ["Yordle"],
      "champ_class": ["Knight"],
      "tier": 3
    },
    {
      "champ_name": "Rengar",
      "img": "/images/Rengar.JPG",
      "origin": ["Wild"],
      "champ_class": ["Assassin"],
      "tier": 3
    },
    {
      "champ_name": "Shyvana",
      "img": "/images/Shyvana.JPG",
      "origin": ["Dragon"],
      "champ_class": ["Shapeshifter"],
      "tier": 3
    },
    {
      "champ_name": "Veigar",
      "img": "/images/Veigar.JPG",
      "origin": ["Yordle"],
      "champ_class": ["Sorcerer"],
      "tier": 3
    },
    {
      "champ_name": "Volibear",
      "img": "/images/Volibear.JPG",
      "origin": ["Glacial"],
      "champ_class": ["Brawler"],
      "tier": 3
    },
    {
      "champ_name": "Akali",
      "img": "/images/Akali.JPG",
      "origin": ["Ninja"],
      "champ_class": ["Assassin"],
      "tier": 4
    },
    {
      "champ_name": "Aurelion Sol",
      "img": "/images/Aurelion Sol.JPG",
      "origin": ["Dragon"],
      "champ_class": ["Sorcerer"],
      "tier": 4
    },
    {
      "champ_name": "Brand",
      "img": "/images/Brand.JPG",
      "origin": ["Demon"],
      "champ_class": ["Elementalist"],
      "tier": 4
    },
    {
      "champ_name": "Cho'Gath",
      "img": "/images/ChoGath.JPG",
      "origin": ["Void"],
      "champ_class": ["Brawler"],
      "tier": 4
    },
    {
      "champ_name": "Draven",
      "img": "/images/Draven.JPG",
      "origin": ["Imperial"],
      "champ_class": ["Blademaster"],
      "tier": 4
    },
    {
      "champ_name": "Gnar",
      "img": "/images/Gnar.JPG",
      "origin": ["Wild", "Yordle"],
      "champ_class": ["Shapeshifter"],
      "tier": 4
    },
    {
      "champ_name": "Kindred",
      "img": "/images/Kindred.JPG",
      "origin": ["Phantom"],
      "champ_class": ["Ranger"],
      "tier": 4
    },
    {
      "champ_name": "Leona",
      "img": "/images/Leona.JPG",
      "origin": ["Noble"],
      "champ_class": ["Guardian"],
      "tier": 4
    },
    {
      "champ_name": "Sejuani",
      "img": "/images/Sejuani.JPG",
      "origin": ["Glacial"],
      "champ_class": ["Knight"],
      "tier": 4
    },
    {
      "champ_name": "Anivia",
      "img": "/images/Anivia.JPG",
      "origin": ["Glacial"],
      "champ_class": ["Elementalist"],
      "tier": 5
    },
    {
      "champ_name": "Karthus",
      "img": "/images/Karthus.JPG",
      "origin": ["Phantom"],
      "champ_class": ["Sorcerer"],
      "tier": 5
    },
    {
      "champ_name": "Kayle",
      "img": "/images/Kayle.JPG",
      "origin": ["Noble"],
      "champ_class": ["Knight"],
      "tier": 5
    },
    {
      "champ_name": "Miss Fortune",
      "img": "/images/Miss Fortune.JPG",
      "origin": ["Pirate"],
      "champ_class": ["Gunslinger"],
      "tier": 5
    },
    {
      "champ_name": "Swain",
      "img": "/images/Swain.JPG",
      "origin": ["Imperial", "Demon"],
      "champ_class": ["Shapeshifter"],
      "tier": 5
    },
    {
      "champ_name": "Yasuo",
      "img": "/images/Yasuo.JPG",
      "origin": ["Exile"],
      "champ_class": ["Blademaster"],
      "tier": 5
    }
  ]

  const selectRandom = () => {
    let holdArr = []
    setChamps([null])
    for (let i = 0; i < 7; i++) {
      let randChamp = Math.floor(Math.random() * Math.floor(champlist.length))
      let resultingChamp = champlist[randChamp]
      if (holdArr.some(e => e.champ_name === resultingChamp.champ_name)) {
        i--;
      }
      else {
        holdArr = holdArr.concat(resultingChamp)
      }
    }
    setChamps(holdArr)
  }

  const popupFunction = () => {
    let popup1 = document.getElementById("myPopup");
    popup1.classList.toggle("show");
  }


  return (
    <div className="main-container">
      <h1 className="main-title">TFT BATTLE</h1>
      <div class="popup1" onClick={() => popupFunction()}>RULES
        <span class="popuptext" id="myPopup">Challenge rules:
To take the challenge, follow these steps:
1: Select the number of champions you want to have at the end of the game.
2: Roll/reroll your champions.
3: Play some TFT!
4: If you win (4th or higher) using the exact comp from your MOST RECENT ROLL, click "Roll Complete". If your most recent completed match had the comp from the most recent roll, you will be awarded points based on your placement in the match! Get as many points as you can to top the leaderboards!</span>
      </div>
      <div className="select-random-container">
        <button onClick={() => selectRandom()} className="btn select-random-btn">SELECT RANDOM</button>
      </div>
      {/* <ClassDisplay classes={classes} /> */}
      <div className="champ-display-container">
        {champs.map(({ champ_name, img, origin, champ_class, tier }) => {
          return (
            <ChampDisplay champ_name={champ_name} img={img} origin={origin} champ_class={champ_class} tier={tier} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
