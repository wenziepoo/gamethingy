+
class player:
    def __init__(self,x,y,dx,dy):

        # player coordinates
        self.x = x
        self.y = y

        # player velocity in both directions
        self.dx = 0
        self.dy = 0

    def controll(self):

        while True:
            
            #player cant fall through the floor
            if self.y > 4:
                self.y = 4

            #jumping, when player presses  a, their sprite will jump
            if input.button_is_pressed(Button.A):
                self.dy = 2

            #player always acceletates downwards
            self.dy -= .5

            #player accleerates to the direction that the microbit is leaning in
            if input.button_is_pressed(Button.B):
                self.dx  = 1
            else:
                #stops player for constantly moving to the right
                self.dx = 0
            #stops  the loop
            if input.button_is_pressed(Button.B) and input.button_is_pressed(Button.A):
                break
            self.y -= self.dy
            self.x += self.dx
            led.toggle(self.x, self.y)

hero  = player(0,4,0,0)
hero.controll()