var backimg1,backimg2;
var princeimg1,prince,princeimg2,princessimg,princess,enemyimg,enemyFireimg,enemyDyeimg,beetleimg,beetle,enemy,castleimg;
var count=0;


function preload(){
backimg1=loadImage("images/image1.jpg");
backimg2=loadImage("images/image2.jpg");
princeimg1=loadAnimation("images/Prince walk1.png","images/Prince walk2.png","images/Prince walk3.png","images/Prince walk4.png");
princeimg2=loadAnimation("images/Prince attack1.png","images/Prince attack2.png","images/Prince attack3.png","images/Prince attack4.png");
princessimg=loadAnimation("images/princess1.png","images/princess2.png","images/princess3.png");
enemyimg=loadAnimation("images/enemy1.png","images/enemy2.png","images/enemy3.png","images/enemy4.png","images/enemy5.png","images/enemy6.png","images/enemy7.png")
enemyFireimg=loadAnimation("images/enemy fire1.png","images/enemy fire2.png");
enemyDyeimg=loadAnimation("images/Enemy dye1.png","images/Enemy dye2.png","images/Enemy dye3.png");
beetleimg=loadAnimation("images/Beetle1.png","images/Beetle2.png","images/Beetle3.png","images/Beetle4.png");
castleimg=loadImage("images/castle.png");
}
function setup() {
  createCanvas(600,600);
  prince=createSprite(550,350,40,40);
  prince.addAnimation("walk",princeimg1);
  prince.addAnimation("attack",princeimg2);
  prince.scale=2;
  prince.rotateToDirection=true;
  prince.debug=true;
  prince.setCollider("rectangle",-30,-30,30,60);     
  princess=createSprite(-2800,350,40,40);
  princess.addAnimation("wait",princessimg);
  princess.scale=5;
  beetle=createSprite(-1500,400,40,40);
  beetle.addAnimation("walk",beetleimg);
  beetle.scale=3;
  beetle.velocityX=1;
  enemy=createSprite(-2300,380,40,40);
  enemy.addAnimation("walk",enemyimg);
  enemy.addAnimation("fire",enemyFireimg);
  enemy.addAnimation("dye",enemyDyeimg);
  enemy.scale=4;
}

function draw() {
  background("#3C5C6B");  
  camera.position.x=prince.x;
  camera.position.y=300;
 imageMode(CORNER);
 image (backimg1,0,0,1200,600);
 image (backimg2,-1200,0,1200,600);
 image (castleimg,-3400,-150,2200,600);
 if(keyDown("left")){
   prince.x-=5;
 }
 if(keyDown("space")){
  prince.changeAnimation("attack",princeimg2);
 }else{
   prince.changeAnimation("walk",princeimg1);
 }
 if(prince.isTouching(enemy)){
    count=count+1;
    enemy.changeAnimation("fire",enemyFireimg);
    if(count===300){
      enemy.destroy();
    }
 }
 if(prince.isTouching(beetle)){
   beetle.destroy();
 }
 console.log(count)
  drawSprites();
}