import react, { useState } from "react";
import character from './character.json';
import GameWrapper from "./components/GameWrapper";
import Navbar from "./components/NavBar";
import Instructions from "./components/Instructions";
import ImageCard from "./components/ImageCard";
import './components/game.css'


function App() { 
  const [characters, setCharacters] = useState(character);
  const [score, setScore] = useState(0);
  let [highScore, setHighScore] = useState(0);
  let [timesClicked, setTimesClicked] = useState(false)

 
  const handleClick = (id,name) => {
    suffleArray();
    handleScore(id);
    console.log(`${name}'s image clicked `)
  }

  const handleScore = (id) => {
    characters.forEach((item) => {
      if(id === item.id && item.clicked === false){
        item.clicked = true;
        setTimesClicked(false);
        setScore(score + 1);
        console.log(item.name + " " + item.clicked)
      }else if(id === item.id && item.clicked === true){
        if(score > highScore){
          setHighScore(highScore = score)
        }
        setScore(0);
        setTimesClicked(true);
        characters.forEach(item => (item.clicked = false));
        console.log(characters)
      }      
    })   
  }
 
const suffleArray = () => {
  const shuffledArray = shuffle(characters);
  setCharacters(shuffledArray);
}

  const shuffle = array => {
    console.log('images shuffled');
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;     

      while(0 !== currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        console.log(randomIndex)
        console.log(currentIndex -= 1);        

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;        
      }
      return array;
  }


  return (
    <GameWrapper>
      <Navbar 
        currentScore = {score}
        highScore = {highScore}
      />   
      <Instructions />
      <div className="images-holder">
        {characters.map(character => (
          <ImageCard    
          key={character.id}
          id={character.id}
          StateClickStatus={timesClicked}
          name={character.name}
          occupation={character.occupation}
          image={character.image}
          handleClick={handleClick}
          />
        ))}
    </div>
    


    </GameWrapper>
  );
}

export default App;
