class Dustbin
{
    constructor(x,y,width,height)
    {
        var options=
        {
            isSatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;

        World.add(world,this.body)
    }
    display()
    {
        var pos = this.body.position;
        push()
        rectMode(CENTER);
        fill("blue");
        strokeWeight(4);
        stroke("blue");
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}