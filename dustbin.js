class Dustbin {

    constructor(x,y,width,height){

        var option = {
            isStatic:true,
            restitution:0,
            friciton:1,
            density:0.1   
    }

    this.body = Bodies.rectangle(x,y,width,height,option);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    }

    display (){
      var  pos = this.body.position;

        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        }

}