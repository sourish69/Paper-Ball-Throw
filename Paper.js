class Paper
{
    constructor()
    {
        var options= 
        {
            'isStatic':false,
            'restitution':0.1,
            'friction':0.5,
            'density':1.2

        }

        this.body = Bodies.circle(100,100,50)

        World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        push()
        fill("white");
        strokeWeight(4);
        stroke("green");
        ellipse(pos.x,pos.y,50);
    }
    
}