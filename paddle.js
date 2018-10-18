class Paddle {
  constructor(x,y) {
    this.pos = createVector(x,y);
  }

  show() {
    fill(255);
    rect(this.pos.x,this.pos.y,20,100);
  }

  hits(ball) {
    if((this.pos.x < ball.pos.x && this.pos.x + 20 > ball.pos.x)&&(this.pos.y <= ball.pos.y && this.pos.y + 100 > ball.pos.y)) {
      return true;
    }
    return false;
  }

}
