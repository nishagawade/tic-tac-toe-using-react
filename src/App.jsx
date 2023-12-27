import logo from './logo.svg';
import './App.css';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import { useState } from 'react';

function App() {

 const [activePlayer, setActivePlayer] = useState("X")

 function handleSelectSquare(){
   setActivePlayer((currActivePlayer) => currActivePlayer === 'X' ? 'O' :'X')
 }
  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
        <Player name = "Player1" symbol="X" isActive={activePlayer === 'X'}/>
        <Player name = "Player2" symbol="Y" isActive={activePlayer === 'O'}/>
        </ol>
       <GameBoard onSelectSquare = {handleSelectSquare} activePlayerSymbol = {activePlayer}/>
      </div>
    </main>
  );
}

export default App;
