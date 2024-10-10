import { useState } from "react"

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({changeTurn, turns}) {
    // const [gameBoard, setGameBoard] = useState(initialGameBoard)

    // function handleSelectSquare(rowIndex, colIndex) {
    //     // declare a new object instead of modifying the prev one, to prevent bugs as react may not update it cuz of same ref
    //     setGameBoard(prevGameBoard => {
    //         const newGameBoard = [...prevGameBoard.map(row => [...row])]
    //         newGameBoard[rowIndex][colIndex] = symbol
    //         return newGameBoard
    //     })
    //     changeTurn()
    // }
    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        console.log(turn)
        const { square, player } = turn
        const {rowIndex, colIndex} = square
        gameBoard[rowIndex][colIndex] = player
    }

    
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) =>(
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