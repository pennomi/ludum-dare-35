import {BaseAnimationDef} from '../../animations/base';
import {GoblinAnimation} from '../../animations/goblin';

// An instance of a creaturee
export class Creature {
  // Animation
  animation: BaseAnimationDef;
  private lastFrameTime = 0;
  private frame = 0;
  private currentState = "walk";

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
  }

  draw(ctx) {
    // TODO: Calculate direction from target and position
    let direction = 4;

    let now = Date.now();
    let animationState = this.animation.animations[this.currentState].duration;
    let needsNewFrame = false;

    /* animationState / 1000 */
    if (now - this.lastFrameTime > animationState) {
      needsNewFrame = true;
    }

    if (needsNewFrame) {
      this.frame += 1;
      this.frame %= 8;
      this.lastFrameTime = now;
    }


    this.animation.draw(ctx, this.currentState, this.frame, direction, this.x, this.y);

  }
}

export class Goblin extends Creature {
  animation = new GoblinAnimation();
}
