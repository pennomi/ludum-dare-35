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
  currentState = "walk";
  private lastFrameTime = 0;
  private frame = 0;

  // Position & Orientation
  public pos : Point;
  public target : Creature;

  // Combat
  public damage = 10;
  public speed = 1;
  public getMaxHealth() { return 100; }
  public health = this.getMaxHealth();

  constructor(pos : Point) {
    this.pos = pos;
    this.target = undefined;
  }

  private healthPercent() {
    let percent = this.health / this.getMaxHealth();
    return percent;
  }

  private getDirection() {
    let dx = this.pos.x - this.target.pos.x;
    let dy = this.pos.y - this.target.pos.y;

    if (Math.abs(dx) + Math.abs(dy) < 1) {
      return -1;
    } else if (Math.abs(dx) - Math.abs(dy) > 5) {
      return dx < 0 ? 4 : 0;
    } else if (Math.abs(dy) - Math.abs(dx) > 5) {
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

  getHit(damage) {
    this.health -= damage;
  }

  update(dt, target : Creature) {
    this.target = target;
    let dx = this.pos.x - this.target.pos.x;
    let dy = this.pos.y - this.target.pos.y;

    if (Math.abs(dx) < 35 && Math.abs(dy) < 35) {
      this.currentState = 'attack';
    } else {
      this.currentState = 'walk';
      this.move(this.speed * dt, this.getDirection());
    }
  }

  public drawAnimation(ctx) {
    let now = Date.now();
    let animationDuration = this.animation.animations[this.currentState].duration;
    let needsNewFrame = now - this.lastFrameTime > animationDuration;

    if (needsNewFrame) {
      let frameCount = this.animation.animations[this.currentState].frames.length / 8;
      this.frame = (this.frame + 1) % frameCount;
      this.lastFrameTime = now;
    }
    if (this.currentState == 'attack') {

    }

    let direction = this.getDirection();
    this.animation.draw(ctx, this.currentState, this.frame, direction == -1 ? 0 : direction, this.pos.x, this.pos.y);
  }

  public drawHealthBar(ctx, length, height, pos: Point) {
    let health_bar_length = length * this.healthPercent();

    let foreground = 'rgba(20, 255, 20, 0.75)';
    let background = 'rgba(255, 20, 20, 1)';

    ctx.fillStyle = background;
    ctx.fillRect(pos.x, pos.y, length, height);
    if (this.health >= this.getMaxHealth()) {
      ctx.fillStyle = foreground;
      ctx.fillRect(pos.x, pos.y, length, height);
      return;
    }
    if (this.health >= 0) {
      ctx.fillStyle = foreground;
      ctx.fillRect(pos.x, pos.y, health_bar_length, height);
    }
  }

  public draw(ctx) {
    this.drawAnimation(ctx);

    let health_bar = new Point(this.pos.x - 30, this.pos.y - 75);
    this.drawHealthBar(ctx, 60, 5, health_bar);
  }
}

export class Goblin extends Creature {
  animation = new GoblinAnimation();
  getMaxHealth() { return 100 }
  speed = 20;
}

export class Wyvern extends Creature {
  animation = new WyvernAnimation();
  getMaxHealth() { return 100 }
  speed = 40;
}

export class Zombie extends Creature {
  animation = new ZombieAnimation();
  getMaxHealth() { return 100 }
  speed = 15;
}

export class Skeleton extends Creature {
  animation = new SkeletonAnimation();
  getMaxHealth() { return 100 }
  speed = 40;
}

export class Minotaur extends Creature {
  animation = new MinotaurAnimation();
  getMaxHealth() { return 100 }
  speed = 80;
}

export class Antlion extends Creature {
  animation = new AntlionAnimation();
  getMaxHealth() { return 100 }
  speed = 40;
}
