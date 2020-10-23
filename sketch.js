var bullet,wall;
var mark1;
var wall;
var thickness=Math.round(random(22,83));
var bulletSpeed,bulletWeight;
var damage;

function setup() {
  createCanvas(800,400);

  bulletSpeed=random(30,52);
  bulletWeight=random(223,321);
 mark1=createSprite(10,200,1600,5);
 mark1.shapeColor="black";
 

 bullet = createSprite(150,300,60,10);
 bullet.shapeColor="white";

 wall=createSprite(740,300,200,height/2);
 wall.shapeColor=(80,80,80);

}

function draw() {
  background("lightblue");  

if(keyDown("e")&& bullet.x===150){

bullet.velocityX=bulletSpeed;  

}
if(isTouched(bullet,wall)){

  bullet.velocityX=0;

  damage=0.5*bulletWeight*bulletSpeed*bulletSpeed/(wall.width*wall.width*wall.width)
if(damage>10){
  wall.shapeColor="red"
}
if(damage<10 && damage>0){
  wall.shapeColor="green"
}
}

  drawSprites();

  //Displaying the Texts
  textSize(35);
  fill("red");
  text("Military Bullet Tes",250,50);
  text("Press 'E' to Start the test.",200,150);

}
