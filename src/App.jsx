import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard"
import { useState } from "react"
import Log from "./components/Log"


function helper(turn) {
  if (!turn.length) return 'X';

  if(turn[0].player=='X')return 'O';
  else return 'X';
}

function App() {
  const [gameTurn, setGameTurn] = useState([])

  let activePlayer = 'X';
  activePlayer = helper(gameTurn)

  function handleTurn(rowIndex, colIndex) {
    if (gameTurn.find(turn => turn.square.rowIndex === rowIndex && turn.square.colIndex === colIndex)) {
      return;
    }
    setGameTurn(prev => {
      let currentTurn = 'X';
      if(prev.length) {
        currentTurn = helper(prev)
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
      <Log turn={gameTurn} />
    </main>
    

  )
  
  
}

export default App
