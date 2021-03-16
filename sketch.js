var player;
var maincar;
var ground,groundimg;

function preload() {
    maincarimg = loadImage("images/bluecar.png")
    groundimg = loadImage("images/ground2.png")
}

function setup() {
    createCanvas(displayWidth,displayHeight- 133)

   maincar = createSprite(100,displayHeight -180) 
   maincar.addImage(maincarimg)
   maincar.scale = 0.3

   ground = createSprite(0,displayHeight -150,displayWidth,5)
   ground.addImage(groundimg)
   ground.velocityX = -4
}

function draw() {
    background("black")
     //restting the ground
     if(ground.x<500){
         ground.x = ground.width/2
     }
    drawSprites()
}