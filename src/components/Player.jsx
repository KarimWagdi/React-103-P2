import { useState } from "react"

export default function Player({startPlayerName, symbol}){
    const [ playerName, setPlayerName] = useState(startPlayerName)
    const [ isEditing, setIsEditing ] = useState(false)

    function handelEdit(){
        setIsEditing((editing) => !editing) // true
        // setIsEditing(!isEditing) // false 
    }

    function handelEditName (event){
        setPlayerName(event.target.value)
    }

    let editPlayerName = <span className="player-name">{playerName}</span>
    
    if(isEditing){
        editPlayerName = <input type="text" required value={playerName} onChange={handelEditName}></input>
    }
    return(
        <>
        <li>
            <span className="player">
            {editPlayerName}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handelEdit}> {isEditing ? "Save" : "Edit"} </button>
        </li>
        </>
    )
}