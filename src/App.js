import { useState } from "react";
import Buttons from './Buttons.js';
import Value from './Value.js';
import Heading from './Heading.js';

function App(){
  const [points, setPoints] = useState([]);
  const [total, setTotal] = useState(0);
  const [msg, setMsg] = useState();
  const [start, setStart] = useState("Start Game");

  //setting the score to be printed

  const score = points.map( (val) =>{
    return ` -  ${val}`;
  })

  function getCard(){
    let card = Math.floor(Math.random() * 13) + 1;
    if(card === 1){
      return 11;
    }
    else if( card >= 10){
      return 10;
    }
    else{
      return card;
    }
  }

  function renderGame(){
    let x = getCard();
    setPoints(prevPoints => [...prevPoints, x]);
    setTotal( (prev) =>{
      return prev + x;
    })
    setMsg(printMsg(total + x));
  }

  function startGame(){
    let a = getCard();
    let b = getCard();
    setPoints([a,b]);
    setTotal(a+b);
    setMsg( printMsg(a+b));
    setStart("Restart Game");
  }

  function draw(){
    if(total === 0){
      alert("You haven't started the game");
      return;
    }
    else if(total >= 21){
      alert("The game is finished. Please restart the game.");
      return;
    }
    renderGame();
  }

  function printMsg(total){
    let message = "";
    if(total === 21){ 
      message = "You Win";
    }
    else if(total > 21){
      message = "You Lose";
    }
    else if(total <= 20 && total >= 0){
      message = "You can draw another Card";
    }
    return message;
  }    

  return(
    <div className="app">
      <Heading/>
      <Value points = {score} total = {total} />
      <Buttons startGame={startGame} draw={draw} start = {start} />
      <div>{msg}</div>
    </div>
  );
}

export default App;