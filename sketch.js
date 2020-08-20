const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ball, ground;

function preload() {
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	ball = new Paper(200, 395, 70);	
	ground = new Ground(800, 400, 1600, 20);
	dustbin = new Dustbin(1200, 290, 200, 200);
	
	//dustbin1 = new Dustbin(1100, 290, 10, 200);
	//dustbin2 = new Dustbin(1200, 390, 200, 10);
	//dustbin3 = new Dustbin(1300, 290, 10, 200);
	
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(100);  

  ground.display();
  dustbin.display(); 
  ball.display();
  //dustbin1.display();
  //dustbin2.display();
  //dustbin3.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode == UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.body.position, {x:1100, y:-1100});
	}
}

