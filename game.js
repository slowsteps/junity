


var game = new Game("gamecanvas");


for (var i=0;i<10;i++)
{

	var star = new GameObject("some gameobject")
	star.texture = Resources.Load("star.png")

	star.transform.position = Random.InsideUnitCircle().Multiply(200)
	star.transform.scale = new Vector2(0.2,0.2)
	star.rigidbody.angularvelocity = 5 * Math.random()
	star.springiness = 0.2*Math.random()
	star.rigidbody.velocity = new Vector2(Math.random(),-1)
	star.rigidbody.mass = 1
	star.rigidbody.drag = 0.99

	star.Update = function ()
	{
		//this.transform.position = this.transform.position.Lerp(Input.mousePosition, this.springiness);
	}

}
