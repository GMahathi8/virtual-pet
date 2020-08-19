var dog,happyDog,database,foodStock;

var database;
var foodS;
function preload()
{
dogIMG = loadImage("images/dogImg.png");
dogIMG2 = loadImage("images/happydog.png");

}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dogSprite=createSprite(width/2, 80, 10,10);
	dogSprite.addImage(dogIMG);
	dogSprite.scale=0.2;

 
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);





}


function draw() {  

background(46,139,87);

if(keyWentDown(UP_ARROW)) {

  writeStock(foodS);
  dog.addImage(dogIMG2);

}
readStock();
writeStock();
  drawSprites();

text("NOTE:Press UP_ARROW key to feed drago milk ");
textsize(h2);
fill("green");
stroke();



  }



function writeStock (x) {

  if(x<=0) {
    x=0;
  }else {
    x = x-1;
  }

database.ref('/').update({
  Food:X
})

}
