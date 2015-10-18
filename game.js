


var game = new Game("gamecanvas");
//TODO expected name, not texture


for (var i=0;i<10;i++)
{

	var star = new GameObject("star");

	//TODO Make vector random unit circle util
	star.transform.position = Random.InsideUnitCircle();

	star.Update = function ()
	{
		//this.transform.position = this.transform.position.Lerp(game.input.mousePosition, i*0.1);
		this.transform.rotation += 10;
	}

}
