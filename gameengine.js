console.log("hoi")

function GameObject() 
{
	this.name = "default name";
	this.x = 0;
	this.y = 0;
}


function Ship() 
{	
	var parent = new GameObject();
	var me = Object.create(parent);
	me.maxspeed = 589;
	return me;
}

function CargoVessel()
{
	var parent = new Ship();
	var me = Object.create(parent);
	me.hullcapacity = 50;
	return me;
}


var myship = new CargoVessel();
myship.name = "bertha";
console.log(myship);



