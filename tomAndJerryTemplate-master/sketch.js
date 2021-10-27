var bgImg;
var cat;
var mouse;
var bg;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catimg1 = loadImage("images/cat1.png");
    mouseimg1 = loadImage("images/mouse1.png");
    catimg2 = loadImage("images/cat2.png", "images/cat3.png");
    mouseimg2 = loadImage("images/mouse2.png", "images/mouse3.png");
    catimg3 = loadImage("images/cat4.png");
    mouseimg3 = loadImage("images/mouse4.png");
}

function setup() {
    createCanvas(1000, 800);
    //create tom and jerry sprites here

    bg = createSprite (500, 400);
    bg.addAnimation("fundo", bgImg);

    cat = createSprite(870, 600);   
    cat.addAnimation("gatoSentado", catimg1);
    cat.scale = 0.2;

    mouse = createSprite(200, 600)
    mouse.addAnimation("ratoParado", mouseimg1);
    mouse.scale = 0.2

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    


    if (cat.isTouching(mouse)) {
        cat.velocity = 0
        cat.addAnimation("ultimaImagemGato", catimg3);
        cat.changeAnimation("ultimaImagemGato");
        cat.x = 300
        cat.y = 600
        mouse.addAnimation("ultimaImagemRato", mouseimg3);
        mouse.changeAnimation("ultimaImagemRato");
    }

    drawSprites();
}


function keyPressed() {

    //For moving and changing animation write code here

    if (keyCode === LEFT_ARROW) {
        mouse.addAnimation("ratoProvocando", mouseimg2);
        mouse.changeAnimation("ratoProvocando");
        mouse.frameDelay = 25;

        cat.addAnimation("gatoCorrendo", catimg2);
        cat.changeAnimation("gatoCorrendo");
        cat.velocityX = -5;
    }

}
