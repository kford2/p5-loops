function setup(){
    createCanvas(600,400);
    background(0);
}

function draw(){
    strokeWeight(4);
    stroke(255);
    
   var x = 0;
   while(x<650){
    fill(78, 25, 232);
    ellipse(0,  255, 25, 25);
    x = x + 50;
    
   }
   for(var x = 0; x < 650; x = x + 70){
    fill(78, 25, 232);
    ellipse(x, 25, 25, 25);
   }
}