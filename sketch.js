var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);

 car =  createSprite(50, 200, 50, 50);

 wall=createSprite(1200,200,20,height/2);

 car.velocityX=speed;

 car.shapeColor="white";
 car.shapeColor="white";

}

function draw() {
  background(255,255,255); 

  if(car.x-wall.x<=car.width/2+wall.width/2 &&
    wall.x-car.x<=car.width/2+wall.width/2 && 
    wall.y-car.y<=wall.height/2+car.height/2 && 
    car.y-wall.y<=car.height/2+wall.height/2)
    {
    car.shapeColor="red";
    wall.shapeColor="red";


  }
  else{
    car.shapeColor="white";
    wall.shapeColor="white";
  }
  
  if(wall.X-car.X<(car.width+wall.width)/2){

    car.velocityX=0;
    var deformation=0.5 *weight *speed* speed/22509;
    if (deformation>180){
      car.shapecolor=color(255,0,0);

    }
    if(deformation<180 && deformation>100){
      car.shapecolor=color(230,230,0);

    }
    if(deformation<100){
      car.shapecolor=color(0,255,0);
    }
    }
    drawSprites();
  }
 
