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

  update(mouse_x, mouse_y) {
    this.x += 1;
    this.target_x = mouse_x;
    this.target_y = mouse_y;
  }

  draw(ctx) {
    // TODO: Calculate direction from target and position
    let direction = 4;

    let now = Date.now();
    let animationDuration = this.animation.animations[this.currentState].duration;
    let needsNewFrame = now - this.lastFrameTime > animationDuration;

    if (needsNewFrame) {
      let frameCount = this.animation.animations[this.currentState].frames.length / 8;
      this.frame = (this.frame + 1) % frameCount;
      this.lastFrameTime = now;
    }

    this.animation.draw(ctx, this.currentState, this.frame, direction, this.x, this.y);
  }
}

export class Goblin extends Creature {
  animation = new GoblinAnimation();
}
