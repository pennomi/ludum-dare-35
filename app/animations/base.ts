export class BaseAnimationDef {
  // Setup
  animations = {};

  // Loading
  public ready = false;
  private image;

  constructor() {
    this.image = new Image();
    this.image.onload = () => {
      console.log('Image loaded: ' + this.getImageUrl());
      this.ready = true;
    };
    this.image.src = this.getImageUrl();
  }

  getImageUrl() { return undefined; }

  private getFrame(animation_name, frame_number, direction) {
    let frames = this.animations[animation_name]["frames"];
    return _.find(frames, (f) => {
      return f[0] == frame_number && f[1] == direction;
    })
  }

  draw(context, animation_name, frame, direction, x, y) {
    if (!this.image) {
      return;
    }
    let stuff = this.getFrame(animation_name, frame, direction);
    let image_x = stuff[2];
    let image_y = stuff[3];
    let w = stuff[4];
    let h = stuff[5];
    let offset_x = stuff[6];
    let offset_y = stuff[7];

    context.drawImage(this.image, image_x, image_y, w, h, x-offset_x, y-offset_y, w, h);
  }
}
