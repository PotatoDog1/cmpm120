// Fast spaceship prefab
class FastShip extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points = pointValue;
        this.movementSpeed = game.settings.spaceshipSpeed + 3   //fast speed
    }

    update() {
        // move spaceship left
        this.x -= this.movementSpeed;
        // wrap around from left edge to right edge
        if (this.x <= 0 - this.width) {
            // this.x = game.config.width;
            this.reset();
        }
    }

    // position reset
    reset() {
        this.x = game.config.width;  
    }
}