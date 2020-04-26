let angles = [90,180,270,360];

function preload() {
  soundFormats('mp3', 'ogg');
  ost = loadSound('music/twinkling.mp3');
}

function setup(){
  createCanvas(prompt("Укажите ширину холста"),prompt("Укажите высоту холста")); 
}

let g = prompt("Укажите необходимую толщину линии от 1 до 5");

function draw() {
  ost.setVolume(0.1);
  ost.play();
          background(random(0,255),random(0,255),random(0,255));
          noFill();
          //noLoop();
  
  for(let i = 50; i < width; i = i + 50) {
    for(let j = 50; j < height; j = j + 50) {
         push();
          translate(i, j);
          rotate(radians(random(angles)));
           stroke(random(0,255),random(0,255),random(0,255));
           strokeWeight(g);
          arc(0, 0, 50, 50, 0, HALF_PI); 
          arc(50, 50, 50, 50, 2*HALF_PI, 3*HALF_PI);
         pop();
      
     /* push();
          translate(i+50, j+50);
          rotate(radians(random(angles)));
          arc(50, 0, 50, 50, HALF_PI, 2*HALF_PI); 
          arc(0,50, 50, 50, -HALF_PI, TWO_PI);
         pop();*/
    
    }
   }
}
