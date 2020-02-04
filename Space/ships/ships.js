class Ship {
    constructor(args = {}) {
        this.x  = (args.hasOwnProperty("x"))  ? args.x : 100;
        this.y  = (args.hasOwnProperty("y"))  ? args.y : 100;
        this.hp = (args.hasOwnProperty("hp")) ? args.hp : 100;
        this.xV = (args.hasOwnProperty("xV")) ? args.xV : 20;
        this.yV = (args.hasOwnProperty("yV")) ? args.yV : 0;
        this.rA = (args.hasOwnProperty("rA")) ? args.rA : 0.001;
        this.rV = (args.hasOwnProperty("rV")) ? args.rV : 3; //in radians per second
        this.facing = (args.hasOwnProperty("facing")) ? args.rV : 0;
        this.sprite = (args.hasOwnProperty("sprite")) ? args.sprite : null;
    }

    updatePosition(timeDelta){
        this.x += this.xV * (timeDelta/1000);
        this.y += this.yV * (timeDelta/1000);
        this.facing += this.rV * (timeDelta/1000);

    }
}