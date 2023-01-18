import gameboard from "./Gameboard";
import playerFactory from "./Player";
import shipFactory from "./Ship";

let player1;
let player2;
let board;
let ship;

beforeEach(() => {
  ship = shipFactory(3);
  board = gameboard.getGrid();
  player1 = playerFactory(1, "human");
  player2 = playerFactory(2, "computer");
});

test("PlayerFactory exists", () => {
  expect(playerFactory).toBeDefined;
});

test("player 1 isn't a computer", () => {
  expect(player1.type).toBe("human");
});

test("player 2 is a computer", () => {
  expect(player2.type).toBe("computer");
});

test("Knows what player number it is", () => {
  expect(player1.playerNum).toBe(1);
});

test("Knows what player number it is", () => {
  expect(player2.playerNum).toBe(2);
});

// test("Player can take a turn", () => {
//   let input = [1, 2]
//   gameboard.placeShip(ship, 1, 2, 'horizontal')
//   player1.takeTurn(input);
//   expect(board[1][2].hitsCount()).toBe(1)
// });

test("computer can guess random coords (correct length)", () => {
  expect(player2.guess(gameboard).length).toBe(2);
});

test("computer can guess random coords (x <= 9)", () => {
  expect(player2.guess(gameboard)[0]).toBeLessThanOrEqual(9);
});

test("computer can guess random coords (y <= 9)", () => {
  expect(player2.guess(gameboard)[1]).toBeLessThanOrEqual(9);
});

test("computer can guess random coords (x >= 0)", () => {
  expect(player2.guess(gameboard)[0]).toBeGreaterThanOrEqual(0);
});

test("computer can guess random coords (y >= 0-9)", () => {
  expect(player2.guess(gameboard)[1]).toBeGreaterThanOrEqual(0);
});

test("Guess only runs if player is a computer", () => {
  expect(player1.guess(gameboard)).toBe(false);
});
