

function GameObject(textureid)
{


	this.name = "just another gameobject";
	this.transform = new Transform();
    this.texture = textureid == undefined  ? 0 : document.getElementById(textureid);
    console.log(this.texture.naturalHeight);

    //this.LoadTexture = function(id)
    //{
    //    this.texture = document.getElementById(id);
    //}

    Game.instance.gameObjects.push(this);

    this.Update = function() {};

}



function Transform()
{
	this.position = new Vector2();
	this.rotation = 0;
	this.scale = new Vector2();
}

function Random()
{
    Random.InsideUnitCircle = function()
    {
        return new Vector2(Math.random(),Math.random())
    }

    Random.InsideRect = function(x,y,width,height)
    {
        return new Vector2(x + width*Math.random(),y + height*Math.random())
    }
}

function Vector2(x,y)
{
    this.x = x == undefined ? 0 : x;
    this.y = y == undefined ? 0 : y;

    this.Zero = function()
    {
        return new Vector2(0,0);
    }

    this.Add = function(vec)
    {
        return new Vector2(this.x+vec.x,this.y+vec.y);
    }


    this.Subtract = function(vec)
    {
        return new Vector2(this.x-vec.x,this.y-vec.y);
    }

    this.Multiply = function(amount)
    {
        return new Vector2(amount*x,amount*y)

    }

    this.Divide = function(amount)
    {
        return new Vector2(x/amount,y/amount)
    }


    this.Lerp = function(vec,fraction)
    {
        var resultvec = new Vector2();
        resultvec.x = (vec.x - this.x) * fraction;
        resultvec.y = (vec.y - this.y) * fraction;
        return this.Add(resultvec);
    }

}


function Game(canvas)
{
    Game.instance = this;

    this.canvas = document.getElementById(canvas);
    this.ctx = this.canvas.getContext("2d");
    this.width = this.canvas.width;
    this.height = this.canvas.height;

    //Input
    this.input = new Input();

    this.canvas.onmousemove = function(e)
    {

        Game.instance.input.mousePosition.x = e.clientX - this.offsetLeft;
        Game.instance.input.mousePosition.y = e.clientY - this.offsetTop;
    }

    //keep track of all gameobject and kickoff the gameloop
    this.gameObjects = [];
    setInterval(GameloopUpdate,30);

    this.log = function(str)
    {
        document.getElementById("output").innerHTML = str;
    }

    return this;

}

function Input()
{
    this.mousePosition = new Vector2();
}

function GameloopUpdate()
{

    var ctx = Game.instance.ctx;

    for (var i=0;i<game.gameObjects.length;i++)
    {
        var go = game.gameObjects[i];
        ctx.save();
        ctx.clearRect(0,0,game.width,game.height);
        ctx.translate(go.transform.position.x,go.transform.position.y);
        ctx.rotate(go.transform.rotation * Math.PI / 180);
        ctx.drawImage(go.texture,-go.texture.naturalWidth/2,-go.texture.naturalHeight/2);
        ctx.restore();

        go.Update();
    }

}




