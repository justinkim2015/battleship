const shipFactory = (length) => {
  let sunk = false;
  let hits = 0;
  let name;

  // Setter
  const setHit = () => {
    hits += 1;
  };

  const setName = () => {
    switch (length) {
      case 2:
        name = "destroyer";
        break;
      case 3:
        name = "submarine";
        break;
      case 4:
        name = "battleship";
        break;
      case 5:
        name = "carrier";
        break;
    }
  };

  // Getter
  const hitsCount = () => {
    return hits;
  };

  const getName = () => {
    return name;
  };

  const isSunk = () => {
    if (length === hitsCount()) {
      sunk = true;
    }

    return sunk;
  };

  setName();
  return { length, isSunk, hitsCount, setHit, getName };
};

export default shipFactory;
