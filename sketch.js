var tom, jerry, tomImg1, tomImg2, tomImg3, jerryImg1,jerryImg2,jerryImg3,back;
function preload() {
    //load the images here
 back=loadImage("garden.png");
 tomImg1=loadAnimation ("cat1.png");
 tomImg2=loadAnimation ("cat2.png", "cat3.png");
 tomImg3=loadAnimation ("cat4.png");
 jerryImg1=loadAnimation ("mouse1.png");
 jerryImg2=loadAnimation ("mouse2.png", "mouse3.png");
 jerryImg3=loadAnimation ("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite (870,660,60,60);
tom.addAnimation ("Sleeping",tomImg1);

tom.scale = 0.2;

jerry=createSprite(200,680,20,20);
jerry.addAnimation ("Standing",jerryImg1);
jerry.scale = 0.17;

}

function draw() {

    background(back);
    //Write condition here to evalute if tom and jerry collide
//if (tom.isTouching(jerry))
if(tom.x - jerry.x < (tom.width - jerry.width)/2){
    tom.velocityX = 0;
text ("U LOST.",500,400);
tom.addAnimation("happytom",tomImg3);
jerry.addAnimation("happyjerry",jerryImg3);
tom.changeAnimation("happytom");
jerry.changeAnimation("happyjerry");

}

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW) {

    jerry.addAnimation("Tease",jerryImg2);
    tom.addAnimation("GetsTeased", tomImg2);
    tom.changeAnimation("GetsTeased");
    jerry.changeAnimation("Tease");
    tom.velocityX = -5;
  }

}
