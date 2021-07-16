var astronaut,bg,sleep,brush,gym,eat,drink,move,iss;

function preload(){
  bg = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  eat = loadAnimation("eat1.png","eat2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  move = loadAnimation("move.png","move1.png");
  bath = loadAnimation("bath1.png","bath2.png");

}



function setup() {
  createCanvas(900,600);

 iss = createSprite(450, 300,50,50);
 iss.addImage(bg);
iss.scale=0.18;
 
astronaut = createSprite(300,230);
astronaut.addAnimation("sleeping",sleep);
astronaut.scale=0.1;
}

function draw() {
  background(56);


  

if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing");
  astronaut.y=350;
  astronaut.velocityY=0;
  astronaut.velocityX=0;

}

if(keyDown("DOWN_ARROW")){
   astronaut.addAnimation("gymming",gym);
   astronaut.changeAnimation("gymming");
   astronaut.x=450;
   astronaut.y=400;
   astronaut.velocityY=0;
   astronaut.velocityX=0;


}

if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnimation("bathing");
  astronaut.x=450;
  astronaut.y=400;
  astronaut.velocityY=0;
  astronaut.velocityX=0;


}
if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating");
  astronaut.x=450;
  astronaut.y=400;
  astronaut.velocityY=0;
  astronaut.velocityX=0;


}
if(keyDown("SPACE")){
  astronaut.addAnimation("drinking",drink);
  astronaut.changeAnimation("drinking");
  astronaut.x=450;
  astronaut.y=400;
  astronaut.velocityY=0;
  astronaut.velocityX=0;


}
if(keyDown("M")){
  astronaut.addAnimation("moving",move);
  astronaut.changeAnimation("moving");
  astronaut.x=450;
  astronaut.y=20;
  astronaut.velocityY=-5;
  astronaut.velocityX=5;


}



  drawSprites();
}