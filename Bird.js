class Bird{
  constructor(x,y,r){
    this.smoke=loadImage("sprites/smoke.png")
    this.sanjo=[]
    this.r = r;
    var properties ={
      restitution:0.5,
      density:4,
      friction:1
    }
    this.body = Matter.Bodies.circle(x, y, this.r, properties);
    Matter.World.add(world, this.body)
    this.image = loadImage("sprites/bird.png");
  }
  smoke(){
   
  }
  display() {
    
    
   const position = this.body.position;
   const angle = this.body.angle;
   push();
   imageMode(CENTER)
   translate(position.x, position.y);
   rotate(angle);
   fill("red");
   imageMode(RADIUS)
   image(this.image, 0, 0, this.r*2, this.r*2);
  
   pop();
  // if(this.body.position.x>344){
    this.sanjo.push([this.body.position.x,this.body.position.y])
    
    for(var i=0;i<this.sanjo.length;i++){
      console.log("draw"+this.sanjo[i])
      
    image (this.smoke,this.sanjo[i][0],this.sanjo,[i][1],10,10)

  }
  //}
   
  }
 
}
