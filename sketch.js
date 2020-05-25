var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var paper1, ground1, dustbin1, dustbin2, dustbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper();
	ground1 = new Ground(200,680,2000,10);
	dustbin1 = new Dustbin(500,670,20,100);
	dustbin2 = new Dustbin(590,670,250,20);
	dustbin3 = new Dustbin(740,670,20,100);


	Engine.run(engine);
  
}

function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  paper1.display(); 
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}
function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:0.25,y:-0.4})
	}
}



