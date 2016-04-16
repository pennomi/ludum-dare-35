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
  public speed = 0;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(spaces) {
    let spaces_diagonal = spaces / 2 * 2 ** .5;
    switch (this.getDirection()) {
      case 0:
        this.x -= spaces;
      break;
      case 1:
        this.x -= spaces_diagonal;
        this.y -= spaces_diagonal;
      break;
      case 2:
        this.y -= spaces;
      break;
      case 3:
        this.x += spaces_diagonal;
        this.y -= spaces_diagonal;
      break;
      case 4:
        this.x += spaces;
      break;
      case 5:
        this.x += spaces_diagonal;
        this.y += spaces_diagonal;
      break;
      case 6:
        this.y += spaces;
      break;
      case 7:
        this.x -= spaces_diagonal;
        this.y += spaces_diagonal;
      break;
    }
  }

  update(dt, mouse_x, mouse_y) {
    this.target_x = mouse_x;
    this.target_y = mouse_y;
    this.move(this.speed * dt);
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
  speed = 20;
}

export class Wyvern extends Creature {
  animation = new WyvernAnimation();
  speed = 40;
}

export class Zombie extends Creature {
  animation = new ZombieAnimation();
  speed = 15;
}

export class Skeleton extends Creature {
  animation = new SkeletonAnimation();
  speed = 20;
}

export class Minotaur extends Creature {
  animation = new MinotaurAnimation();
  speed = 80;
}

export class Antlion extends Creature {
  animation = new AntlionAnimation();
  speed = 40;
}
