// Um quadrado procurando um prisma

var quadrado;
var solo;
var soloimg;
var bal;
var obstaculo;
var PLAY;
var END;
var gameState;
var grupoBalas, grupoObstaculos;
function preload() {



}

function setup() {
   createCanvas(windowWidth, windowHeight);
   quadrado = createSprite(15, height / 2 + 100, 30, 30);
   solo = createSprite(width / 2, height, width, 20);
   solo.visible = false;
   grupoBalas = new Group(); 
   grupoObstaculos = new Group();
   //solo.shapeColor = "white";
   //solo.velocityX = -6*/
}

function draw() {
   background(30);
   /*if( solo.x < 800){
      solo.x = width/2
   }
  quadrado.collide(solo);*/
 

      text("APERTE ESPAÇO PARA COMEÇAR!!!", width / 2, height / 2)
      if (keyDown("space")) {
         gameState = PLAY;
      }
   
      if (gameState === PLAY) {
      if (keyDown("x")) {
         atirar();
      }

      if (keyDown("space") && quadrado.y > 100) {
         quadrado.velocityY = -7
      }
      quadrado.velocityY = quadrado.velocityY + 0.7;
      obstaculos();

      if (quadrado.isTouching(grupoObstaculos)) {
         gameState = END;
      }
   }

   drawSprites();
}

function atirar() {
   if (frameCount % 60 === 0) {
      bala = createSprite(quadrado.x, quadrado.y, 10, 10);
      bala.velocityX = 10;
      bala.shapeColor = "red"
      grupoBalas.add(bala);
   }
}
function obstaculos() {
   if (frameCount % 80 === 0) {
      obstaculo = createSprite(width, 100, 40, 100);
      obstaculo.y = Math.round(random(20, height));
      obstaculo.velocityX = -5;
      obstaculo.shapeColor = "red"
      grupoObstaculo.add(obstaculo);
   }
}