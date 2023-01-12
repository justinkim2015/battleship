const gameboard = (() => {
  const makeGrid = () => {
    const length = 10
    const depth = 10

    let array = []
    for(let i=0; i<length; i++){
      array.push(new Array(depth))
    }

    return array
  }

  let grid = makeGrid()

  const getGrid = () => { return grid }
  
  const placeShip = (ship, x, y) => {
    grid[x][y] = ship
  }

  return { getGrid, placeShip } 
})();

export default gameboard