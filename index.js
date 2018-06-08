//creating an object of JS DONE, now using the node module for our var rect
var rect = require('./rectangle');

function solverect(a,b)
{
  console.log("solving for rectangle with length ="+a+"and breadth ="+b);
  if(a<=0 || b<=0 )
  console.log("please enter the non zero values");
  else {
    console.log("the area of the rectangle is "+ rect.area(a,b));
    console.log("the perimeter of the rectangle is "+ rect.perimeter(a,b));
  }
}
solverect(2,5);
solverect(4,5);
solverect(-2,3);
solverect(0,0);
solverect(10,10);
