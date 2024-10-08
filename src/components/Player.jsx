import { useState } from "react"

export default function Player({name,symbol}) {
    const [isEditing, setIsEditing] = useState(false)
    function handleEditClick(){
        // setIsEditing(!isEditing)
        // This is better than the first as it guarantees that it will get the latest value of isEditing
        setIsEditing(editing => !editing)
    }
    let clkButton = (isEditing ? "Save" : "Edit");
    return (
        <li>
            <span className="player">
                {!isEditing?<span className="player-name"> {name} </span>:<input type="text" required className="player-name" value={name}/>}
                <span className="player-symbol">{symbol}</span>         
            </span>
            <button onClick={handleEditClick}>{clkButton}</button>
        </li>
    
    )
}