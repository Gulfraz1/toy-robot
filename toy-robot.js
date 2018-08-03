class Robot {
    constructor(x, y, direction) {
        if (x > 0 || x <= 5)
            this.x = x;
        else {
            console.log('not a valid input');
            return;
        }
        if (y > 0 || y <= 5)
            this.y = y;
        else {
            console.log('not a valid input');
            return;
        }
        if (direction === "north" || direction === "south" || direction === "east" || direction === "west")
            this.direction = direction;
        else console.log("not a valid input");
    }

    move() {
        if (this.direction === "east") {
            if (this.x < 5)
                this.x = this.x + 1;
            else {
                console.log("not a valid move");
            }
        }
        if (this.direction === "west") {
            if (this.x > 0)
                this.x = this.x - 1;
            else {
                console.log("not a valid move");
            }
        }
        if (this.direction === "south") {
            if (this.y > 0)
                this.y = this.y - 1;
            else {
                console.log("not a valid move");
            }
        }
        if (this.direction === "north") {
            if (this.y < 5)
                this.y = this.y + 1;
            else {
                console.log("not a valid move");
            }
        }
    }

    left() {
        if (this.direction === "north") {
            this.direction = "west"
            return;
        }
        if (this.direction === "west") {
            this.direction = "south";
            return;
        }
        if (this.direction === "south") {
            this.direction = "east";
            return;
        }
        if (this.direction === "east") {
            this.direction = "north";
            return;
        }
    }

    right() {
        if (this.direction === "north") {
            this.direction = "east"
            return;
        }
        if (this.direction === "west") {
            this.direction = "north";
            return;
        }
        if (this.direction === "south") {
            this.direction = "west";
            return;
        }
        if (this.direction === "east") {
            this.direction = "south";
            return;
        }
    }

    report() {
        console.log(`x: ${this.x}, y: ${this.y}, direction: ${this.direction}`);
    }


}

module.exports = Robot;