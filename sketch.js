
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paper1,dustbinobj
function preload()
{
	dustImage=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.\
	dustimage=createSprite(1200,500,100,200);
	dustimage.addImage(dustImage);
	dustbinobj = new dustbin(1200,650);
	paper1= new paper(200,450,70);
	groundObj = new ground(width/2,670,width,20);
	

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
	}
	});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  dustbinobj.display();
  groundObj.display();
  
 drawSprites();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:200,y:-100})

	}
	
}



