class slingshot{
    constructor(A,B){
        var properties={
                        bodyA:A,
                        pointB:B,
                        stiffness:0.2,
                        length:40
                }
        this.pointB=B
        this.thread=Constraint.create(properties)
        World.add(world,this.thread)
    }
    display(){
       if(this.thread.bodyA!=null){
        line(this.thread.bodyA.position.x,this.thread.bodyA.position.y,this.pointB.x,this.pointB.y)
       }
    }
    alyssa(){
        this.thread.bodyA=null
    }
}