interface SquareProps {
  value: string;
  onSquareClick: () => void;
}

function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button 
      className="square w-16 h-16 m-1 border border-gray-400 text-2xl font-bold"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default Square;