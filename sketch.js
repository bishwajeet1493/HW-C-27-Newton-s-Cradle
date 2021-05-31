
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5, roof;
var rope1, rope2, rope3, rope4, rope5;
var world;

function setup() {
	createCanvas(1200, 900);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	roof=new Roof(width/2, width/4, width/7, 20);
	
	startBobPositionX = width/2;
	startBobPositionY = width/4+500;

	bob1 = new Bob(startBobPositionX-20*2, startBobPositionY, 20);
	bob2 = new Bob(startBobPositionX-20, startBobPositionY, 20);
	bob3 = new Bob(startBobPositionX, startBobPositionY, 20);
	bob4 = new Bob(startBobPositionX+20, startBobPositionY, 20);
	bob5 = new Bob(startBobPositionX+20*2, startBobPositionY, 20);

	rope1 = new Rope(bob1.body, roof.body, -20*2, 0);
	rope2 = new Rope(bob2.body, roof.body, -20, 0);
	rope3 = new Rope(bob3.body, roof.body, 0, 0);
	rope4 = new Rope(bob4.body, roof.body, 20, 0);
	rope5 = new Rope(bob5.body, roof.body, 20*2, 0);

	
}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
}






