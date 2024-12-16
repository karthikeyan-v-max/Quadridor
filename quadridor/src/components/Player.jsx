const Player = ({ color, position }) => {
    return (
      <div 
        className={`absolute w-8 h-8 rounded-full transition-all duration-200 ${
          color === 'red' ? 'bg-red-500' : 'bg-blue-500'
        }`}
        style={{
          top: `${position.row * (600/9) + 4}px`,
          left: `${position.col * (600/9) + 4}px`,
        }}
      />
    );
  };
  
  export default Player;
  