var ground,groundimg;
var trex ,trex_running;
function preload(){
trex_running = loadAnimation ("trex1.png","trex3.png","trex4.png"); 
groundimg = loadImage ("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
 trex=createSprite (150, 150, 150, 150);
 trex.addAnimation("Running",trex_running);
 trex.scale = 0.5;
 ground = createSprite (1000, 200, 100, 100);
 ground.addImage(groundimg)
 ground.velocityX =-4
}

function draw(){
  background("white");
  if(keyDown("space")){
    trex.velocityY=-10
  }
  trex.velocityY = trex.velocityY +0.5;
  trex.collide(ground);
  drawSprites();

}
