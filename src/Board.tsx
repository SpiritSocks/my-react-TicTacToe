import Square from './Square';
import { useState } from "react";

function Board() {

    const [xisNext, setIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    const handleClick = (i: number) => {

        if(squares[i] || calculateWinner()){
            return;
        }

        const nextSquares = squares.slice();
        if(xisNext){
            nextSquares[i] = "X"
        }else{
            nextSquares[i] = "O";
        }

        setSquares(nextSquares);
        setIsNext(!xisNext);
    }


    const calculateWinner = () => {

        const winningLines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];

        for(let i = 0; i < winningLines.length; i++){
            const [a,b,c] = winningLines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] == squares[c]){
                return squares[a];
            }
        }
        return null;
    };

    return (
        <div className="flex items-center justify-center h-screen border-2">
            <div className="border-1 p-3">
                <div className="flex justify-center">
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                </div>
                 <div className="flex justify-center">
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                </div>
                 <div className="flex justify-center">
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                </div>
            </div>
            <div className=' h-auto ml-10 grid p-2'>
                <h1 className='p-10'>Winner is: {calculateWinner()}</h1>
            </div>
        </div>
    );
}

export default Board;
