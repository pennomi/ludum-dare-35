export class TerrainSprite {
  // Setup
  animations = {};

  // Loading
  public ready = false;
  private image;

  constructor() {
    this.image = new Image();
    this.image.onload = () => {
      console.log('Terrain loaded.');
      this.ready = true;
    };
    this.image.src = "assets/images/terrain.png";
  }

  draw(context) {
    if (!this.image) {
      return;
    }
    context.drawImage(this.image, -5, -5);
  }
}
