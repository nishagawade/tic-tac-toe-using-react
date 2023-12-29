import React from 'react'

function GameOver({ winner }) {
    return (
        <div id='game-over'>
            <h2>Game Over</h2>
            {winner && <p>{winner} won </p>}
             {!winner && <p>It's a Rematch</p>}
            <p>
            <button>It's a Rematch</button>
            </p>
           

        </div>
    )
}

export default GameOver
