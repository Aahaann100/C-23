 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies =Matter.Bodies;//namespace

var myengine ,myworld;
var ground;
var box1;

function setup() {
  createCanvas(800,400);

  myengine = Engine.create();
  myworld = myengine.world

  
  
 
box1 = new Box(230,100,40,40)

box2 = new Box(200,200,40,100)
console.log(box1)

ground = new Ground(400,390,800,20)
  
}

function draw() {
  background(180); 
  Engine.update(myengine) 

  
box1.display()
box2.display()
ground.display()
 

}