// this is my project for the make my own game
// anyone who is looking at my code in the future just want to let you know that i put a lot of work into whateever the finished outcome of this is
// if you see mistakes, everyone makes mistakes
// life is just a bunch of mistakes, just remember that the next time you make a mistake
// etc etc let's get on with the code

var bg, bgImg;
var player, playerAnimation;

var thief, thiefImg;
var coin, coinImg;
var coinGroup
var score;
var homeless, homelessImg;

var ground;

var up;

var platform;

function preload()
{

  coinImg = loadImage("coinImg1.jpeg");
  up = loadAnimation("walkingImg1.png");
  playerAnimation = loadAnimation("walkingImg1.png", "walkingImg2.png", "walkingImg3.png", "walkingImg4.png", "walkingImg5.png", "walkingImg6.png", "walkingImg7.png");
  bgImg = loadImage("bgImg.jpg");
  homelessImg = loadImage("homelessImg.png");
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

   //making the ground
   ground = createSprite(width/2, 900,20000,100);
   ground.shapeColor = "green";
 
   coinGroup = new Group();

   // initializing the score
   score = 0;

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
    player.x = player.x-21; 
    console.log("left");
  }

  //making the player move to the right
  if(keyDown(RIGHT_ARROW))
  {
    player.x = player.x+21;
    console.log("right");
  }

for(var i=0; i<coinGroup.length;i++)
{
    if(coinGroup.get(i).isTouching(player))
    {
        coinGroup.get(i).destroy();
        score++;
    }
}

  spawnCoins();
  spawnHomeless();
  
  drawSprites();

  //text("Coins Collected:"+score, 250,50);
}



function spawnCoins()
{
  if(frameCount%180 === 0)
  {
   var rand = Math.round(random(10,600));
   
    coin = createSprite(rand,0,20,20);
    coin.addImage(coinImg);
    coin.scale = 0.5;
    coin.velocityY = 3;
    coinGroup.add(coin);
  }

}

function spawnHomeless()
{
  if(frameCount%300 === 0)
  {
      homeless = createSprite(500,800,20,50);
      homeless.addImage(homelessImg);
      homeless.scale = 0.3
      var side = Math.round(random(1,2));
      if(side === 1)
      {
          homeless.x = 25;
      }
      else
      {
          homeless.x = 650;
      }

      homeless.lifetime = 150;
  }

}

// function SpawnThiefs()
// {
// if(frameCount%)
// {


// }  
// }
