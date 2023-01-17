const playerFactory = (playerNum, type) => {
  const computerGuess = () => {
    if(type === 'computer') {
      return [4, 4]
    }
  }

  return { playerNum, type, computerGuess };
};

export default playerFactory;