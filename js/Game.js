class Game
{
    constructor()
    {

    }
    //read the gamestate from database
    getState()
    {
        var gameStateRef=database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
    }
    //write the gameState in the databse
    update(state)
    {
        database.ref('/').update({
            gameState:state
        })
    }
    start()
    {
        if(gameState===0)
        {
            player=new Player();
            player.getCount();
            form=new Form();
            form.display();
        }
    }
}