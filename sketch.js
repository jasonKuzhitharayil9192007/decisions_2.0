// this is my project for the make my own game
// anyone who is looking at my code in the future just want to let you know that i put a lot of work into whateever the finished outcome of this is
// if you see mistakes, everyone makes mistakes
// life is just a bunch of mistakes, just remember that the next time you make a mistake
// etc etc let's get on with the code

var bg, bgImg;
var player, playerAnimation;

var thief, thiefImg;
var coin, coinAnimation;
var homeless, homelessImg;

var ground;

var up;

var sbImg
var sbGroup

function preload()
{

  up = loadAnimation("walkingImg1.png");
  playerAnimation = loadAnimation("walkingImg1.png", "walkingImg2.png", "walkingImg3.png", "walkingImg4.png", "walkingImg5.png", "walkingImg6.png", "walkingImg7.png");
  bgImg = loadImage("bgImg.jpg");
  sbImg = loadImage("skyblockImg.jpeg");


}


function setup() {
  createCanvas(2000,950);

  //creating the background
  bg = createSprite(500,300, displayWidth, displayHeight);
  bg.addImage(bgImg);
  bg.scale = 2;

   //making the player Animation
   player = createSprite (100,500, 20,20);
   player.addAnimation("movingPlayer",playerAnimation);

   sbGroup = new Group();

   //making the ground
   ground = createSprite(width/2, 900,20000,100);
   ground.shapeColor = "green";
 

}


function draw() {
  background("black");
  
  
  //making the player collide with the ground
  player.collide(ground);

//making the camera follow the player
camera.x = player.x;
// camera.y = player.y;
  
  //giving the user controll over the player
  //maing the jump controlls
  //giving the player gravity
  player.velocityY = player.velocityY+1.1;
  
  if (keyDown(UP_ARROW) && player.y>=250)
  {
    player.velocityY = -15;
    console.log("jump");
    player.changeAnimation("stillPlayer",up);
    // player.changeAnimation(stillWalkImg);
  }

  //making the player move to the left
  if (keyDown(LEFT_ARROW))
  {
    player.x = player.x-10   
    console.log("left");
  }

  //making the player move to the right
  if(keyDown(RIGHT_ARROW))
  {
    player.x = player.x+5
    console.log("right");
  }

  //stopping the player from falling down while it's on the skyblock
  if (sbGroup.isTouching(player))
  {
    player.velocityY = 0;

  }



  drawSprites();
}




// function skyblocks()
// {
//   if(frameCount% 30===0)
//   {
//     var skyblock = createSprite(1000,Math.round(random(350,550)),20,20);
//     var invisibleBlock = createSprite(1000,skyblock.y-27,20,10);
//     skyblock.addImage(sbImg);
//     skyblock.scale = 0.5

//     skyblock.velocityX = -6.5;
//     invisibleBlock.velocityX = -6.5;

//     sbGroup.add(skyblock);

//   }

// }