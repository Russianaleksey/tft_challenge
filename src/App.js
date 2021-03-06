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
      "img": "https://www.mobafire.com/images/avatars/darius-classic.png",
      "origin": ["Imperial"],
      "champ_class": ["Knight"],
      "tier": 1
    },
    {
      "champ_name": "Fiora",
      "img": "https://www.mobafire.com/images/avatars/fiora-classic.png",
      "origin": ["Noble"],
      "champ_class": ["Blademaster"],
      "tier": 1
    },
    {
      "champ_name": "Garen",
      "img": "https://www.mobafire.com/images/avatars/garen-classic.png",
      "origin": ["Noble"],
      "champ_class": ["Knight"],
      "tier": 1
    },
    {
      "champ_name": "Graves",
      "img": "https://www.mobafire.com/images/avatars/graves-classic.png",
      "origin": ["Pirate"],
      "champ_class": ["Gunslinger"],
      "tier": 1
    },
    {
      "champ_name": "Kassadin",
      "img": "https://www.mobafire.com/images/avatars/kassadin-classic.png",
      "origin": ["Void"],
      "champ_class": ["Sorcerer"],
      "tier": 1
    },
    {
      "champ_name": "Kha'Zix",
      "img": "https://www.mobafire.com/images/avatars/khazix-classic.png",
      "origin": ["Void"],
      "champ_class": ["Assassin"],
      "tier": 1
    },
    {
      "champ_name": "Mordekaiser",
      "img": "https://www.mobafire.com/images/avatars/mordekaiser-classic.png",
      "origin": ["Phantom"],
      "champ_class": ["Knight"],
      "tier": 1
    },
    {
      "champ_name": "Nidalee",
      "img": "https://www.mobafire.com/images/avatars/nidalee-classic.png",
      "origin": ["Wild"],
      "champ_class": ["Shapeshifter"],
      "tier": 1
    },
    {
      "champ_name": "Tristana",
      "img": "https://www.mobafire.com/images/avatars/tristana-classic.png",
      "origin": ["Yordle"],
      "champ_class": ["Gunslinger"],
      "tier": 1
    },
    {
      "champ_name": "Vayne",
      "img": "https://www.mobafire.com/images/avatars/vayne-classic.png",
      "origin": ["Noble"],
      "champ_class": ["Ranger"],
      "tier": 1
    },
    {
      "champ_name": "Warwick",
      "img": "https://www.mobafire.com/images/avatars/warwick-classic.png",
      "origin": ["Wild"],
      "champ_class": ["Brawler"],
      "tier": 1
    },
    {
      "champ_name": "Ahri",
      "img": "https://www.mobafire.com/images/avatars/ahri-classic.png",
      "origin": ["Wild"],
      "champ_class": ["Sorcerer"],
      "tier": 2
    },
    {
      "champ_name": "Blitzcrank",
      "img": "https://www.mobafire.com/images/avatars/blitzcrank-classic.png",
      "origin": ["Robot"],
      "champ_class": ["Brawler"],
      "tier": 2
    },
    {
      "champ_name": "Braum",
      "img": "https://www.mobafire.com/images/avatars/braum-classic.png",
      "origin": ["Glacial"],
      "champ_class": ["Guardian"],
      "tier": 2
    },
    {
      "champ_name": "Elise",
      "img": "https://www.mobafire.com/images/avatars/elise-classic.png",
      "origin": ["Demon"],
      "champ_class": ["Shapeshifter"],
      "tier": 2
    },
    {
      "champ_name": "Lissandra",
      "img": "https://www.mobafire.com/images/avatars/lissandra-classic.png",
      "origin": ["Glacial"],
      "champ_class": ["Elementalist"],
      "tier": 2
    },
    {
      "champ_name": "Lucian",
      "img": "https://www.mobafire.com/images/avatars/lucian-classic.png",
      "origin": ["Noble"],
      "champ_class": ["Gunslinger"],
      "tier": 2
    },
    {
      "champ_name": "Lulu",
      "img": "https://www.mobafire.com/images/avatars/lulu-classic.png",
      "origin": ["Yordle"],
      "champ_class": ["Sorcerer"],
      "tier": 2
    },
    {
      "champ_name": "Pyke",
      "img": "https://www.mobafire.com/images/avatars/pyke-classic.png",
      "origin": ["Pirate"],
      "champ_class": ["Assassin"],
      "tier": 2
    },
    {
      "champ_name": "Rek'Sai",
      "img": "https://www.mobafire.com/images/avatars/reksai-classic.png",
      "origin": ["Void"],
      "champ_class": ["Brawler"],
      "tier": 2
    },
    {
      "champ_name": "Shen",
      "img": "https://www.mobafire.com/images/avatars/shen-classic.png",
      "origin": ["Ninja"],
      "champ_class": ["Blademaster"],
      "tier": 2
    },
    {
      "champ_name": "Varus",
      "img": "https://www.mobafire.com/images/avatars/varus-classic.png",
      "origin": ["Demon"],
      "champ_class": ["Ranger"],
      "tier": 2
    },
    {
      "champ_name": "Zed",
      "img": "https://www.mobafire.com/images/avatars/zed-classic.png",
      "origin": ["Ninja"],
      "champ_class": ["Assassin"],
      "tier": 2
    },
    {
      "champ_name": "Aatrox",
      "img": "https://www.mobafire.com/images/avatars/aatrox-classic.png",
      "origin": ["Demon"],
      "champ_class": ["Blademaster"],
      "tier": 3
    },
    {
      "champ_name": "Ashe",
      "img": "https://www.mobafire.com/images/avatars/ashe-classic.png",
      "origin": ["Glacial"],
      "champ_class": ["Ranger"],
      "tier": 3
    },
    {
      "champ_name": "Evelynn",
      "img": "https://www.mobafire.com/images/avatars/evelynn-classic.png",
      "origin": ["Demon"],
      "champ_class": ["Assassin"],
      "tier": 3
    },
    {
      "champ_name": "Gangplank",
      "img": "https://www.mobafire.com/images/avatars/gangplank-classic.png",
      "origin": ["Pirate"],
      "champ_class": ["Blademaster", "Gunslinger"],
      "tier": 3
    },
    {
      "champ_name": "Katarina",
      "img": "https://www.mobafire.com/images/avatars/katarina-classic.png",
      "origin": ["Imperial"],
      "champ_class": ["Assassin"],
      "tier": 3
    },
    {
      "champ_name": "Kennen",
      "img": "https://www.mobafire.com/images/avatars/kennen-classic.png",
      "origin": ["Ninja", "Yordle"],
      "champ_class": ["Elementalist"],
      "tier": 3
    },
    {
      "champ_name": "Morgana",
      "img": "https://www.mobafire.com/images/avatars/morgana-classic.png",
      "origin": ["Demon"],
      "champ_class": ["Sorcerer"],
      "tier": 3
    },
    {
      "champ_name": "Poppy",
      "img": "https://www.mobafire.com/images/avatars/poppy-classic.png",
      "origin": ["Yordle"],
      "champ_class": ["Knight"],
      "tier": 3
    },
    {
      "champ_name": "Rengar",
      "img": "https://www.mobafire.com/images/avatars/rengar-classic.png",
      "origin": ["Wild"],
      "champ_class": ["Assassin"],
      "tier": 3
    },
    {
      "champ_name": "Shyvana",
      "img": "https://www.mobafire.com/images/avatars/shyvana-classic.png",
      "origin": ["Dragon"],
      "champ_class": ["Shapeshifter"],
      "tier": 3
    },
    {
      "champ_name": "Veigar",
      "img": "https://www.mobafire.com/images/avatars/veigar-classic.png",
      "origin": ["Yordle"],
      "champ_class": ["Sorcerer"],
      "tier": 3
    },
    {
      "champ_name": "Volibear",
      "img": "https://www.mobafire.com/images/avatars/volibear-classic.png",
      "origin": ["Glacial"],
      "champ_class": ["Brawler"],
      "tier": 3
    },
    {
      "champ_name": "Akali",
      "img": "https://www.mobafire.com/images/avatars/akali-classic.png",
      "origin": ["Ninja"],
      "champ_class": ["Assassin"],
      "tier": 4
    },
    {
      "champ_name": "Aurelion Sol",
      "img": "https://www.mobafire.com/images/avatars/aurelion-sol-classic.png",
      "origin": ["Dragon"],
      "champ_class": ["Sorcerer"],
      "tier": 4
    },
    {
      "champ_name": "Brand",
      "img": "https://www.mobafire.com/images/avatars/brand-classic.png",
      "origin": ["Demon"],
      "champ_class": ["Elementalist"],
      "tier": 4
    },
    {
      "champ_name": "Cho'Gath",
      "img": "https://www.mobafire.com/images/avatars/chogath-classic.png",
      "origin": ["Void"],
      "champ_class": ["Brawler"],
      "tier": 4
    },
    {
      "champ_name": "Draven",
      "img": "https://www.mobafire.com/images/avatars/draven-classic.png",
      "origin": ["Imperial"],
      "champ_class": ["Blademaster"],
      "tier": 4
    },
    {
      "champ_name": "Gnar",
      "img": "https://www.mobafire.com/images/avatars/gnar-classic.png",
      "origin": ["Wild", "Yordle"],
      "champ_class": ["Shapeshifter"],
      "tier": 4
    },
    {
      "champ_name": "Kindred",
      "img": "https://www.mobafire.com/images/avatars/kindred-classic.png",
      "origin": ["Phantom"],
      "champ_class": ["Ranger"],
      "tier": 4
    },
    {
      "champ_name": "Leona",
      "img": "https://www.mobafire.com/images/avatars/leona-classic.png",
      "origin": ["Noble"],
      "champ_class": ["Guardian"],
      "tier": 4
    },
    {
      "champ_name": "Sejuani",
      "img": "https://www.mobafire.com/images/avatars/sejuani-classic.png",
      "origin": ["Glacial"],
      "champ_class": ["Knight"],
      "tier": 4
    },
    {
      "champ_name": "Anivia",
      "img": "https://www.mobafire.com/images/avatars/anivia-classic.png",
      "origin": ["Glacial"],
      "champ_class": ["Elementalist"],
      "tier": 5
    },
    {
      "champ_name": "Karthus",
      "img": "https://www.mobafire.com/images/avatars/karthus-classic.png",
      "origin": ["Phantom"],
      "champ_class": ["Sorcerer"],
      "tier": 5
    },
    {
      "champ_name": "Kayle",
      "img": "https://www.mobafire.com/images/avatars/kayle-classic.png",
      "origin": ["Noble"],
      "champ_class": ["Knight"],
      "tier": 5
    },
    {
      "champ_name": "Miss Fortune",
      "img": "https://www.mobafire.com/images/avatars/miss-fortune-classic.png",
      "origin": ["Pirate"],
      "champ_class": ["Gunslinger"],
      "tier": 5
    },
    {
      "champ_name": "Swain",
      "img": "https://www.mobafire.com/images/avatars/swain-classic.png",
      "origin": ["Imperial", "Demon"],
      "champ_class": ["Shapeshifter"],
      "tier": 5
    },
    {
      "champ_name": "Yasuo",
      "img": "https://www.mobafire.com/images/avatars/yasuo-classic.png",
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

  const showRules = () => {
    return ("hi")
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
