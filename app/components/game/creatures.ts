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
  public speed = 0;

  constructor(pos : Point) {
    this.pos = pos;
    this.target = new Point(null, null);
  }

  move(px, direction) {
    let px_diagonal = px / 2 * 2 ** .5;
    switch (direction) {
      case 0:
        this.pos.left(px);
        break;
      case 1:
        this.pos.left(px_diagonal);
        this.pos.up(px_diagonal);
      break;
      case 2:
        this.pos.up(px);
        break;
      case 3:
        this.pos.right(px_diagonal);
        this.pos.up(px_diagonal);
      break;
      case 4:
        this.pos.right(px);
        break;
      case 5:
        this.pos.right(px_diagonal);
        this.pos.down(px_diagonal);
      break;
      case 6:
        this.pos.down(px);
        break;
      case 7:
        this.pos.left(px_diagonal);
        this.pos.down(px_diagonal);
      break;
    }
  }

  update(dt, target : Point) {
    this.move(this.speed * dt, this.getDirection());
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
