class Player{
    constructor(){

    }
    //read the player count from the database
    getCount()
    {
        var playerCountRef=database.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount=data.val();

        })

    }
    //write the player count in the database
    updateCount(count)
    {
        database.ref('/').update({
            playerCount:count
        })
    }
    //update player name in the database
    update(name)
    {
        var playerIndex="player"+playerCount;
        database.ref(playerIndex).set({
            name:name
        })

    }
}