class dustbin {

    constructor(x,y){
        this.x = x;
        this.y = y;
        this.dustbinWidth =200;
        this.dustbinHeight = 200;
        this.wallThikness=20;
        this.angle =0;
        
        this.bottomBody = Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,{isStatic:true});
        
        this.leftWallBody = Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true});
        Matter.Body.setAngle(this.leftWallBody, this.angle);
        this.rightWallBody = Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThikness,this.dustbinHeight,{isStatic:true});
        Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
        World.add(world,this.rightWallBody)
        World.add(world,this.leftWallBody)
        World.add(world,this.bottomBody);
    }
    display(){
        var bpos=this.bottomBody.position
        var lpos = this.leftWallBody.position
        var rpos =this.rightWallBody.position
        push();
        translate(lpos.x,lpos.y)
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(255)
        stroke(255)
        rotate(this.angle)
        rect(0,0,this.wallThikness,this.dustbinHeight);
        pop();

        push();
        translate(rpos.x,rpos.y);        
        rectMode(CENTER);        
        angleMode(RADIANS);
        fill(255);
        stroke(255);
        rotate(-1*this.angle);
        rect(0,0,this.wallThikness,this.dustbinHeight);
        pop();

        push();
        translate(bpos.x,bpos.y);        
        rectMode(CENTER);        
        angleMode(RADIANS);
        fill(255);
        stroke(255);
        rotate(-1*this.angle);
        rect(0,0,this.dustbinWidth,this.wallThikness);
        pop();
    }
}