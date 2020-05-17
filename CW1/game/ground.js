class Ground
{
    constructor()
    {
        this.y = 0;
        this.x = x;
    }
  
    update() 
    {
        this.x += speed; 
        if(this.x > window.innerHeight)
        {
            this.x = road.x - this.image.height + speed;
        }
    }
  
  show()
  {
    image(gImg, this.x, this.y);
  }
}