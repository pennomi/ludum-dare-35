import {Creature} from './creatures';
import {SkeletonAnimation} from '../../animations/skeleton';
import {Point} from '../../utils/point';

export class Hero extends Creature {
  animation = new SkeletonAnimation();
  currentState = 'walk';
  getMaxHealth() { return 1000 }

  update(dt, target: Creature) {
    if (this.health <= 0) {
      this.health = 0;
      this.switchAnim('die');
    } else {
      // this.health -= .1;
      this.target = target;
    }
  }

  public draw(ctx) {
    this.drawAnimation(ctx);

    let health_bar = new Point(125, 20);
    this.drawHealthBar(ctx, 900 - 250, 25, health_bar, true);
  }
}
