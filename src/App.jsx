import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard"
import { useState } from "react"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./winining-combinations.js"
import GameOver from "./components/GameOver"
function helper(turn) {
  if (!turn.length) return 'X';

  if(turn[0].player=='X')return 'O';
  else return 'X';
}


const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]


function isOver(players, gameBoard) {
  for (const comb of WINNING_COMBINATIONS) {
    const [square1, square2, square3] = comb;
    const firstBox = gameBoard[square1.row][square1.column];
    const secondBox = gameBoard[square2.row][square2.column];
    const thirdBox = gameBoard[square3.row][square3.column];

    if (firstBox && firstBox === secondBox && firstBox === thirdBox) {
      return players[firstBox];
    }
  }
}


function App() {
  const [gameTurn, setGameTurn] = useState([])
  const [players, setPlayers] = useState(
    {
      X: 'Player1',
      O: 'player2'
    }
  )

  let gameBoard = [...initialGameBoard.map(array=>[...array])]

  for (const turn of gameTurn) {
      const { square, player } = turn
      const {rowIndex, colIndex} = square
      gameBoard[rowIndex][colIndex] = player
  }

  let activePlayer = 'X';
  activePlayer = helper(gameTurn)

  let winner;
  let draw = gameTurn.length === 9;
  winner = isOver(players, gameBoard)

  function handleRestart() {
    setGameTurn([])
  }

  function handlePlayers(symbol, name) {
    setPlayers(prev => {
      const updatedPlayers = {...prev}
      updatedPlayers[symbol] = name
      return updatedPlayers
    })
  }


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
          <Player name="player1" symbol='X' isActive={ activePlayer === 'X' } handlePlayers = {handlePlayers}  />
          <Player name="player2" symbol='O' isActive={ activePlayer === 'O' } handlePlayers = {handlePlayers}/>
        </ol>
        {(winner || draw) && <GameOver winner={winner} draw={draw} restartGame={ handleRestart } />}
        <GameBoard changeTurn = {handleTurn} board = {gameBoard} />
      </div>
      <Log turn={gameTurn} />
    </main>
    

  )
  
  
}

export default App
