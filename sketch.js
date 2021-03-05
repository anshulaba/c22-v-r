const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,body;

function setup()
{
  createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;

  var options = { 'restitution' : 2.0 }
  body=Bodies.rectangle(200,200,50,50,options);
  World.add(world,body);

  var groundoptions = { 'isStatic' : true }
  ground=Bodies.rectangle(200,390,400,20,groundoptions);
  World.add(world,ground);

  var balloptions = { 'restitution' : 1.5 }
  ball=Bodies.circle(250,250,20,balloptions);
  World.add(world,ball);
}


function draw()
{
  background("gold");
  Engine.update(engine);
  rectMode(CENTER);
  rect(body.position.x,body.position.y,50,50);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}