import Player from './Player';
import Wall from './Wall';

const GameBoard = ({ gameState, setGameState }) => {
  const handleCellClick = (row, col) => {
    const currentPlayer = gameState.players.find(p => p.id === gameState.currentTurn);
    
    // Check if move is valid (adjacent cell)
    const isValidMove = isAdjacent(currentPlayer.position, { row, col });
    
    if (isValidMove) {
      const updatedPlayers = gameState.players.map(player =>
        player.id === gameState.currentTurn
          ? { ...player, position: { row, col } }
          : player
      );

      setGameState({
        ...gameState,
        players: updatedPlayers,
        currentTurn: gameState.currentTurn === '1' ? '2' : '1'
      });
    }
  };

  const isAdjacent = (pos1, pos2) => {
    const rowDiff = Math.abs(pos1.row - pos2.row);
    const colDiff = Math.abs(pos1.col - pos2.col);
    return (rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-9 gap-1 w-[600px] h-[600px] bg-amber-100">
        {Array(9).fill(null).map((_, row) => (
          Array(9).fill(null).map((_, col) => (
            <div 
              key={`${row}-${col}`}
              className="bg-white border border-gray-300 rounded-sm cursor-pointer hover:bg-gray-100"
              onClick={() => handleCellClick(row, col)}
            />
          ))
        ))}
      </div>
      
      {/* Render players */}
      {gameState.players.map(player => (
        <Player 
          key={player.id}
          color={player.color}
          position={player.position}
        />
      ))}

      {/* Render walls */}
      {gameState.walls.map((wall, index) => (
        <Wall 
          key={index}
          orientation={wall.orientation}
          position={wall.position}
        />
      ))}
    </div>
  );
};

export default GameBoard;
