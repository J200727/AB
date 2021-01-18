const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var engine, world;
var box1, pig1;
var backgroundImg,platform;
var thread1;
function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    const canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
   

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 315, 300, 150);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    //log6 = new Log(200,200,80,PI/2);
    bird = new Bird(100,100,25)
    thread1 = new slingShot(280,150,bird.body);
    const mouse = Matter.Mouse.create(canvas.elt);
    var opt={
        mouse: mouse
    }
    mCon = Matter.MouseConstraint.create(engine, opt)
    Matter.World.add(world, mCon)
   //thread1=new slingshot(bird.body,{x:200,y:150})
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
  /*  console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);*/
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    
    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    //log6.display();
    bird.display();
  //console.log(bird.body.position)
    platform.display();
    thread1.display();
    text(bird.body.position.x+"\t"+mouseX+"\n"+bird.body.position.y+"\t"+mouseY,200,30)
}
function mouseReleased(){
    setTimeout(()=>{
        thread1.fly();
    }, 60)
   
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})

}

function keyPressed(){
    if(keyCode==32){
        thread1.sling.bodyB=bird.body;
    }
}