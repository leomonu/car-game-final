var playerCar;
var comCar,comCar2;
var track,trackImg;
var carImg;
var invisibleFinishLine;
var win,winImg;
var lose,loseImg;
function preload(){
  trackImg= loadImage("track.jpg")
  carImg = loadImage("car1.png");
  winImg=loadImage("win.png");
  loseImg = loadImage("gameOver.png");
}
function setup() {
  createCanvas(windowWidth-20,windowHeight-30);
  
    playerCar = new Car(windowWidth/2-100,windowHeight/2,10,10);
    comCar = new Car(displayWidth/2+100,windowHeight/2,10,10);
    comCar2 = new Car(displayWidth/2-250,windowHeight/2,10,10);
    track = createSprite(displayWidth - 800, displayHeight-30);
    win = createSprite(500,track.y-3500,10000,10);
    win.addImage(winImg);
    win.visible = false;
   
    lose = createSprite(500,track.y-3500,10000,10);
    lose.addImage(loseImg);
    lose.visible = false;
    console.log(track.y);
    
    track.addImage(trackImg);
    invisibleFinishLine  = createSprite(10,track.y-3500,10000,10)
   // invisibleFinishLine.visible = false;
    console.log( invisibleFinishLine.y);
}

function draw() {
  
  background("blue");  


  playerCar.sprite.depth  = track.depth+1000
  comCar.sprite.depth  = track.depth+1000
  comCar2.sprite.depth  = track.depth+1000

  if(playerCar.sprite.isTouching(invisibleFinishLine)){
   // win();
    console.log("win");
    comCar.sprite.destroy();
    comCar2.sprite.destroy();
    win.visible = true;
    
  }
  if(comCar.sprite.isTouching(invisibleFinishLine) || comCar.sprite.isTouching(invisibleFinishLine)){
    console.log("lose");
    playerCar.sprite.destroy();
    lose.visible = true;
  }

  

  




playerCar.control();
//playerCar.cameraPosition();

camera.position.y = playerCar.sprite.y;
camera.position.x = windowWidth/2;


comCar.autoControl();
comCar2.autoControl();
drawSprites();

}