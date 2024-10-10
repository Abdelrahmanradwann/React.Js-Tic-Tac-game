import { useState } from "react"
export default function Player({name,symbol, isActive}) {
    const [isEditing, setIsEditing] = useState(false)
    const [PlayerName, setPlayerName] = useState(name)
    function handleEditClick(){
        // setIsEditing(!isEditing)
        // This is better than the first as it guarantees that it will get the latest value of isEditing
        setIsEditing(editing => !editing)
    }
    function handleNameChange(event) {
        setPlayerName(event.target.value)
    }
    let clkButton = (isEditing ? "Save" : "Edit");
    return (
        <li className={isActive? 'active':undefined}>
            <span className="player">
                {!isEditing?<span className="player-name"> {PlayerName} </span>:<input type="text" required  value={PlayerName} onChange={handleNameChange}/>}
                <span className="player-symbol">{symbol}</span>         
            </span>
            <button onClick={handleEditClick}>{clkButton}</button>
        </li>
    
    )
}