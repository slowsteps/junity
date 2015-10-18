

function GameObject(textureid)
{


	this.name = "just another gameobject";
	this.transform = new Transform();
    this.texture = textureid == undefined  ? 0 : document.getElementById(textureid);


    //this.LoadTexture = function(id)
    //{
    //    this.texture = document.getElementById(id);
    //}

    game.gameObjects.push(this);

    this.Update = function() {};

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

    this.canvas = document.getElementById(canvas);
    this.ctx = this.canvas.getContext("2d");
    this.width = this.canvas.width;
    this.height = this.canvas.height;

    //Input
    this.input = new Input();

    this.canvas.onmousemove = function(e)
    {

        game.input.mousePosition.x = e.clientX - this.offsetLeft;
        game.input.mousePosition.y = e.clientY - this.offsetTop;
    }

    //keep track of all gameobject and kickoff the gameloop
    this.gameObjects = [];
    setInterval(GameloopUpdate,30);

    this.log = function(str)
    {
        document.getElementById("output").innerHTML = str;
    }

}

function Input()
{
    this.mousePosition = new Vector2();
}

function GameloopUpdate()
{

    for (var i=0;i<game.gameObjects.length;i++)
    {
        var go = game.gameObjects[i];
        game.ctx.save();
        game.ctx.clearRect(0,0,game.width,game.height);
        game.ctx.translate(go.transform.position.x,go.transform.position.y);
        game.ctx.drawImage(go.texture,0,0);
        game.ctx.restore();
        go.Update();
    }

}




