import playerFactory from "./Player";
let player1;
let player2;

beforeEach(() => {
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

test("Only guesses if player is a computer", () => {
  expect(player1.guess()).toBe(undefined)
});

// test("computer can guess random coords", () => {
//   expect(player2.guess()).toStrictEqual([4, 4]);
// });

// test("computer can guess random coords", () => {
//   expect(player2.guess()).toStrictEqual([5, 5]);
// });
