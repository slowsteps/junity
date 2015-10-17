//game

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
myship.name = "bertha2";
console.log(myship);