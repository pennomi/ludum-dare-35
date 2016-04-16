import {BaseAnimationDef} from '../../animations/base';
import {GoblinAnimation} from '../../animations/goblin';
import {ZombieAnimation} from '../../animations/zombie';
import {WyvernAnimation} from '../../animations/wyvern';
import {AntlionAnimation} from '../../animations/antlion';
import {SkeletonAnimation} from '../../animations/skeleton';
import {MinotaurAnimation} from '../../animations/minotaur';

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

  move(spaces) {
    switch (this.getDirection()) {
      case 0:
        this.x -= spaces;
      break;
      case 1:
        this.x -= spaces;
        this.y -= spaces;
      break;
      case 2:
        this.y -= spaces;
      break;
      case 3:
        this.x += spaces;
        this.y -= spaces;
      break;
      case 4:
        this.x += spaces;
      break;
      case 5:
        this.x += spaces;
        this.y += spaces;
      break;
      case 6:
        this.y += spaces;
      break;
      case 7:
        this.x -= spaces;
        this.y += spaces;
      break;
    }
  }

  update(mouse_x, mouse_y) {
    this.move(.25);
    this.target_x = mouse_x;
    this.target_y = mouse_y;
  }

  private getDirection() {
    let dx = this.x - this.target_x;
    let dy = this.y - this.target_y;
    if (Math.abs(dx) > 2 * Math.abs(dy)) {
      return dx < 0 ? 4 : 0;
    } else if (Math.abs(dy) > 2 * Math.abs(dx)) {
      return dy < 0 ? 6 : 2;
    } else if (dx > 0 && dy > 0) {
      return 1;
    } else if (dx < 0 && dy < 0) {
      return 5;
    } else if (dx > 0 && dy < 0) {
      return 7;
    } else if (dx < 0 && dy > 0) {
      return 3;
    }
    return 0;
  }

  public draw(ctx) {
    let direction = this.getDirection();

    let now = Date.now();
    let animationDuration = this.animation.animations[this.currentState].duration;
    let needsNewFrame = now - this.lastFrameTime > animationDuration;

    if (needsNewFrame) {
      let frameCount = this.animation.animations[this.currentState].frames.length / 8;
      this.frame = (this.frame + 1) % frameCount;
      this.lastFrameTime = now;
    }

    this.animation.draw(ctx, this.currentState, this.frame, this.getDirection(), this.x, this.y);
  }
}

export class Goblin extends Creature {
  animation = new GoblinAnimation();
}

export class Wyvern extends Creature {
  animation = new WyvernAnimation();
}

export class Zombie extends Creature {
  animation = new ZombieAnimation();
}

export class Skeleton extends Creature {
  animation = new SkeletonAnimation();
}

export class Minotaur extends Creature {
  animation = new MinotaurAnimation();
}

export class Antlion extends Creature {
  animation = new AntlionAnimation();
}
