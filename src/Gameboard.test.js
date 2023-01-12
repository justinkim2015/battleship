import gameboard from './Gameboard.js'
import shipFactory from './Ship.js'
import Ship from './Ship.js'

let board 

beforeEach(()=> {
  board = gameboard.getGrid()
})

test ('gameboard exists', ()=> {
  expect(gameboard).toBeDefined
})

test ('has an array of length 10', ()=> {
  expect(board.length).toBe(10)
})

test ('has a depth of length 10', ()=> {
  expect(board[0][9]).toBe(undefined)
})

describe('place ships', () => {
  let ship 

  beforeEach(()=> {
    ship = shipFactory(3)
  })
  
  test ('can place ship', ()=> {
    gameboard.placeShip(ship.length, 1, 1)
    expect(board[1][1]).toBe(3)
  })
  
  test ('can place ship', ()=> {
    gameboard.placeShip(ship.length, 2, 2)
    expect(board[2][2]).toBe(3)
  })
})

