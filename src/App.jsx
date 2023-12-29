import logo from './logo.svg';
import './App.css';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import { useState } from 'react';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winning-combinations';
import GameOver from './components/GameOver';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function deriveActivePlayer(gameTurns) {
  console.log("deriveActivePlayer")
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].Player === 'X') {
    currentPlayer = 'O'
  }

  return currentPlayer
}

function App() {

  const [gameTurns, setGameTurns] = useState([])
  const activePlayer = deriveActivePlayer(gameTurns)

  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    const { square, Player } = turn;
    const { row, col } = square

    gameBoard[row][col] = Player
  }
  let winner = ""

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol == thirdSquareSymbol) {
      winner = firstSquareSymbol
    }
  }

  let hasDraw = gameTurns.length === 9 && !winner

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {

      const currentPlayer = deriveActivePlayer(gameTurns)
      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, Player: currentPlayer }, ...prevTurns]
      return updatedTurns;
    })
  }
  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player name="Player1" symbol="X" isActive={activePlayer === 'X'} />
          <Player name="Player2" symbol="Y" isActive={activePlayer === 'O'} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
