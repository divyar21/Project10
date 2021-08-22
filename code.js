var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var square1= createSprite(110,200,15,15);
square1.shapeColor= "red";
var square2= createSprite(170,200,15,15);
square2.shapeColor= "red";
var square3= createSprite(230,200,15,15);
square3.shapeColor= "red";
var square4= createSprite(290,200,15,15);
square4.shapeColor= "red";
var blue= createSprite(35,200,75,200);
blue.shapeColor="lightblue";
var yellow= createSprite(365,200,75,200);
yellow.shapeColor="yellow";
var border1= createSprite(200,100,400,5);
var border2= createSprite(200,300,400,5);
var ball=createSprite(70,200,20,20);
ball.shapeColor="green";

var gameState = "start";

var lives=0;


function draw() {
  background("white");
  
  if(gameState === "start"){
    text("Press Space To Start",140,150);
    drawSprites();
     if(keyDown("space")){
  square1.velocityY= -8;
  square2.velocityY= 8;
  square3.velocityY= -8;
  square4.velocityY= 8;
  gameState= "play";
}
  }
  
 

if(gameState === "play"){
  square1.bounceOff(border1);
  square1.bounceOff(border2);
  square2.bounceOff(border2);
  square2.bounceOff(border1);
  square2.bounceOff(border2);
  square3.bounceOff(border1);
  square3.bounceOff(border2);
  square4.bounceOff(border1);
  square4.bounceOff(border2);
  
  if (keyWentDown("RIGHT_ARROW")){
  ball.velocityX=3;
  }
  if (keyWentUp("RIGHT_ARROW")){
  ball.velocityX=0;
  }
  if (keyWentDown("LEFT_ARROW")){
  ball.velocityX=-3;
  }
  if (keyWentUp("LEFT_ARROW")){
  ball.velocityX=0;
  }
  
  textSize(30);
  text("lives:"+lives,175,60);
  if(ball.isTouching(square1)||ball.isTouching(square2)||ball.isTouching(square3)||ball.isTouching(square4)){
    reset();
    lives=lives+1;
    
  }

  if(ball.isTouching(yellow)){
   gameState="end";
  }
 
drawSprites(); 
}
if(gameState === "end"){
   textSize(40);
  text("YOU WIN!",100,200);
}
}

function reset(){
    ball.x=70;
    ball.y=200;
    ball.velocityX=0;
    ball.velocityY=0;
}




  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
