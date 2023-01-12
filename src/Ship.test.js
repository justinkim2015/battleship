import shipFactory from './Ship.js';

describe('ships', () => {
  let ship

  beforeEach(()=> {
    ship = shipFactory(2)
  });
  
  test('Ship Exists', () => {
    expect(ship).toBeDefined
  });

  test('Ship has correct name (2 length)', () => {
    expect(ship.getName()).toBe('destroyer')
  });

  test('Ship has correct name (3 length)', () => {
    ship = shipFactory(3)
    expect(ship.getName()).toBe('submarine')
  });

  test('Ship has length', () => {
    expect(ship.length).toBe(2)
  });

  test('Ship has sunk', () => {
    expect(ship.isSunk()).toBe(false)
  });

  test('Ship has number of hits', () => {
    expect(ship.hitsCount()).toBe(0)
  });

  test('Ship can be hit', () => {
    ship.hit()
    expect(ship.hitsCount()).toBe(1)
  });

  test('Ship is sunk if hits = length', () => {
    for(let i=0; i<ship.length; i++) {
      ship.hit()
    }

    expect(ship.isSunk()).toBe(true)
  });
})
