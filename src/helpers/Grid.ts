import Cell from "./Cell";

export default class Grid {
    cells: Cell[];
    gridSize: number;
    numberOfCells: number;
    numberOfUnlickedCells: number;
  
    constructor(gridSize = 7) {
      this.gridSize = gridSize;
      this.numberOfCells = this.gridSize * this.gridSize;
      this.numberOfUnlickedCells = this.numberOfCells;
      this.cells = [];
  
      for (let i = 0; i < this.numberOfCells; i++) {
        let cell = new Cell(i);
        this.cells.push(cell);
      }
    }
}