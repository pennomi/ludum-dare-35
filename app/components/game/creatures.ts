import {BaseAnimationDef} from '../../animations/base';
import {GoblinAnimation} from '../../animations/goblin';

// An instance of a creature
export class Creature {
  // Animation
  animation: BaseAnimationDef;
  private lastFrameTime = new Date();
  private frame = 0;
  private currentState = "idle";

  // Position & Orientation
  public x = 0;
  public y = 0;
  public target_x = 0;
  public target_y = 0;

  // Combat
  public hp = 0;
  public damage = 0;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  update() {
    this.x += 1;
    this.frame += 1;
    this.frame %= 8;
  }

  draw(ctx) {
    // TODO: Calculate direction from target and position
    let direction = 4;
    this.animation.draw(ctx, "walk", this.frame, direction, this.x, this.y);
  }
}

export class Goblin extends Creature {
  animation = new GoblinAnimation();
}
