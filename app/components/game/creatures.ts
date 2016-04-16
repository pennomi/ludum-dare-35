import {BaseAnimationDef} from '../../animations/base';
import {GoblinAnimation} from '../../animations/goblin';
import {ZombieAnimation} from '../../animations/zombie';
import {WyvernAnimation} from '../../animations/wyvern';
import {AntlionAnimation} from '../../animations/antlion';
import {SkeletonAnimation} from '../../animations/skeleton';
import {MinotaurAnimation} from '../../animations/minotaur';
import {Point} from '../../utils/point';

// An instance of a creature
export class Creature {
  // Animation
  animation: BaseAnimationDef;
  private lastFrameTime = 0;
  private frame = 0;
  private currentState = "walk";

  // Position & Orientation
  public pos : Point;
  public target : Point;

  // Combat
  public hp = 0;
  public damage = 0;

  constructor(pos : Point) {
    this.pos = pos;
    this.target = new Point(null, null);
  }

  move(spaces, direction) {
    switch (direction) {
      case 0:
        this.pos.x -= spaces;
      break;
      case 1:
        this.pos.x -= spaces;
        this.pos.y -= spaces;
      break;
      case 2:
        this.pos.y -= spaces;
      break;
      case 3:
        this.pos.x += spaces;
        this.pos.y -= spaces;
      break;
      case 4:
        this.pos.x += spaces;
      break;
      case 5:
        this.pos.x += spaces;
        this.pos.y += spaces;
      break;
      case 6:
        this.pos.y += spaces;
      break;
      case 7:
        this.pos.x -= spaces;
        this.pos.y += spaces;
      break;
    }
  }

  update(target : Point) {
    this.move(1, this.getDirection());
    this.target = target;
  }

  private getDirection() {
    let dx = this.pos.x - this.target.x;
    let dy = this.pos.y - this.target.y;
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

    this.animation.draw(ctx, this.currentState, this.frame, this.getDirection(), this.pos.x, this.pos.y);
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
