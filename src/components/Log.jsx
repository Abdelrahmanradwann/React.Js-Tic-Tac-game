
export default function Log({turn}) {
    return (
        <ol id='log'>
            {turn.map((turns) => (
                <li key={`${turns.square.rowIndex}-${turns.square.colIndex}`}>
                    {turns.player} selected {turns.square.rowIndex}, {turns.square.colIndex}
                </li>
            ))}

        </ol>
    )
}