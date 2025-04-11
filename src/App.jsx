import { useState } from "react";
import "./App.css";

function Squre({ position, handleClick, ClickedSqures }) {
  
  return <div className="box" onClick={() => handleClick(position)}>{position.value}</div>;
}

function App() {
  const [player, setPlayer] = useState("X");

  const [Squares, setSquares] = useState([
    { x: 0, y: 0, value: null },
    { x: 0, y: 1, value: null },
    { x: 0, y: 2, value: null },
    { x: 1, y: 0, value: null },
    { x: 1, y: 1, value: null },
    { x: 1, y: 2, value: null },
    { x: 2, y: 0, value: null },
    { x: 2, y: 1, value: null },
    { x: 2, y: 2, value: null },
  ]);

  function handleClick(position) {
    const isWinner = false;
    const updatedSquares = Squares.map((element) => {
      if(element.x===position.x && element.y===position.y){
        //console.log("element");
        return {
          x:position.x,
          y:position.y,
          value:player,
        }
      }
      return element;
    });
    setSquares(updatedSquares);
    setPlayer(player === "X" ? "O" : "X");
  }
   const xSquares = Squares.filter((squre) => squre.value === "X");
   const oSquares = Squares.filter((squre) => squre.value === "O");


   const Winner = calculateWinner(Squares);

   function calculateWinner(squares) {
     const lines = [
       [0, 1, 2],
       [3, 4, 5],
       [6, 7, 8],
       [0, 3, 6],
       [1, 4, 7],
       [2, 5, 8],
       [0, 4, 8],
       [2, 4, 6],
     ];
     for (let i = 0; i < lines.length; i++) {
       const [a, b, c] = lines[i];
       if (squares[a].value && squares[a].value === squares[b].value && squares[a].value === squares[c].value) {
         return squares[a].value;
       }
     }
     return null;
   }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <h2>Current Player: {player}</h2>
      <h2>Winner: {Winner ? Winner : '- None -'}</h2>
      <div className="game-board">
        {Squares.map((squre) => {
          return <Squre 
          position={squre} 
          handleClick={handleClick} 
          key={`${squre.x}-${squre.y}`} 
          />;
        })}
      </div>
    </>
  );
}

export default App;
