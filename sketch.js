
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var PPB, container1, container2, container3, platform;

function preload(){
	
}

function setup(){
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	PPB = new Paperball(100, 600);

	container1 = createSprite(width/1.3, height-40, 200, 20, {isStatic:true});
	World.add(world, container1);
	container1.shapeColor = "red";

	container2 = createSprite(width/1.55, height-100, 10, 120, {isStatic:true});
	World.add(world, container2);
	container2.shapeColor = "red";

	container3 = createSprite(width/1.12, height-100, 10, 120, {isStatic:true});
	World.add(world, container3);
	container3.shapeColor = "red";	

	platform = new Ground(400, 655, 800, 10);

	Engine.run(engine);
  
}


function draw(){
  rectMode(CENTER);
  background(200);
  Engine.update(engine);

  PPB.display();
  platform.display();

  keyPressed();
  drawSprites();
 
}



function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(PPB.body,PPB.body.position,{x:85,y:-85});
	}
}