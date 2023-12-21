import logo from './logo.svg';
import './App.css';
import Player from './components/Player';
import GameBoard from './components/GameBoard';

function App() {
  return (
    <main>
      <div id='game-container'>
        <ol id='players'>
        <Player name = "Player1" symbol="X"/>
        <Player name = "Player2" symbol="Y"/>
        </ol>
       <GameBoard/>
      </div>
    </main>
  );
}

export default App;
