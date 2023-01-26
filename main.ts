class player {
    x: number
    y: number
    dx: number
    dy: number
    constructor(x: number, y: number, dx: number, dy: number) {
        //  player coordinates
        this.x = x
        this.y = y
        //  player velocity in both directions
        this.dx = 0
        this.dy = 0
    }
    
    public controll() {
        while (true) {
            // player cant fall through the floor
            if (this.y > 4) {
                this.y = 4
            }
            
            // jumping, when player presses  a, their sprite will jump
            if (input.buttonIsPressed(Button.A)) {
                this.dy = 2
            }
            
            // player always acceletates downwards
            this.dy -= .5
            // player accleerates to the direction that the microbit is leaning in
            if (input.buttonIsPressed(Button.B)) {
                this.dx = 1
            } else {
                // stops player for constantly moving to the right
                this.dx = 0
            }
            
            // stops  the loop
            if (input.buttonIsPressed(Button.B) && input.buttonIsPressed(Button.A)) {
                break
            }
            
            this.y -= this.dy
            this.x += this.dx
            led.toggle(this.x, this.y)
        }
    }
    
}

let hero = new player(0, 4, 0, 0)
hero.controll()
