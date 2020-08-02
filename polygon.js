class Polygon{
    constructor(x, y, radius, angle) {
        var options = {
            restitution:0.5,
            friction:1.0,
            density:1.0
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        fill("yellow");
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0,0, this.radius);
        pop();
      }
}