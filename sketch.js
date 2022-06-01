var class1;
function setup() {
  createCanvas(400,400);
  class1 = new Student("ram",20,10);

}

function draw() 
{
  background(30);
  class1.show();
  
}