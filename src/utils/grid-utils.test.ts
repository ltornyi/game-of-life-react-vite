import { alive, createEmptyGrid } from './grid-utils';

describe('createEmptyGrid', () => {

  it('should create a grid with all elements initialized to false for positive sizeX and sizeY', () => {
    const sizeX = 3;
    const sizeY = 3;
    const grid = createEmptyGrid(sizeX, sizeY);
    expect(grid).toHaveLength(sizeX);
    grid.forEach(row => {
      expect(row).toHaveLength(sizeY);
      row.forEach(cell => {
        expect(cell).toBe(false);
      });
    });
  });

  it('should create an empty grid when both sizeX and sizeY are 0', () => {
    const sizeX = 0;
    const sizeY = 0;
    const grid = createEmptyGrid(sizeX, sizeY);
    expect(grid).toHaveLength(sizeX);
    grid.forEach(row => {
      expect(row).toHaveLength(sizeY);
    });
  });

});

describe('alive', () => {
  it('should return 1 when the cell at (i, j) is alive', () => {
    const grid = [
      [false, false, false],
      [false, true, false],
      [false, false, false]
    ];
    const result = alive(1, 1, grid);
    expect(result).toBe(1);
  });

  it('should return 0 when the cell at (i, j) is dead', () => {
    const grid = [
      [false, true, false],
      [false, false, true],
      [true, false, false]
    ];
    const result = alive(1, 1, grid);
    expect(result).toBe(0);
  });

  it('should return 0 when the cell coordinates (i, j) are out of bounds on the negative side', () => {
    const grid = [
      [false, false, false],
      [false, true, false],
      [false, false, false]
    ];
    const result = alive(-1, -1, grid);
    expect(result).toBe(0);
  });

  it('should return 0 when the cell coordinates (i, j) are out of bounds on the positive side', () => {
    const grid = [
      [false, false, false],
      [false, true, false],
      [false, false, false]
    ];
    const result = alive(3, 3, grid);
    expect(result).toBe(0);
  });
});