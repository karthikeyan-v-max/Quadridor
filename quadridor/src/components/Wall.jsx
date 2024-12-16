const Wall = ({ orientation, position }) => {
    return (
      <div 
        className={`absolute bg-gray-800 ${
          orientation === 'horizontal' 
            ? 'h-2 w-16' 
            : 'w-2 h-16'
        }`}
        style={{
          top: `${position.row * (600/9)}px`,
          left: `${position.col * (600/9)}px`,
        }}
      />
    );
  };
  
  export default Wall;
  