let krtek;
let krtek2;
let ground;
let score = 0;
let scroll = 10;
let scrollG = 0;
let GRAVITY = 1;
let JUMP = 20;
let GROUND_Y = 100;
let groundSpeed = 3;
let acceleration = 0.8;
let direction = 0;
var restart=false;

function preload(){
 jump = loadSound('assets/jump.mp3'); 
 ost = loadSound('assets/polka.mp3');
 fail = loadSound('assets/fail.wav');
}

function setup() {
  createCanvas(700, 500);
  krtek = createSprite(95, 450,'assets/krtek/tile001.png', 'assets/krtek/tile02.png');
  krtek.addAnimation('stretch','assets/krtek/tile001.png', 'assets/krtek/tile0001.png');
  krtek.addAnimation('normal','assets/krtek/tile001.png', 'assets/krtek/tile02.png');
  krtek.scale = 0.6;
  krtek.setCollider('circle', 0, 0, 80);
  
  gImg = loadImage('assets/ground.png');
  
  ground = createSprite(350,500);
  ground.addImage(gImg);
  ground.scale = 0.6;
  ground.setCollider('rectangle', 0, 0, width*2,180);
  ground.depth = 2;
  
  bgImg = loadImage('assets/back.png');
  
  krtek2 = createSprite(random(100, width), random(400,450));
  krtek2.addAnimation('normal','assets/krtek2/tile1.png', 'assets/krtek2/tile4.png');
  krtek2.scale = 0.5;
  krtek2.setCollider('circle', 0, 0, 80);
  krtek2.depth = 1;
  krtek2.velocity.x = -3;
  
  updateSprites(false); 
  
  createP('Hello! Press space to jump')
}

function draw() {  
  background(bgImg);
  
  image(gImg, -scrollG, 440, width, 100);
  image(gImg, -scrollG + width, 440, width, 100);
    
  if (scrollG > width) {
    scrollG = 0;
  }
  
  krtek.velocity.y += GRAVITY;
    
  if(krtek.collide(ground)) {
    krtek.velocity.y = 0;
    krtek.changeAnimation('normal');
  }
  
      if(keyWentDown('x') || mouseWentDown(LEFT))
  {
    krtek.changeAnimation('stretch');
    krtek.animation.rewind();
    krtek.velocity.y = -JUMP;
    jump.play();
  }
  
  if(krtek2.position.x < 0)
    krtek2.position.x = width;
    
  fill(0)
  textSize(20);
  textFont('helvetica');
  text(`Score: ${score}`, 10, 30);
  
  if (frameCount % 25 == 0) {
    score++;
  }  
  
  if(krtek.collide(krtek2)) {
      noLoop()
      ost.stop();
      fail.play();
      
      fill(0)
      textSize(20);
      textFont('helvetica');
      text(`Game Over! Press space to restart`, 200 , height/2)
      restart = true;
    } 
  drawSprites();
  scroll += 0.002;
  scrollG += scroll / 5;
}

function keyPressed() {
  if (restart){
    restart = false;
    score = 0;
    scrollG = 0;
    scroll = 10;
    ost.play();
    loop();
  }
  if (key == ' ') {
      newGame();
      return false;
  }
}

function newGame() {
  updateSprites(true);
  krtek.velocity.y = -JUMP;
}