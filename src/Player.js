const playerFactory = (playerNum, type) => {
  const guess = () => {
    if(type === 'computer') {
      return [4, 4]
    }
  }

  return { playerNum, type, guess };
};

export default playerFactory;
