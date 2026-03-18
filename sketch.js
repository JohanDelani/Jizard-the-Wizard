let a 


//The setup function only happens onc
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  angleMode(degrees);
  a=0
}

//The draw function happens over and over again
function draw() {
  background(111,15,140); //an RGB color for the canvas' background
  //circle

  
  stroke(189,186,191) //    an RGB color for the circle's border
  fill(189,186,191,125); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(random(width),random(height),5,5); // center of canvas, 20px dia

  stroke(189,186,191) //    
  fill(189,186,191,125); // 
  ellipse(random(width),random(height),5,5); // 

  stroke(189,186,191) //    
  fill(189,186,191,125); // 
  ellipse(random(width),random(height),5,5); // 

  stroke(189,186,191) //    
  fill(189,186,191,125); // 
  ellipse(random(width),random(height),5,5); // 

  stroke(189,186,191) //    
  fill(189,186,191,125); // 
  ellipse(random(width),random(height),5,5); // 

  
  stroke(189,186,191);
  fill(189,186,191,125);
  push()
  translate(250,250);
  rotate(a);
  line(250,250,10,10);
  pop()

  a=a+1;


  stroke(0,0,0);
  fill(0,0,0);
  rect(189,235,140,35);

  fill(165,165,165);
  textFont('courier');
  textSize(35);
  textFont(35);

  text("JIZARD!",189,263);
  


  fill(165,165,165);
  triangle(25,220,25,300,mouseX,mouseY);



    

  
  }

  
 

  
  







