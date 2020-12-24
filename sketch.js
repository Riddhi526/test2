
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperBody;
var dustbin1,dustbin2,dustbin3;
var ground1;
function preload()
{
	
}

function setup() {
	createCanvas(1400, 600);


	engine = Engine.create();
	world = engine.world;
   paperBody = new Paper(200,100,40);
   dustbin1 = new Dustbin(990, 455, 200, 250);
   
   ground1 = new Ground(700,590,1400,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperBody.display();
  dustbin1.display();
  
  ground1.display();
  keyPressed();
  drawSprites();
 
}
function keyPressed(){
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(paperBody.body,paperBody.body.position,{x:15,y:4});
  }
}


