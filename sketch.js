var gameState = 0
var playerCount = 0
var database 
var form,player,game
var allPlayers
var car1
var car2,car3,car4
var f1Image,f1,obsGroup
var cars
var red,blue,yellow,pink,track,welcome,GOLD
var passFinish=false
var Fp =0
function preload() {
    red=loadImage("red.png")
    blue=loadImage("cyan.png")
    pink=loadImage("pink.png")
    yellow=loadImage("yellow.png")
    track=loadImage("track.jpg")
    welcome=loadImage("welcome.jpg")
    f1Image=loadImage("f1.png")
    GOLD=loadImage("GOLD.png")

}
function setup (){
    createCanvas(displayWidth,displayHeight)
    database = firebase.database()
    distance=0
    gameState=0
    xVel=0
    yVel=0
    xSet=false
    f1=createSprite(random(200,1000),random(-height*4,height-200))
    f1.addImage(f1Image)
    obsGroup=new Group()
   obsGroup.add(f1)
    game=new Game()
    game.getState()
    game.start()
}
function draw(){
    background(welcome)
if(playerCount===4&&Fp===0){
    game.update(1)
}
if (gameState===1){
    clear()
        game.play()
}
if(Fp===4){
    game.update(2)
}
if(gameState===2&&Fp===4){
    game.end()
}
}
