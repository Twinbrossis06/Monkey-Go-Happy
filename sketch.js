
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var SurvivalTime=0;
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey=createSprite(70,315,20,20);
monkey.addAnimation("monkey",monkey_running);
monkey.scale=0.1;


ground=createSprite(400,350,900,10);

  

  FoodGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
  
  console.log(monkey.y)
  background("white")
  monkey.collide(ground); 
  
  if(keyDown("space")&& monkey.y>314){
    
    monkey.velocityY=-10;
  }
monkey.velocityY=monkey.velocityY+0.5;  
  textSize(30)
  
  text("Survival Time:"+SurvivalTime,100,60);
  SurvivalTime = SurvivalTime + Math.ceil(frameCount/109000000);
  drawSprites();
  spawnBananas();
  spawnobstacles();
}
function spawnBananas(){
if(frameCount%60===0){
banana=createSprite(600,Math.round(random(120,300)))
banana.velocityX=-9;
banana.addImage(bananaImage); 
  banana.scale=0.1;
  
  
  

}
  
  
}
function spawnobstacles(){
if(frameCount%200===0){
obstacle=createSprite(600,328,10,10);
obstacle.velocityX=-9;
obstacle.addImage(obstaceImage); 
 obstacle.scale=0.1;
  
  
  

}
  
  
}





