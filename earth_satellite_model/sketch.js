var angle = 0;
var distance = 100;
function setup() {
    createCanvas(1080, 500, WEBGL);
    img = loadImage("earth_texture.jpeg");
    console.log("setup function");
}
function draw() {
    texture(img);
    angle += 0.01;
    background(0);
    noStroke();
    rotateY(angle);
    sphere(80);
    fill(255);
    for(var i = 1; i<5; i++){
        rotateY(angle+i/2);
        circle(distance * i, 0, 5);    
    }
    console.log("draw function");
}