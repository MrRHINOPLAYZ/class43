class Player{
    constructor (){
        this.name=null;
        this.distance=0
this.index=0
this.xPos=0
this.yPos=0
this.place=0
    }
getCount(){
    var playerRef=database.ref ('playerCount')
    playerRef.on('value',(data)=>{
        playerCount=data.val()
    })
}
update(){
    var playerIndex = "Players/player"+ this.index
database.ref(playerIndex).set({
    name:this.name,
    distance:this.distance,
    xPos: this.xPos,
    place:this.place
})
}
updateCount(count){
    database.ref('/').update({
      playerCount:count  
    })
}
static getPlayerInfo(){
    var playerRef=database.ref("Players")
    playerRef.on("value",(data)=>{
allPlayers=data.val()
    })
}
getFinishPlayer(){
    database.ref("finishPlayer").on("value",(data)=>{
        Fp=data.val()
    })
}
static updateFinishPlayer(){
    database.ref('/').update({
        finishPlayer:Fp+1
    })
    this.place+=1
}
}