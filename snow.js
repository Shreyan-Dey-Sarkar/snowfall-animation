class Snow {
    constructor(x, y,r) {
        var options = {
            restitution: 0.4,
            friction: 0.2,

        }
        this.r = r;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("snowflake.png");
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius, this.radius)
        pop();
    }

};