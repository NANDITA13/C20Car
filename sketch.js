var car ;

var wall ;

var speed , weight ;



function setup() {

  createCanvas(1600,200);
  
  
 
  speed = random (55,90);
  weight = random (400,1500);

  
  wall = createSprite (1200,45,10,65);

  car = createSprite (39,45,50,50);
  car.velocityX = speed ;
 

   
  


 
  
  
}




function draw() {


  background(0);  


if ( wall.x- car.x  <= (car.width+wall.width)/2) {

  car.velocityX = 0;
  var deformation = 0.5*weight * speed * speed/222509;

  if ( deformation > 180) {

    shapeColor = colour (255,0,0);
    car.velocityX = 0;

  }

  if (deformation <180 && deformation >100){

    shapeColor = color (230,230,0)
    car.velocityX = 0;
  }

  if(deformation < 100){

    car.shapeColor = color (0,225,0);
    car.velocityX = 0;
  }
}

drawSprites ();

}




