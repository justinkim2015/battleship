const playerFactory = (playerNum, type) => {
  const guess = (board) => {
    let guess = [
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
    ];

    if (board.isAttacked(guess) || type != "computer") {
      return false;
    } else {
      return guess;
    }
  };

  return { playerNum, type, guess };
};

export default playerFactory;
