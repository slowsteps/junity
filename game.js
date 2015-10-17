
function Ship() 
{	
	var parent = new GameObject();
	var me = Object.create(parent);
	me.maxspeed = 589;
	return me;
}

game = new Game("gamecanvas");

var star = new GameObject("star");

