const playerFactory = (playerNum, type) => {
  const takeTurn = () => {
  };

  const guess = () => {
    return [Math.floor(Math.random() * 10), 
            Math.floor(Math.random() * 10)];
  };

  return { playerNum, type, takeTurn, guess };
};

export default playerFactory;
