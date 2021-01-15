var fixedRect,movingRect;
var edges;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(0, 0, 50, 80);
  movingRect= createSprite(800, 400, 80, 30);
  movingRect.velocityX = -4;
  movingRect.velocityY = -2;
  fixedRect.velocityX = 2;
  fixedRect.velocityY = 2;

  edges = createEdgeSprites();
}

function draw() {
  background(255,255,255);  
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 &&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
      movingRect.shapeColor="red";
      fixedRect.shapeColor="red";

  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";

  }
  if (movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 &&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
      movingRect.velocityX = -(movingRect.velocityX);
      fixedRect.velocityX = -(fixedRect.velocityX);
      movingRect.velocityY = -(movingRect.velocityY);
      fixedRect.velocityY = -(fixedRect.velocityY);
    }
    createEdgeSprites();
    movingRect.bounceOff(edges);
    fixedRect.bounceOff(edges);
    drawSprites();
}
