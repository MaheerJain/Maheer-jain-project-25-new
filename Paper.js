class Paper {
    constructor(x,y,radius) {
        var options = {
            isStatic:false,
            restitution:0.3,
            density:1.2,
            friction:0.5,
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.x =x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        Engine.update(engine);
        push();
        translate(pos.x,pos.y);
        circle(RADIUS);
        circle(0,0,this.radius,this.radius);
        fill(255,0,255);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}