
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const  Render  = Matter.Render;
const Constraint = Matter.Constraint;


var roof1,rope1,rope2,rope3,rope4,rope5;
var ball1,ball2,ball3,ball4,ball5;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
  rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  roof1 = new Roof(width/2,height/4,width/7,20);
  
  ballDiameter = 40;

  startBallPositionX = width/2;
  startBallPositionY = height/4+500;

  ball1 = new ball(startBallPositionX- ballDiameter*2,startBallPositionY-10, ballDiameter);
  
  ball2 = new ball(startBallPositionX- ballDiameter,startBallPositionY, ballDiameter);
  
  ball3 = new ball(startBallPositionX,startBallPositionY, ballDiameter);
  
  ball4 = new ball(startBallPositionX+ ballDiameter,startBallPositionY, ballDiameter);
  
  ball5 = new ball(startBallPositionX+ ballDiameter*2,startBallPositionY, ballDiameter);
  
  var render = Render.create({
  element:document.body,
  engine: engine,
  options1: {

    width:1200,
    height:700,
    wireframes:false
  
  }
 });
 
 rope1 = new chain(ball1.body,roof1.body,- ballDiameter*2,0);

 rope2 = new chain(ball2.body,roof1.body,- ballDiameter*1,0);

 rope3 = new chain(ball3.body,roof1.body,0,0);

 rope4 = new chain(ball4.body,roof1.body, ballDiameter*1,0);

 rope5 = new chain(ball5.body,roof1.body, ballDiameter*2,0);

  /*constraint1 = {
   bodyA:ball1.body,
   bodyB:roof1Object.body,
   pointB:{x:-ball*2,y:0}

  }
  constraint2 = {
    bodyA:ball2.body,
    bodyB:roof1Object.body,
    pointB:{x:-ball,y:0}
 
   }
   constraint3 = {
    bodyA:ball3.body,
    bodyB:roof1Object.body,
    pointB:{x:0,y:0}
 
   }
   constraint4 = {
    bodyA:ball4.body,
    bodyB:roof1Object.body,
    pointB:{x:-ball,y:0}
 
   }
   constraint5 = {
    bodyA:ball5.body,
    bodyB:roof1Object.body,
    pointB:{x:-ball*2,y:0}
 
   }

   var pandulum1 = Constraint.create(constraint1);

   var pandulum2 = Constraint.create(constraint2);

   var pandulum3 = Constraint.create(constraint3);

   var pandulum4 = Constraint.create(constraint4);

   var pandulum5 = Constraint.create(constraint5);

   World.add(world,pendulum1);
   World.add(world,pendulum2);
   World.add(world,pendulum3);
   World.add(world,pendulum4);
   World.add(world,pendulum5);
   */
  
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);

  roof1.display();
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();







  drawSprites();
 
}



