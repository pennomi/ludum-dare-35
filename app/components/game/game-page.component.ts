import {Component, AfterViewInit, ViewChild} from 'angular2/core';
import {GoblinAnimation} from '../../animations/goblin';
import {Goblin} from './creatures';
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

  ngAfterViewInit() {
    // Create the canvas
    this.ctx = this.gameCanvas.nativeElement.getContext("2d");

    // Make a game
    this.creatures = [
      new Goblin(Math.random()*600, Math.random()*600),
      new Goblin(Math.random()*600, Math.random()*600),
      new Goblin(Math.random()*600, Math.random()*600),
      new Goblin(Math.random()*600, Math.random()*600),
      new Goblin(Math.random()*600, Math.random()*600)
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

    // Draw a goblin
    for (let c of this.creatures) {
      c.update();
      c.draw(this.ctx);
    }
  };
}
