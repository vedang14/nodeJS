//creating a simple node module keepig in mind that every file becomes it module in node

//tinkering with callbacks in node.js and how single threading event loop works in node.js.
module.exports = (x,y,callbacks) => {

          if(x<=0 || y<=0)
          {
            setTimeout (() => callbacks(new Error ("Rectangle dimension show"+x+ ", and b = "+y),
            null),
            2000);
          }
          else
          {
              setTimeout(() => callbacks(null,
              {
                perimeter: (x,y) => (2*(x+y)),
                area:(x,y) => (x*y)
              }),
              2000);
          }
}


















exports.perimeter = (x,y) => (2*(x+y));
exports.area = (x,y) => (x*y);
