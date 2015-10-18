


var game = new Game("gamecanvas");


for (var i=0;i<10;i++)
{

	var star = new GameObject("some gameobject")
	star.texture = Resources.Load("star.png")

	star.transform.position = Random.InsideUnitCircle().Multiply(200)
	star.transform.scale = new Vector2(0.2,0.2)
	star.angularvelocity = 5 * Math.random()

	star.Update = function ()
	{
		this.transform.position = this.transform.position.Lerp(game.input.mousePosition, 0.3);
		this.transform.rotation += this.angularvelocity
	}

}
