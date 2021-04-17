let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
    
}

// game definition
let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15; // 32 px
let borderPadding = borderUISize / 3;       //10.66

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;

/**
 * I would like credit for the following mods:
 * 
 * Starting Tier Mods
 * Add your own (copyright-free) background music to the Play scene (5) (music from bensound.com)
 * Create a new scrolling tile sprite for the background (5)
 * 
 * Novice Tier Mods
 * Replace the UI borders with new artwork (10)
 * 
 * Intermediate tier mods
 * Create new artwork for all of the in-game assets (rocket, spaceships, explosion) (20) 
 * Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20)
 */