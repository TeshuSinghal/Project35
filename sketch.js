//Create variables here
var dog;
var happyDog;
var foodS;
var foodStock;
var database;

function preload()
{
  //load images here
  dogImg = loadImage("dogImg.png");
  happyDogImg = loadImage("dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250,250);
  dog.addImage(dogImg);
  dog.scale = 0.2;

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
}


function draw() {  
  background(46, 138, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    foodS = foodS-1;
    dog.addImage(happyDogImg);
  }

  drawSprites();
  //add styles here
  textSize(20);
  fill(0);
  text("Food Stock: "+ foodS, 150,100);

}
function readStock(data){
  foodS = data.val();

}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}



