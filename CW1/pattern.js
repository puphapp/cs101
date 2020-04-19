let angles = [90,180,270,360];

function draw() {
          createCanvas(prompt("Укажите ширину холста"),prompt("Укажите высоту холста"));
          background(random(0,255),random(0,255),random(0,255));
          noFill();
          noLoop();
  
  let g = prompt("Укажите необходимую толщину линии от 1 до 5");
 
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
