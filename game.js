


game = new Game("gamecanvas");

var star = new GameObject("star");
star.Update = function()
{
	this.transform.position = game.input.mousePosition;
}

