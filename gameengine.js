

function GameObject() 
{
	this.name = "just another gameobject";
	this.transform = new Transform();
}


function Transform()
{
	this.position = new Vector2();
	this.rotation = 0;
	this.scale = new Vector2();
}


function Vector2(x,y)
{
	console.log("vector2 args x=" + x);
	if (x==undefined) this.x=0;
	else this.x = x;
	if (y==undefined) this.y=0;
	else this.y = y;
}






