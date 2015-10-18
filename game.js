
function Ship() 
{	
	var parent = new GameObject();
	var me = Object.create(parent);
	me.maxspeed = 589;
	return me;
}

game = new Game("gamecanvas");

var star = new GameObject("star");
star.Update = function()
{
	//console.log("updating");
	this.transform.position = game.input.mousePosition;

}

