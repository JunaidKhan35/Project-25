class Paper{
	constructor(x,y,width,height)
	{
	
	var options = {
		isStatic:false,
        'restitution':0.3,
		'friction':0.3,
		'density':0.5
	}

        this.image=loadImage("paper.png")
		this.x=x;
		this.y=y;
		this.width = width
		this.height = height
		this.body=Bodies.rectangle(x, y, width, height, options);
		World.add(world, this.body);

	}
	display()
	{
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			rotate(this.body.angle);
            imageMode(CENTER)
			strokeWeight(3);
			stroke("black");
			fill("grey");
			
           image(this.image,0,0,this.width, this.height);
			pop()
	}

}