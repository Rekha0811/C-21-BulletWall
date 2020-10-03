var car,wall,speed,weight, damage,thickness;


function setup() {
  
  createCanvas(1600,400);
  bullet = createSprite(50,200,80,20);
  bullet.shapeColor = "white";

  thickness = Math.round(random(22,83));
  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);


  console.log("Speed is "+speed);
  console.log("Weight is "+weight);
}

function draw() {
  background("black");  

  if(keyDown("space"))
  {
    bullet.velocityX = speed;
  }

  textSize(25);
  text("Damage is " + damage, 400,100);

if(hasCollided(bullet, wall))
{
  damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
  bullet.velocityX = 0;
  bullet.debug = true;
}

if(damage<10)
{
  wall.shapeColor = "Green";
  text("It's Green",400,50);
}
if(damage>10 )
{
  wall.shapeColor = "red";
  text("It's red",400,50);
}
  
  drawSprites();
}

function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}