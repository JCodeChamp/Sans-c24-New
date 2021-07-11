const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, tower,cannon,ground;
var backgroundImg;

function preload(){
    backgroundImg = loadImage("./assets/background.gif")
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();

    world = engine.world;
        
    tower = new Tower(150, 350, 160, 310);
    cannon = new Cannon(155, 130, 220, 150, -PI/4);
    ground = new Ground(600,height - 20,1800,20);

  //  var cannonBally = cannon.y +cannon.height/2
    cannonBall = new CannonBall(cannon.x,cannon.y);
}

function draw(){
    background(189);
    Engine.update(engine);

    image(backgroundImg,0,0,width,height)

    tower.display();
    cannon.display();
    cannonBall.display();
}

function keyReleased(){
    if(keyCode === DOWN_ARROW){
        console.log("Key Pressed");
        cannonBall.shoot();
    }
}