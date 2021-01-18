class slingShot{
    constructor(x, y, body){
        const options={
            pointA:{
                x:x,
                y:y
            },
            bodyB: body,
            stiffness: 0.04,
            length: 20
        }
        this.sling = Matter.Constraint.create(options);
        Matter.World.add(world, this.sling);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
    }
    display(){
        
        if(this.sling.bodyB){
            push();
            stroke(0);
            strokeWeight(3)
            const posA = this.sling.pointA;
            const posB = this.sling.bodyB.position;
            //line(posA.x, posA.y, posB.x, posB.y);
            line(posA.x-30, posA.y, posB.x-12, posB.y)
            line(posA.x+30, posA.y, posB.x+12, posB.y)
            image(this.sling3, posB.x-25, posB.y, 15,20)
            pop();
        }
        image(this.sling1, 270,140,50,100);
        image(this.sling2, 240,130,50,70);
    }

    fly(){
        this.sling.bodyB = null;
    }
}