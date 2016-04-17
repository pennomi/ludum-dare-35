export class Point {

  public x : number;
  public y : number;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  left(px) {
    this.x -= px;
  }

  right(px) {
    this.x += px;
  }

  up(px) {
    this.y -= px;
  }

  down(px) {
    this.y += px;
  }
}
