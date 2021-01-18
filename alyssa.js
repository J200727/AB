var myWorld, myEngine,angela,sanjo,evanjo=[], ground;

function setup(){
    createCanvas(400,400)
    myEngine=Matter.Engine.create();
    myWorld=myEngine.world;
    angela=Matter.Bodies.rectangle(width/2,height-10,width,20,{isStatic:true});
    Matter.World.add(myWorld, angela)
    sanjo=Matter.Bodies.circle(200,0,20,{restution:7})
    Matter.World.add(myWorld,sanjo)
    ground=Matter.Bodies.rectangle(200,200,100,20,{isStatic:true,angle:PI/6})
    Matter.World.add(myWorld,ground)
}
function draw(){
    background("lightblue")
    Matter.Engine.update(myEngine)
    rectMode(CENTER);
    fill(0)
    rect(angela.position.x, angela.position.y, width, 20);
    ellipseMode(RADIUS)
    ellipse(sanjo.position.x,sanjo.position.y,20);
    for(var i=0;i<evanjo.length;i++){
      stroke("red")
      push()
      fill(random(0,255),random(0,255),random(0,255))
        ellipse(evanjo[i].position.x,evanjo[i].position.y,20)
        pop()
    }
    push()
    translate(ground.position.x,ground.position.y)
    rotate(PI/6)
    rect(0,0,100,20)
    pop()
}
function mouseDragged(){
   a=(Matter.Bodies.circle(mouseX,mouseY,20))
    
    evanjo.push(a);
    Matter.World.add(myWorld,a)

}