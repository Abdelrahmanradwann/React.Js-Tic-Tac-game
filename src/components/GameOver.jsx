
export default function GameOver({ winner, draw, restartGame }) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner && <p>{winner} won!</p>}
            {draw && !winner && <p>It's a draw!</p>}
            <button onClick={restartGame}>Restart</button>
        </div>
    )
}