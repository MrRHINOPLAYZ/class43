class Game{
constructor(){

}
getState(){
    var gameRef = database.ref('gameState')
    gameRef.on('value',function(data){
        gameState=data.val()

    })
}
update(state){
    database.ref('/').update({ gameState: state });

}
async start(){
    if (gameState===0){
        player=new Player()
        var playerRef=await database.ref('playerCount').once('value')
        if (playerRef.exists()){
playerCount=playerRef.val()
player.getCount()
        }
        form = new Form()
        form.display()
    }
    car1=createSprite(100,200)
    car2=createSprite(300,200)
    car3=createSprite(500,200)
    car4=createSprite(700,200)
    car1.debug=true
    car2.debug=true
    car3.debug=true
    car4.debug=true
    cars=[car1,car2,car3,car4]
    car1.addImage(red)
    car2.addImage(blue)
    car3.addImage(yellow)
    car4.addImage(pink)
    car1.scale=0.5
    car2.scale=0.5
    car3.scale=0.5
    car4.scale=0.5
}
play(){
    form.hide()
        text('gameStart',100,100)
        Player.getPlayerInfo()
        player.getFinishPlayer()
        if(allPlayers!==undefined){
            image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
            var index=0
            var x=175
            var y=0
            var pos=150
            for (var plr in allPlayers){
                index=index+1
                x=200+(index*200)+allPlayers[plr].xPos
                y=displayHeight-allPlayers[plr].distance
               
                cars[index-1].x=x
                cars[index-1].y=y
                
                if (index===player.index){
                    if(cars[index-1].isTouching(obsGroup)){
                        yVel-=0.9
                    }
                    fill("red")
                    cars[index-1].shapeColor="RED"
                    camera.position.x=displayWidth/2
                    camera.position.y=cars[index-1].y
                }
                else{
                    fill("black")
                }
                text(allPlayers[plr].name+":"+allPlayers[plr].distance,cars[index-1].x,cars[index-1].y+100)
                pos+=20
                drawSprites()
            }
        }
        if(player.distance<3500){
            if(keyIsDown(38)&& player.index!==null&&passFinish!==true){
                yVel+=1
                if(keyIsDown(37)){
                    xVel-=0.5
                }
                if(keyIsDown(39)){
                    xVel+=0.5
                }  
            }

         else if(keyIsDown(38)&&yVel>0&&player.index!==null&&passFinish!==true){
            yVel -=0.1
            xVel*=0.9
        }else{
            xVel*=0.9
            yVel *=0.9
        }}
        player.distance+=yVel
        yVel *=0.9
        
        player.xPos +=xVel
        xVel*=0.9
        player.update();
        if(player.distance>=3500&&passFinish===false&&Fp<=4){
            Player.updateFinishPlayer()
             player.place=Fp
             player.update()
                 passFinish=true
             
             }
}
end(){
    console.log("gameEnd")
    background("CYAN")
    camera.position.x=0
    camera.position.y=0
    Player.getPlayerInfo()
    for(var plr in allPlayers){
        if(allPlayers[plr].place===1){
            text("U WIN"+":"+allPlayers[plr].name,displayWidth/4,displayHeight/9)
            image(GOLD,displayWidth/4,displayHeight/9+40)
        }
    }
}
}
