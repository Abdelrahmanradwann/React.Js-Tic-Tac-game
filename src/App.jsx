
import Player from "./components/Player.jsx"

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id = "players">
          <Player name="player1" symbol="X"/>
          <Player name="player2" symbol="O"/>
        </ol>
        Game board
      </div>
      LOG
    </main>
    

  )
  
  
}

export default App
