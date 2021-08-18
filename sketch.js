var movingrect, fixedrect;
var rect1, rect2;

function setup() {
  createCanvas(800,400);
  movingrect = createSprite(200, 200, 50, 50);
  movingrect.shapeColor = "blue";
  fixedrect = createSprite(700,200,50,50);
  fixedrect.shapeColor = "blue";
  fixedrect.velocityX = -3;
  rect1 = createSprite(200,200,50,50);
  rect1.shapeColor = "red";
  rect1.velocityX = +3;
  rect2 = createSprite(150,250,50,50);
  rect2.shapeColor ="red";


}

function draw() {
  background(255,255,255);  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

  console.log(movingrect.x - fixedrect.x);
  console.log(movingrect.width/2 + fixedrect.width/2);

  Bounce(fixedrect, rect1);

  
  drawSprites();
}