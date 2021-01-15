var canvas;
var music;
var red,blue,green, yellow,pink;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
red = createSprite(600,585,120,20);
red.shapeColor="red";

blue = createSprite(450,585,120,20);
blue.shapeColor="blue";

yellow = createSprite(300,585,120,20);
yellow.shapeColor="yellow";

green = createSprite(150,585,120,20);
green.shapeColor="green";

box = createSprite(random(20,750),100,20,20);
box.shapeColor="white";
box.velocityY=6;
box.velocityX=-6;

}

function draw() {
    background(0,0,0);

    if(red.isTouching(box) && box.bounceOff(red)){
        box.shapeColor="red";
      
    }
   
    if(blue.isTouching(box) && box.bounceOff(blue)){
        box.shapeColor="blue";
       
    }

    if(green.isTouching(box) && box.bounceOff(green)){
        box.shapeColor="green";
       
    }

    if(yellow.isTouching(box)){
        box.shapeColor="yellow";
        box.velocityX=0;
        box.velocityY=0;
      
    }

    edges = createEdgeSprites();
    box.bounceOff(edges);
    

drawSprites();

}
