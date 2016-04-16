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

    // angle as radians
    // x1 + length * Math.cos(angle)
    // y1 + length * Math.sin(angle)

    this.target_x = mouse_x;
    this.target_y = mouse_y;
  }

  private getDirection() {
    return 7;
  }

  private degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
  }

  private segmentDivider(ctx, num, x1, y1, length, angle) {
    angle = this.degreesToRadians(angle);
    let to = {
      x: x1 + length * Math.cos(angle),
      y: y1 + length * Math.sin(angle)
    }
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.font = '14px Arial';
    ctx.fillText(num, to.x, to.y);
    ctx.moveTo(x1, y1);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
  }

  draw(ctx) {
    for (let seg = 0; seg < 8; seg++) {
      this.segmentDivider(ctx, seg, this.x, this.y, 80, (seg * 45) - 180);
    }

    // TODO: Calculate direction from target and position
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
