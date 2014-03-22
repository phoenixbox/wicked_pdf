// Creates canvas 320 × 200 at 10, 50
var paper = Raphael(10, 50, 320, 200);

// Creates circle at x = 50, y = 40, with radius 10
var circle = paper.circle(50, 40, 10);
// Sets the fill attribute of the circle to red (#f00)
circle.attr("fill", "#f00");

// Sets the stroke attribute of the circle to white
circle.attr("stroke", "#fff");
////Canvas
//var paper = Raphael(200, 0, 200, 1000);
////Shape
//var rectangle = paper.rect(200, 0, 200, 1000);
//rectangle.attr({
//  "fill": "url(http://us.cdn1.123rf.com/168nwm/nemosdad/nemosdad1001/nemosdad100100029/6321487-seamless-diagonal.jpg)"
//});
