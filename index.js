//creating an object of JS DONE, now using the node module for our var rect
var rect = require('./rectangle');

function solverect(a,b)
{
  console.log("solving for rectangle with length ="+a+"and breadth ="+b);
  rect(a,b,(err,rectangle)=>
  {
    if(err)
    {
      console.log("Error: ",err.message);
    }
    else {
      console.log("the area of the rectangle with dimensoions "+ a+"and b = "+b+"is"+ rectangle.area());
        console.log("the perimeter of the rectangle with dimensoions "+ a+"and b = "+b+"is"+ rectangle.perimeter());
    }
  });
    console.log("this will be displayed after 2 sec.");
}
solverect(2,5);
solverect(4,5);
solverect(-2,3);
solverect(0,0);
solverect(10,10);
