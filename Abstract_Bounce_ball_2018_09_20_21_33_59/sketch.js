function setup() {
    createCanvas(400, 400);
}

var x = 10;
var changeInX = 3;
var y = 25;
var changeInY = 50;

var xspeed = 9;
var yspeed = 10;



function draw() {
    //background(220);
  
  	noStroke();
 		//fill (mouseX,mouseY,x - y);
  	fill (x-y, mouseX, mouseY, x*y);
    ellipse(x, 200,mouseX);
  	ellipse(300, y, mouseY);

    x = x + changeInX;

    if (x > width) {
        changeInX = -7;
    }

    if (x < 0) {
        changeInX = 3;
      
      y = y + changeInY
      
    }
  
   if (y > height){
       changeInY = -12
   }
  
  if (y < 0) {
    changeInY = 10
  }
  

//small bouncing ball
  	fill (mouseX);
  	ellipse (x, y, 25);

  	//bouncing horizontally
 	 x = x + xspeed;
  	
  	 if (x > width || x < 0)  {
     	xspeed = -xspeed;
  	}

  	//bouncing veritcally
  	y = y + yspeed;

  	if (y > height || y < 0) {
	 	  yspeed = -yspeed;
  	}
  
 
        
}
