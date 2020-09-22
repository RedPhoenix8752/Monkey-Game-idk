var monkey = createSprite(80,350,20,50);
monkey.setAnimation("monkey");
monkey.scale = 0.1;

var ground = createSprite(200,380,400,10);
ground.velocityX = -6;
ground.x = ground.width /2;

var bananaGroup = createGroup();
var ObstaclesGroup = createGroup();

var survivalTime = 0;

function setup() {
  createCanvas(400, 400);


function spawnBanana(){
  if (World.frameCount % 80 === 0) {
     var banana = createSprite(400,395,10,10);
     banana.y = randomNumber(120,200);
     banana.setAnimation("Banana");
     banana.scale = 0.1;
     banana.velocityX = -3;
     banana.lifetime = 134;
     bananaGroup.add(banana);
  }
}

function spawnObstacle(){
  if (World.frameCount % 300 === 0) {
     var stone = createSprite(400,365,10,40);
     stone.y = randomNumber(120,200);
     stone.setAnimation("Stone");
     stone.scale = 0.5;
     stone.velocityX = -3;
     stone.lifetime = 134;
     ObstaclesGroup.add(stone);
  }
}
}
function draw (){
  
 background(255);
 
 if(keyDown("space") && monkey.y >= 359){
      monkey.velocityY = -12 ;
 }
 
 stroke ("black");
 textSize(20);
 fill("black");
 survivalTime = Math.ceil (frameCount/frameRate());
 text ("Survival Time: "+survivalTime,100,50);
 
 if (ground.x < 0){
      ground.x = ground.width/2;
 }
 
 monkey.velocityY = monkey.velocityY + 0.8;
  
  spawnBanana();
  spawnObstacle();
  
  monkey.collide(ground);
  
  drawSprites();
}


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}