import {Component, AfterViewInit, ViewChild} from 'angular2/core';
import {Antlion, Goblin, Skeleton, Minotaur, Wyvern, Zombie} from './creatures';
import {TerrainSprite} from '../../animations/terrain';

@Component({
    selector: 'game-page',
    templateUrl: 'app/components/game/game-page.component.html'
})
export class GamePageComponent implements AfterViewInit {
  @ViewChild("gameView") gameCanvas;
  private ctx;
  private background;
  private creatures;
  private terrain;

  private mouse_x;
  private mouse_y;

  public center_x;
  public center_y;

  public lastTickTime = Date.now();

  ngAfterViewInit() {
    // Create the canvas
    this.ctx = this.gameCanvas.nativeElement.getContext("2d");

    this.center_x = Math.floor(this.gameCanvas.nativeElement.width / 2);
    this.center_y = Math.floor(this.gameCanvas.nativeElement.height / 2);

    // Make a game
    this.creatures = [
      // new Goblin(Math.random()*600, Math.random()*600),
      // new Goblin(Math.random()*600, Math.random()*600),
      // new Goblin(Math.random()*600, Math.random()*600),
      new Minotaur(Math.random()*600, Math.random()*600),
      // new Minotaur(Math.random()*600, Math.random()*600),
      // new Minotaur(Math.random()*600, Math.random()*600),
      // new Wyvern(Math.random()*600, Math.random()*600),
      // new Wyvern(Math.random()*600, Math.random()*600),
      // new Zombie(Math.random()*600, Math.random()*600),
      // new Zombie(Math.random()*600, Math.random()*600),
      // new Zombie(Math.random()*600, Math.random()*600),
      // new Antlion(Math.random()*600, Math.random()*600),
      // new Antlion(Math.random()*600, Math.random()*600),
      // new Antlion(Math.random()*600, Math.random()*600),
      // new Skeleton(Math.random()*600, Math.random()*600),
      // new Skeleton(Math.random()*600, Math.random()*600),
      // new Skeleton(Math.random()*600, Math.random()*600),
    ]
    this.terrain = new TerrainSprite()

    // Kickstart the render loop
    this.render();
  }

  // Draw the game
  render() {
    // Schedule the next render
    requestAnimationFrame(()=> {
      this.render()
    });

    // Draw the background
    this.terrain.draw(this.ctx);

    // Calculate the change in time since last frame
    let now = Date.now();
    let dt = (now - this.lastTickTime) / 1000;
    this.lastTickTime = now;

    // Draw a goblin
    for (let c of this.creatures) {
      c.update(dt, this.mouse_x, this.mouse_y);
      c.draw(this.ctx);
    }
  }

  onMouseMove(event) {
    let offsetX, offsetY = 0;
    let canvasX, canvasY = 0;
    let element = this.gameCanvas.nativeElement;

    offsetX = element.offsetLeft;
    offsetY = element.offsetTop;

    this.mouse_x = event.clientX - offsetX;
    this.mouse_y = event.clientY - offsetY;
  }
}
