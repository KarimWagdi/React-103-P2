import { useState } from "react"

const initialBoard = [
[null, null, null],
[null, null, null],
[null, null, null]
]
export default function GameBoard(){
    const [gameBoard, setGameBoard]=useState(initialBoard)
    function handelClick (rowIndex, colIndex){
        setGameBoard((data) => {
            let updatedData = [...data.map((arr => [...arr]))]
            updatedData[rowIndex][colIndex] = "X"
            return updatedData
        })
    }
    return(
        <>
            <ol id="game-board">
                {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                            <button onClick={() => handelClick(rowIndex, colIndex) }> { playerSymbol } </button>
                        </li>)}
                   </ol>
                </li>)}
            </ol>
        </>
    )
}