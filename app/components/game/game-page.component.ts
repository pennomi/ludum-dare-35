import {Component, AfterViewInit, ViewChild} from 'angular2/core';
import {Hero, Antlion, Goblin, Skeleton, Minotaur, Wyvern, Zombie} from './creatures';
import {TerrainSprite} from '../../animations/terrain';
import {Point} from '../../utils/point';

@Component({
    selector: 'game-page',
    templateUrl: 'app/components/game/game-page.component.html'
})
export class GamePageComponent implements AfterViewInit {
  @ViewChild("gameView") gameCanvas;
  private ctx;
  private background;
  private hero;
  private creatures;
  private terrain;

  // The position of the mouse on the canvas
  private mouse : Point;

  // Center of the HTML canvas
  private center : Point;

  public lastTickTime = Date.now();

  ngAfterViewInit() {
    // Create the canvas
    this.ctx = this.gameCanvas.nativeElement.getContext("2d");

    // Set the center variables
    this.center = new Point(
      Math.floor(this.gameCanvas.nativeElement.width / 2),
      Math.floor(this.gameCanvas.nativeElement.height / 2)
    );
    // Initialize the mouse position at null
    this.mouse = new Point(null, null);

    // Make a game
    this.hero = new Hero(this.center);
    this.creatures = [
      new Goblin(new Point(Math.random()*600, Math.random()*600)),
      // new Minotaur(new Point(Math.random()*600, Math.random()*600)),
      // new Wyvern(new Point(Math.random()*600, Math.random()*600)),
      // new Zombie(new Point(Math.random()*600, Math.random()*600)),
      // new Antlion(new Point(Math.random()*600, Math.random()*600)),
      // new Skeleton(new Point(Math.random()*600, Math.random()*600))
    ]
    this.terrain = new TerrainSprite();


    // Kickstart the render loop
    this.render();
  }

  renderAimLine() {
    this.ctx.beginPath();
    this.ctx.strokeStyle = 'rgba(255, 20, 20, 0.3)';
    this.ctx.lineWidth = 3;
    this.ctx.moveTo(this.center.x, this.center.y);
    this.ctx.lineTo(this.mouse.x, this.mouse.y);
    this.ctx.stroke();
  }

  // Draw the game
  render() {
    // Schedule the next render
    requestAnimationFrame(()=> {
      this.render();
    });

    // Draw the background
    this.terrain.draw(this.ctx);

    // Calculate the change in time since last frame
    let now = Date.now();
    let dt = (now - this.lastTickTime) / 1000;
    this.lastTickTime = now;

    // Draw a goblin
    for (let c of this.creatures) {
      c.update(dt, this.center);
      c.draw(this.ctx);
    }

    this.renderAimLine();
  }

  onMouseMove(event) {
    let offsetX, offsetY = 0;
    let canvasX, canvasY = 0;
    let element = this.gameCanvas.nativeElement;

    offsetX = element.offsetLeft;
    offsetY = element.offsetTop;

    this.mouse = new Point(
      event.clientX - offsetX,
      event.clientY - offsetY
    );
  }
}
