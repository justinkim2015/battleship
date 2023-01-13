import gameboard from "./Gameboard.js";
import shipFactory from "./Ship.js";
import Ship from "./Ship.js";

let board;

beforeEach(() => {
  board = gameboard.getGrid();
});

test("gameboard exists", () => {
  expect(gameboard).toBeDefined;
});

test("has an array of length 10", () => {
  expect(board.length).toBe(10);
});

test("has a depth of length 10", () => {
  expect(board[0][9]).toBe(undefined);
});

describe("place ships", () => {
  let ship;

  beforeEach(() => {
    ship = shipFactory(3);
  });

  test("can place ship", () => {
    gameboard.placeShip(ship, 1, 1, "horizontal");
    expect(board[1][1].getName()).toBe("submarine");
  });

  test("can place ship", () => {
    gameboard.placeShip(ship, 5, 5, "horizontal");
    expect(board[5][5].getName()).toBe("submarine");
  });

  test("ship is placed on multiple vertical places", () => {
    gameboard.placeShip(ship, 0, 0, "vertical");
    expect(board[0][2].getName()).toBe("submarine");
  });

  test("ship is placed on multiple horizontal places", () => {
    gameboard.placeShip(ship, 1, 1, "horizontal");
    expect(board[2][1].getName()).toBe("submarine");
  });

  test("ship doesnt overflow grid(horizontal)", () => {
    gameboard.placeShip(ship, 9, 9, "horizontal");
    expect(board[11]).toBe(undefined);
  });

  test("ship doesnt overflow grid(vertical)", () => {
    gameboard.placeShip(ship, 8, 8, "vertical");
    expect(board[9][10]).toBe(undefined);
  });

  test("ship doesnt overflow grid(horizontal)", () => {
    gameboard.placeShip(ship, 9, 9, "horizontal");
    expect(board[9][9]).toBe(undefined);
  });
});

describe("Recieves attacks", () => {
  let ship;

  beforeEach(() => {
    ship = shipFactory(3);
  });

  test ('Placed ship recieves attack', ()=> {
    gameboard.placeShip(ship, 1, 2, 'horizontal')
    gameboard.recieveAttack(1, 2)
    expect(ship.hitsCount()).toBe(1)
  })

  test ('Placed ship 1 hit 1 miss', ()=> {
    gameboard.placeShip(ship, 1, 2, 'horizontal')
    gameboard.recieveAttack(1, 2)
    gameboard.recieveAttack(1, 1)
    expect(ship.hitsCount()).toBe(1)
  })

  test("board records misses", () => {
    gameboard.recieveAttack(9, 9);
    expect(gameboard.getMisses()).toStrictEqual([[9, 9]]);
  });
});

describe("All ships sunk", () => {
  let ship;

  beforeEach(() => {
    ship = shipFactory(2);
  });

  test ('Returns true when all ships are sunk', ()=> {
    expect(gameboard.isAllSunk()).toBe(true)
  })

  test ('Returns remaining ship count', ()=> {
    expect(gameboard.getShipCount()).toBe(5)
  })

  test ('Returns remaining ship count if ship is sunk', ()=> {
    expect(gameboard.getShipCount()).toBe(4)
  })
  // test ('Returns false when all ships arent sunk', ()=> {
  //   expect(gameboard.isAllSunk()).toBe(false)
  // })
});