import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard"
import { useState } from "react"

function App() {
  const [playerTurn, setPlayerTurn] = useState("X")
  
  function handleTurn() {
    setPlayerTurn(prevTurn => prevTurn === "X" ? "O" : "X")
  }

  return (
    <main>
      <div id="game-container">
        <ol id = "players">
          <Player name="player1" symbol={ playerTurn } />
          <Player name="player2" symbol={ playerTurn } />
        </ol>
        <GameBoard symbol={ playerTurn } changeTurn = {handleTurn} />
      </div>
      LOG
    </main>
    

  )
  
  
}

export default App
