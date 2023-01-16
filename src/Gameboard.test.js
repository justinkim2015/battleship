import gameboard from "./Gameboard.js";
import shipFactory from "./Ship.js";

describe("create board", () => {
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
});

describe("place ships", () => {
  let ship;
  let board;

  beforeEach(() => {
    board = gameboard.getGrid();
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
    gameboard.reset();
    ship = shipFactory(3);
  });

  test("Placed ship recieves attack", () => {
    gameboard.placeShip(ship, 1, 2, "horizontal");
    gameboard.recieveAttack(1, 2);
    expect(ship.hitsCount()).toBe(1);
  });

  test("Placed ship 1 hit 1 miss", () => {
    gameboard.placeShip(ship, 1, 2, "horizontal");
    gameboard.recieveAttack(1, 2);
    gameboard.recieveAttack(1, 1);
    expect(ship.hitsCount()).toBe(1);
  });

  test("board records misses", () => {
    gameboard.recieveAttack(9, 9);
    expect(gameboard.getMisses()).toStrictEqual([[9, 9]]);
  });

  test("board records hits", () => {
    gameboard.placeShip(ship, 4, 4, "horizontal");
    gameboard.recieveAttack(4, 4);
    expect(gameboard.getHits()).toStrictEqual([[4, 4]]);
  });
});

describe("All ships sunk", () => {
  let ship;

  beforeEach(() => {
    ship = shipFactory(2);
  });

  test("Returns remaining ship count", () => {
    expect(gameboard.getShipCount()).toBe(5);
  });

  test("Returns remaining ship count if ship is sunk", () => {
    gameboard.placeShip(ship, 1, 1, "horizontal");
    gameboard.recieveAttack(1, 1);
    gameboard.recieveAttack(2, 1);
    expect(gameboard.getShipCount()).toBe(4);
  });
});

describe("all ships sunk?", () => {
  let ship;

  beforeEach(() => {
    gameboard.reset();
    ship = shipFactory(3);
  });

  test("Returns false when all ships arent sunk", () => {
    expect(gameboard.isAllSunk()).toBe(false);
  });

  test("Returns true when all ships are sunk", () => {
    for (let i = 0; i < 5; i++) {
      gameboard.placeShip(shipFactory(1), i, 1, "horizontal");
      gameboard.recieveAttack(i, 1);
    }
    expect(gameboard.isAllSunk()).toBe(true);
  });
});

describe("resets board", () => {
  let ship;
  beforeEach(() => {
    ship = shipFactory(3);
    gameboard.placeShip(ship, 1, 1, "horizontal"); // places ship
    gameboard.recieveAttack(3, 2); // misses attack
    gameboard.recieveAttack(1, 1); // hits
    gameboard.reset();
  });

  test("Resets ship count", () => {
    expect(gameboard.getShipCount()).toBe(5);
  });

  test("Resets misses", () => {
    expect(gameboard.getMisses()).toStrictEqual([]);
  });

  test("Resets hits", () => {
    expect(gameboard.getHits()).toStrictEqual([]);
  });

  test("Clears board", () => {
    let array = [];
    for (let i = 0; i < 10; i++) {
      array.push(new Array(10));
    }

    expect(gameboard.getGrid()).toStrictEqual(array);
  });
});
