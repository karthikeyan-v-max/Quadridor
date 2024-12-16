const GameControls = ({ gameState, setGameState }) => {
    const currentPlayer = gameState.players.find(p => p.id === gameState.currentTurn);
  
    const placeWall = (orientation) => {
      if (currentPlayer.wallsLeft > 0) {
        // This is a simplified wall placement - you'll need to add proper validation
        const newWall = {
          position: { 
            row: currentPlayer.position.row, 
            col: currentPlayer.position.col 
          },
          orientation
        };
  
        setGameState({
          ...gameState,
          walls: [...gameState.walls, newWall],
          players: gameState.players.map(player =>
            player.id === gameState.currentTurn
              ? { ...player, wallsLeft: player.wallsLeft - 1 }
              : player
          ),
          currentTurn: gameState.currentTurn === '1' ? '2' : '1'
        });
      }
    };
  
    return (
      <div className="mt-4 space-y-4">
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold">
            Current Turn: Player {gameState.currentTurn}
          </div>
          <div className="text-lg">
            Walls Left: {currentPlayer.wallsLeft}
          </div>
        </div>
        <div className="flex space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => placeWall('horizontal')}
          >
            Place Horizontal Wall
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => placeWall('vertical')}
          >
            Place Vertical Wall
          </button>
        </div>
      </div>
    );
  };
  
  export default GameControls;
  