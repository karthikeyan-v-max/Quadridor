import { useState, useEffect } from 'react';
import GameBoard from './components/GameBoard';
import GameControls from './components/GameControls';

export default function App() {
  const [gameState, setGameState] = useState({
    players: [
      {
        id: '1',
        position: { row: 0, col: 4 },
        wallsLeft: 10,
        color: 'red'
      },
      {
        id: '2',
        position: { row: 8, col: 4 },
        wallsLeft: 10,
        color: 'blue'
      }
    ],
    walls: [],
    currentTurn: '1'
  });

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <GameBoard gameState={gameState} setGameState={setGameState} />
                <GameControls gameState={gameState} setGameState={setGameState} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
