function setup() {
    createCanvas(400, 380, WEBGL);
    img = loadImage("earth_texture.jpeg");
    texture(img);
    console.log("setup function");
}
var angle = 0
function draw() {
    angle += 0.01;
    background(0);
    noStroke();
    rotateY(angle);
    sphere(100);
    console.log("draw function");
}