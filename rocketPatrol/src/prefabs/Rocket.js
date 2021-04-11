// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        
        // add object to existing scene
        scene.add.existing(this);       // add to existing, displayList, updateList      
        this.isFiring = false;          // track rocket's firing status
        this.movementSpeed = 4;         // pixels per frame
    }

    update() {
        // left/right movement
        if(!this.isFiring) {
            if(keyLEFT.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.movementSpeed;
            } else if (keyRIGHT.isDown && this.x <= game.config.width -
            borderUISize - this.width) {
                    this.x += this.movementSpeed;
                }
            }

            // fire button
            if(Phaser.Input.Keyboard.JustDown(keyF)) {
                this.isFiring = true;
            }
            // if fired, move up
            if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
                this.y -= this.movementSpeed;
            }
            // reset on miss
            if(this.y <= borderUISize * 3 + borderPadding) {
                this.isFiring = false;
                this.y = game.config.height - borderUISize - borderPadding;
            }
        }
    
        //     this.y -= this.movementSpeed;
        //     if(this.y < borderUISize*3) {
        //         this.y = game.config.height - borderUISize - borderPadding;
        //         this.isFiring = false;
        //     }

        // } else {
        //     if(keyLEFT.isDown){
        //         this.x -= this.movementSpeed;
        //     }

        //     if(keyRIGHT.isDown){
        //         this.x += this.movementSpeed;
        //     }

        //     if(Phaser.Input.Keyboard.JustDown(keyF)) {
        //         this.isFiring = true;
        //     }

        //     // clamp movement to the play area
        //     this.x = Phaser.Math.Clamp(
        //         this.x, 
        //         borderUISize + borderPadding, 
        //         game.config.width - borderUISize - borderPadding);
//     }
// }

// reset rocket to ground
    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize- borderPadding;

    }
}