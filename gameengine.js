

function GameObject(textureid)
{


	this.name = "just another gameobject";
	this.transform = new Transform();
    this.texture = textureid == undefined  ? 0 : document.getElementById(textureid);


    this.LoadTexture = function(id)
    {
        this.texture = document.getElementById(id);
    }

    game.gameObjects.push(this);


}



function Transform()
{
	this.position = new Vector2();
	this.rotation = 0;
	this.scale = new Vector2();
}


function Vector2(x,y)
{
    this.x = x == undefined ? 0 : x;
    this.y = y == undefined ? 0 : y;

    this.Zero = function()
    {
        return new Vector2(0,0);
    }
}


function Game(canvas)
{

    this.gameObjects = [];
    var canvas = document.getElementById(canvas);
    this.ctx = canvas.getContext("2d");

    setInterval(RenderUpdate,30);

}

function RenderUpdate()
{

    for (var i=0;i<game.gameObjects.length;i++)
    {
        game.ctx.drawImage(game.gameObjects[i].texture,0,0);
    }

}




