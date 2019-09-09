function setup() {
    createCanvas(400, 380, WEBGL);
    img = loadImage("earth_texture.jpeg");
    texture(img);
   // console.log("setup function");// put setup code here
}
var angle = 0
function draw() {
    angle += 0.01;
    background(0);
    noStroke();
    rotateY(angle)
    //rotateX(angle);
    sphere(100);
    console.log("draw function");// put drawing code here
}