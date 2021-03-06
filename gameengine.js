function GameObject(textureid)
{


    this.name = "just another gameobject";
    this.transform = new Transform();
    this.texture = new Image();
    this.rigidbody = new Rigidbody();

    Game.instance.gameObjects.push(this);

    this.Update = function ()
    {
    }

}

function Rigidbody()
{
    this.isKinematic = true;
    this.mass = 0;
    this.velocity = Vector2.Zero;
    this.angularvelocity = 0;
    this.drag = 0;
}

function Transform()
{
    this.position = new Vector2();
    this.rotation = 0;
    this.scale = new Vector2();
}

function Random()
{
}

Random.InsideUnitCircle = function ()
{
    return new Vector2(Math.random(), Math.random());
}


function Resources()
{
}

Resources.Load = function (filename)
{
    var img = new Image();
    img.src = filename;
    return img;
}

//TODO how to encaps this
Vector2.Zero = new Vector2(0, 0);

function Vector2(x, y)
{
    this.x = x == undefined ? 0 : x;
    this.y = y == undefined ? 0 : y;

    this.Zero = function ()
    {
        return new Vector2(0, 0);
    }

    this.Add = function (vec)
    {
        return new Vector2(this.x + vec.x, this.y + vec.y);
    }


    this.Subtract = function (vec)
    {
        return new Vector2(this.x - vec.x, this.y - vec.y);
    }

    this.Multiply = function (amount)
    {
        return new Vector2(amount * x, amount * y)

    }

    this.Divide = function (amount)
    {
        return new Vector2(x / amount, y / amount)
    }


    this.Lerp = function (vec, fraction)
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


    this.canvas.onmousemove = function (e)
    {
        Input.mousePosition.x = e.clientX - this.offsetLeft;
        Input.mousePosition.y = e.clientY - this.offsetTop;
    }

    //keep track of all gameobject and kickoff the gameloop
    this.gameObjects = [];
    setInterval(GameloopUpdate, 30);

    //log util
    this.log = function (str)
    {
        document.getElementById("output").innerHTML = str;
    }

    return this;

}


//TODO wrap entire engine in root "namespace" object
//TODO is this the cleanest way to setup utility objects?

var Physics = {}
Physics.gravity = new Vector2(0, 0.5);


var Input = {}
Input.mousePosition = new Vector2();


function GameloopUpdate()
{

    var ctx = Game.instance.ctx;

    ctx.clearRect(0, 0, game.width, game.height);

    for (var i = 0, len = game.gameObjects.length; i < len; i++)
    {
        var go = game.gameObjects[i];

        //TODO hookup to real physics engine?
        if (!go.isKinematic && go.rigidbody.mass > 0)
        {
            if (go.transform.position.y > Game.instance.height)
            {
                go.rigidbody.velocity = go.rigidbody.velocity.Add(new Vector2(0,-5));
            }
            go.rigidbody.velocity = go.rigidbody.velocity.Add(Physics.gravity);
            go.transform.position = go.transform.position.Add(go.rigidbody.velocity);
            go.transform.rotation += go.rigidbody.angularvelocity;
            go.rigidbody.velocity = go.rigidbody.velocity.Multiply(go.rigidbody.drag);

        }

        ctx.save();
        ctx.translate(go.transform.position.x, go.transform.position.y);
        ctx.rotate(go.transform.rotation * Math.PI / 180);
        ctx.scale(go.transform.scale.x, go.transform.scale.y)
        ctx.drawImage(go.texture, -go.texture.naturalWidth / 2, -go.texture.naturalHeight / 2);
        ctx.restore();
        go.Update();

    }

}




