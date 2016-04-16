import {Component, AfterViewInit, ViewChild} from 'angular2/core';
import {GoblinAnimation} from '../../animations/goblin';
import {MinotaurAnimation} from '../../animations/minotaur';
import {WyvernAnimation} from '../../animations/wyvern';
import {ZombieAnimation} from '../../animations/zombie';
import {AntlionAnimation} from '../../animations/antlion';
import {Antlion, Goblin, Skeleton, Minotaur, Wyvern, Zombie} from './creatures';

@Component({
    selector: 'game-page',
    templateUrl: 'app/components/game/game-page.component.html'
})
export class GamePageComponent implements AfterViewInit {
  @ViewChild("gameView") gameCanvas;
  private ctx;
  private background;
  private creatures;

  ngAfterViewInit() {
    // Create the canvas
    this.ctx = this.gameCanvas.nativeElement.getContext("2d");

    // Make a game
    this.creatures = [
      new Goblin(Math.random()*600, Math.random()*600),
      new Goblin(Math.random()*600, Math.random()*600),
      new Goblin(Math.random()*600, Math.random()*600),
      new Minotaur(Math.random()*600, Math.random()*600),
      new Minotaur(Math.random()*600, Math.random()*600),
      new Minotaur(Math.random()*600, Math.random()*600),
      new Wyvern(Math.random()*600, Math.random()*600),
      new Wyvern(Math.random()*600, Math.random()*600),
      new Zombie(Math.random()*600, Math.random()*600),
      new Zombie(Math.random()*600, Math.random()*600),
      new Zombie(Math.random()*600, Math.random()*600),
      new Antlion(Math.random()*600, Math.random()*600),
      new Antlion(Math.random()*600, Math.random()*600),
      new Antlion(Math.random()*600, Math.random()*600),
      new Skeleton(Math.random()*600, Math.random()*600),
      new Skeleton(Math.random()*600, Math.random()*600),
      new Skeleton(Math.random()*600, Math.random()*600),
    ]

    // Kickstart the render loop
    this.render();
  }

  // Draw the game
  render() {
    // Schedule the next render
    requestAnimationFrame(()=> {
      this.render()
    });

    // Clear the whole screen
    this.ctx.clearRect(0, 0, 800, 600);

    // Draw a goblin
    for (let c of this.creatures) {
      c.update();
      c.draw(this.ctx);
    }
  };
}
