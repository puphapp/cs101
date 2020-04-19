function setup() { 
  createCanvas(500, 500);
  strokeWeight();
  stroke(random(0,255), random(0,255), random(0,255));
  background(random(0,255), random(0,255), random(0,255), random(0,255)); 
  scale();

  //function draw(){
  angleMode(DEGREES);
  
  let x = random(1,359);
  
  for(let i = 10;i <= width; i+=70) {
    for (let j = 10;j <= height; j+=70) {
    
     push();
     translate(i,j);
     rotate(random(1,179));    
       fill(random(0,255), random(0,255), random(0,255));  
       arc(0, 0, random(50,100), random(50,100), 0, 0, x); 
  
       fill(random(0,255), random(0,255), random(0,255));  
       arc(0, 0, random(50,100), random(50,100), 0, x, 360); 
  
       fill(random(0,255), random(0,255), random(0,255));  
       arc(0, 0, random(20,50), random(20,50), 0, 0, x); 

       fill(random(0,255), random(0,255), random(0,255));  
       arc(0, 0, random(20,50), random(20,50), 0, x, 360); 
     pop();
  
    }
  }   
}
