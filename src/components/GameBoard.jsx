
import React, { useState } from 'react'
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]


function GameBoard() {

  const [gameBoard, setGameBoard] = useState(initialGameBoard)

  function handleSelectSquare(rowIndex, colIndex){
    setGameBoard((prevState)=>{
      const updatedBoard = [...prevState.map((innerArray)=> [...innerArray])]
      updatedBoard[rowIndex][colIndex] = 'X';
      return updatedBoard;
    })
  }

  return <ol id='game-board'>
    {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
      <ol>
        {row.map((playerSymbol, colIndex) =>
          <li key={colIndex}>
            <button onClick= {()=>handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
          </li>)}
      </ol>
    </li>)}
  </ol>

}

export default GameBoard
