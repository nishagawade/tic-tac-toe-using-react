import React, { useState } from 'react'

const Player = ({name, symbol , isActive}) => {

    const [isEditing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(name)

 function handleClick () {
        setIsEditing(!isEditing)
    }

    function handleChange(e){
      setPlayerName(e.target.value)
    }

    let playerNameEdit =   <span className='player-name' >{playerName}</span>

    if(isEditing){
      playerNameEdit = <input type = 'text' value={playerName} onChange={(e)=>handleChange(e)} required/>
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
              {playerNameEdit}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleClick}>{!isEditing ? "Edit" : "Save"}</button>
        </li>
    )
}


export default Player