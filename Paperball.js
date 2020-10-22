class Paperball{
    constructor(pos1, pos2){
        var options = {
            'isStatic': false,
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2,
        }

        this.body = Matter.Bodies.circle(pos1, pos2, 30, options);
        World.add(world, this.body);
        }
        display(){
            var cpos = this.body.position;

            var dispPPB = ellipse(cpos.x, cpos.y, 60, 60);
        }
    }
