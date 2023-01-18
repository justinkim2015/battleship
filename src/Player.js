const playerFactory = (playerNum, type) => {
  const takeTurn = () => {
  };

  const guess = (board) => {
    let guess = [Math.floor(Math.random() * 10), 
                 Math.floor(Math.random() * 10)]

    if(board.getMisses().includes(guess)) {
      guess(board)
    } else {
      return guess
    }
  };

  return { playerNum, type, takeTurn, guess };
};

export default playerFactory;
