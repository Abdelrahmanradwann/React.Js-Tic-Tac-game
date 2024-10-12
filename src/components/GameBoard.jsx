
export default function GameBoard({changeTurn, board}) {    
    return (
        <ol id="game-board">
            {board.map((row, rowIndex) =>(
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => changeTurn(rowIndex,colIndex) }>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
    
}