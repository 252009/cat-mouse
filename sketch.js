var bgimg
var cat,catimg1,catwalking,catsit
var mouse,mouseteasing,mouseh

function preload() {
    //load the images here
    bgimg = loadImage("images/garden.png")
    catimg1 = loadImage("images/cat1.png")
    catwalking = loadAnimation("images/cat2.png" , "images/cat3.png")
    catsit = loadAnimation("images/cat4.png")
    mouseteasing =loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseh = loadImage("images/mouse1.png")
    mouse1 = loadImage("images/mouse4.png")
    
}

function setup(){
    createCanvas(1000,800);
    //create cat and mouse sprites here
    cat = createSprite(700,600,20,20)
    cat.addImage(catimg1)
    cat.scale = 0.2

    mouse = createSprite(100,600,20,20)
    mouse.addAnimation("see",mouseh)
    mouse.scale = 0.2
    
    
    
}

function draw() {

    background(bgimg);

    

    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("catLastImage", catsit);
       cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImage", mouse1);
        mouse.scale=0.15;
        mouse.changeAnimation("mouseLastImage");
    }  
    drawSprites();
   
    
    
}


function keyPressed(){

  if(keyCode === LEFT_ARROW)
    {
        cat.velocityX = -5; 
        cat.addAnimation("catRunning", catwalking);
        cat.changeAnimation("catRunning");
        
        mouse.addAnimation("mouseTeasing", mouseteasing);
        mouse.frameDelay = 25;
        mouse.changeAnimation("mouseTeasing");
    }


}
