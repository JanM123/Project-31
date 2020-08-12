const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

var engine, world;
var ground;

var particlesArray = [];
var plinkosArray = [];
var divisionArray = [];

var divisionHeight = 300;
var width = 480
var height = 800

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240, 790, 480, 20);

  for(var a = 0; a <= width; a = a + 80) {
    divisionArray.push(new Divisions(a, height - divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 40; j <=width; j = j + 50) {
    plinkosArray.push(new Plinko(j, 75, 15));
  }

  for(var j = 15; j <=width-10; j = j + 50) {
    plinkosArray.push(new Plinko(j, 175, 15));
  }

  for(var j = 40; j <=width; j = j + 50) {
    plinkosArray.push(new Plinko(j, 275, 15));
  }

  for(var j = 15; j <=width-10; j = j + 50) {
    plinkosArray.push(new Plinko(j, 375, 15));
  }

  

}

function draw() {
  background("black");  

  Engine.update(engine);

  ground.display();

  for(var a = 0; a < divisionArray.length; a++) {
    divisionArray[a].display();
  }

  for(var j = 0; j < plinkosArray.length; j++) {
    plinkosArray[j].display();
  }

  if(frameCount % 50 === 0) {
    particlesArray.push(new Particle(random(width/2 - 10, width/2 + 10), 10, 10)); 
  }

  for(var k = 0; k < particlesArray.length; k++) {
    particlesArray[k].display();
  }

  //console.log(frameCount);

  drawSprites();
}