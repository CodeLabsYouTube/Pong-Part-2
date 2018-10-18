class Ball {
  constructor() {
    this.pos = createVector(random(width),random(height));
    this.yspeed = 3;
    this.xspeed = 3;
  }

  show() {
    fill(255);
    ellipse(this.pos.x,this.pos.y,30,30);
  }

  update() {
    this.pos.x += this.xspeed;
    this.pos.y += this.yspeed;
    if(this.pos.y > height) {
      this.yspeed = -random(3,5);
    } else if(this.pos.y < 0) {
      this.yspeed = random(3,5);
    }

    if(this.pos.x > width) {
      this.xspeed = -random(3,5);

    } else if(this.pos.x < 0) {
      this.xspeed = random(3,5);
    
    }
  }
}
