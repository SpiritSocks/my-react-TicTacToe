import Square from './Square';
import { useState } from "react";

function Board() {

    const [xisNext, setIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    const handleClick = (i: number) => {
        if (squares[i] || calculateWinner()) {
            return;
        }

        const nextSquares = [...squares];
        if (xisNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }

        setSquares(nextSquares);
        setIsNext(!xisNext);
    };

    const calculateWinner = () => {
        const winningLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < winningLines.length; i++) {
            const [a, b, c] = winningLines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };``

    const winner = calculateWinner();
    let status;
    if (winner) {
        status = `The winner is ${winner}`;
    } else if (squares.every(square => square !== null)) {
        status = "It's a draw";
    } else {
        status = `Next player: ${xisNext ? 'X' : 'O'}`;
    }

    return (
        <div className="flex flex-col items-center justify-center p-4 mt-40">
            <h1 className="mb-6 text-2xl font-bold">{status}</h1>
            <div className="p-3 rounded-lg shadow-md">
                <div className="flex justify-center space-x-4">
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                </div>
                <div className="flex justify-center space-x-4">
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                </div>
                <div className="flex justify-center space-x-4">
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                </div>
            </div>
        </div>
    );
};

export default Board;