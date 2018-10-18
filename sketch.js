let ball;
let paddle1;
let paddle2;
let p1Score = 0;
let p2Score = 0;

function setup() {
  createCanvas(600,400);
  ball = new Ball();
  paddle1 = new Paddle(40,150);
  paddle2 = new Paddle(540,150);
}

function draw() {
  background(0);
  noStroke();
  border();
  ball.show();
  ball.update();
  paddle1.show();
  paddle2.show();
  score();
  textSize(64);
  text(p1Score,100,50);
  text(p2Score,480,50);


  if(paddle1.hits(ball)) {
    ball.xspeed = random(3,5);
  }

  if(paddle2.hits(ball)) {
    ball.xspeed = -random(3,5);
  }
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    paddle2.pos.y -= 30;
  } else if(keyCode === DOWN_ARROW) {
    paddle2.pos.y += 30;
  }

  if(key == 'w') {
    paddle1.pos.y -= 30;
  } else if(key == 's') {
    paddle1.pos.y += 30;
  }
}


function border() {
  rect(280,0,20,40);
  rect(280,60,20,40);
  rect(280,120,20,40);
  rect(280,180,20,40);
  rect(280,240,20,40);
  rect(280,300,20,40);
  rect(280,360,20,40);
}

function score() {

  if(ball.pos.x > width) {
    p1Score++;
  } else if(ball.pos.x < 0) {
    p2Score++;
  }
}
