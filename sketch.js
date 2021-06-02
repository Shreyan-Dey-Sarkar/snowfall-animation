const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var snow;
var bg; 
var bgImg;
var char; 
var charIdleAni;
var charWalkAni;
var charJumpAni;
var charTauntAni;
var charAttackAni;
var backgroundImg;
var engine,world;

var snow = [];

function preload(){
charIdleAni = loadAnimation("Minotaur_01_IdleBlinking_000.png",
"Minotaur_01_IdleBlinking_001.png",
"Minotaur_01_IdleBlinking_002.png",
"Minotaur_01_IdleBlinking_003.png",
"Minotaur_01_IdleBlinking_004.png","Minotaur_01_IdleBlinking_005.png",
"Minotaur_01_IdleBlinking_006.png","Minotaur_01_IdleBlinking_007.png",
"Minotaur_01_IdleBlinking_008.png","Minotaur_01_IdleBlinking_009.png",
"Minotaur_01_IdleBlinking_010.png","Minotaur_01_IdleBlinking_011.png");
charWalkAni = loadAnimation("Minotaur_01_Walking_001.png","Minotaur_01_Walking_002.png",
"Minotaur_01_Walking_003.png","Minotaur_01_Walking_004.png",
"Minotaur_01_Walking_005.png","Minotaur_01_Walking_006.png",
"Minotaur_01_Walking_007.png","Minotaur_01_Walking_008.png",
"Minotaur_01_Walking_009.png","Minotaur_01_Walking_010.png",
"Minotaur_01_Walking_011.png","Minotaur_01_Walking_012.png",
"Minotaur_01_Walking_013.png","Minotaur_01_Walking_014.png",
"Minotaur_01_Walking_015.png","Minotaur_01_Walking_016.png",
"Minotaur_01_Walking_017.png",)
bgImg = loadImage("maxresdefault.jpg");
}

function setup() {
  createCanvas(2000,1200);
  engine = Engine.create();
  world = engine.world;
 

  bg = createSprite(200, 200);
  bg.addImage(bgImg);
  bg.scale = 3.0;

  char = createSprite(500, 1000, 50, 50);
  char.addAnimation("Idle", charIdleAni);
  char.scale = 0.5;
}

function draw() {
  
  background(bgImg);

  Engine.update(engine);

  drawSprites();

  if(keyCode === 32){
    //char.x = x+1
    char.changeAnimation("Walk",charWalkAni);
   }
  
  //snow = new Snow
  if(frameCount%10===0){
    snow.push(new Snow(random(10, 2000), -10, 10, 5, 5));
    //snow.scale = 0.1;
  }

 for (var j = 0; j < snow.length; j++) {
  
    snow[j].display();
  }
}

//function keyPressed(){
 
//}



