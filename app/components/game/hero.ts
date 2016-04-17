import {Creature} from './creatures';
import {SkeletonAnimation} from '../../animations/skeleton';
import {Point} from '../../utils/point';

export class Hero extends Creature {
  animation = new SkeletonAnimation();
  currentState = 'walk';
  getMaxHealth() { return 100 }

  update(dt, target: Creature) {
    this.health -= .1;
    this.target = target;
  }

  public draw(ctx) {
    this.drawAnimation(ctx);

    let health_bar = new Point(125, 560);
    this.drawHealthBar(ctx, 900 - 250, 15, health_bar);
  }
}
