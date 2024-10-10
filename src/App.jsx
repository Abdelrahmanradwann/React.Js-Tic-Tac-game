import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard"
import { useState } from "react"

function App() {
  const [activePlayer, setActivePlayer] = useState("X")
  const [gameTurn, setGameTurn] = useState([])

  
  function handleTurn(rowIndex,colIndex) {
    setActivePlayer(prevTurn => prevTurn === "X" ? "O" : "X")
    setGameTurn(prev => {
      let currentTurn = 'X';
      if(prev.length) {
        currentTurn = prev[0].player === 'X' ? 'O' : 'X'
      }
      const updatedTurn = [
        {square: {rowIndex,colIndex}, player:currentTurn},
        ...prev
      ]
      return updatedTurn
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id = "players" className="highlight-player">
          <Player name="player1" symbol='X' isActive={ activePlayer === 'X'} />
          <Player name="player2" symbol='O' isActive={ activePlayer === 'O' } />
        </ol>
        <GameBoard changeTurn = {handleTurn} turns = {gameTurn} />
      </div>
      LOG
    </main>
    

  )
  
  
}

export default App
