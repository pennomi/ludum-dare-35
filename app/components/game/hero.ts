import {Creature} from './creatures';
import {SkeletonAnimation} from '../../animations/skeleton';
import {Point} from '../../utils/point';

export class Hero extends Creature {
  animation = new SkeletonAnimation();
  getMaxHealth() { return 100 };
  currentState = 'walk';

  update(dt, target: Creature) {
    this.target = target;
  }

  // draw(ctx) {
  //
  // }
}
