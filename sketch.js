var ball;
var Box;
var box1;
var box2;
var box3;
var ground;
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

	var options = {
		isStatic:true
	  }
	
	  ground = Bodies.rectangle(350, 600, 900, 10, options);
	  World.add(world, ground);
	
	  var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	  }
	  ball=Bodies.circle(200,150,25,ball_options);
	  World.add(world,ball);


	Engine.run(engine);

	 box1=createSprite(615,570,10,50);
	 box1.shapeColor="white"
	 box2=createSprite(680,590,125,10);
	 box2.shapeColor="white";
	 box3=createSprite(745,570,10,50);
	 box3.shapeColor="white";

   
}


function draw() {
  background(0);
  rectMode(CENTER);
  fill("yellow");
  rect(ground.position.x,ground.position.y,900,10);
  fill("purple");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25);
  
  

  drawSprites();
  
 
 
}

 function KeyPressed() {
	 if (keyCode === UP_ARROW){
		 Matter.Body.applyForce(paperObject.Body,paperObject.body.position,{x:85,y:-85})
	 }
 }



