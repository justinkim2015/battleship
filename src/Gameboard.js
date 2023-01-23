const gameboard = (() => {
  let misses = [];
  let hits = [];
  let shipCount = 5;

  const makeGrid = () => {
    const length = 10;
    const depth = 10;

    let y =  new Array(depth).fill(undefined)
    let array = new Array(length).fill(y)

    return array;
  };

  let grid = makeGrid();

  // Getters
  const getMisses = () => {
    return misses;
  };
  const getHits = () => {
    return hits;
  };
  const getGrid = () => {
    return grid;
  };
  const getShipCount = () => {
    return shipCount;
  };

  // Setters
  const setMisses = (x, y) => {
    misses.push([x, y]);
  };
  
  const setHitRecord = (x, y) => {
    hits.push([x, y]);
  };
  const setShipCount = () => {
    shipCount -= 1;
  };

  const placeShip = (ship, x, y, orientation) => {
    let length = ship.length;

    for (let i = 0; i < length; i++) {
      if (isInvalid(length, x, y) === true) {
        // overflowError()
        break;
      } else if (orientation === "horizontal") {
        grid[x + i][y] = ship;
      } else {
        grid[x][y + i] = ship;
      }
    }
  };

  const overflowError = () => {
    console.log("ERROR OVERFLOW");
  };

  const isInvalid = (length, x, y) => {
    let invalid = false;

    for (let i = 0; i < length; i++) {
      if (grid[x + i] === undefined || grid[y + i] === undefined) {
        invalid = true;
      }
    }

    return invalid;
  };

  const recieveAttack = (x, y) => {
    if (grid[x][y] === undefined) {
      setMisses(x, y);
    } else {
      grid[x][y].setHit();
      setHitRecord(x, y);
      if (grid[x][y].isSunk() === true) {
        setShipCount();
      }
    }
  };

  const isAllSunk = () => {
    if (getShipCount() === 0) {
      return true;
    } else {
      return false;
    }
  };

  const reset = () => {
    shipCount = 5;
    grid = makeGrid();
    misses = [];
    hits = [];
  };

  const isAttacked = (target) => {
    if(getMisses().includes(target) || getHits().includes(target)) {
      return true
    } else {
      return false
    }
  }

  return {
    getGrid,
    getMisses,
    getShipCount,
    placeShip,
    recieveAttack,
    isAllSunk,
    reset,
    getHits,
    isAttacked
  };
})();

export default gameboard;
