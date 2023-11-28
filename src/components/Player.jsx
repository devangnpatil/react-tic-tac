import React, {useState} from 'react'

export default function Player({name, symbol}) {
    const [isEditing, setIsEditing]=useState(false);
    function clickHandler () {
        setIsEditing(true);
    }
  return (
    <li>
        <span className="player">
        {!isEditing && <span className="player-name">{name}</span>}
        {isEditing && <input type='text' />}
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={()=>clickHandler()}>Edit</button>
  </li>
  )
}
