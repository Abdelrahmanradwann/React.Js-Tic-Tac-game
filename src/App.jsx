import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard"

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id = "players">
          <Player name="player1" symbol="X"/>
          <Player name="player2" symbol="O"/>
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
    

  )
  
  
}

export default App
