
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
  createCanvas(800, 700);
  
	engine = Engine.create();
  world = engine.world;
  
  ground = new Ground (400, 680, 800, 20);

  paper1 = new Paper (100, 50);
  
  binBase = new dustbinBase (600, 660, 100, 20);

  binSide1 = new dustbinSide (550, 620, 20, 100);

  binSide2 = new dustbinSide (650, 620, 20, 100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  paper1.display();
binBase.display();
binSide1.display();
binSide2.display();

}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
  }

}





