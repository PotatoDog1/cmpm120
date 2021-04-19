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
 * Novice Tier Mods
 * Implement parallax scrolling (10)
 *      I separated the image of birds that I had from the clouds in the background, the birds
 *      move at a different speed than the clouds.
 * Display the time remaining (in seconds) on the screen (10)
 *      I implemented a timer that counts down the time and shows how many seconds are left.
 * 
 * Intermediate tier mods
 * Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20)
 *      I made a potato dog wearing a star costume that flies at the top of the screen, and moves faster 
 *      than the other potato dogs in the sky. It is worth 100 points, while the other dogs are only worth
 *      20, 30, and I think 40 points.
 * 
 * S(hrek) Tier
 * Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) (60)
 *      I used some music from bensound.com and left it playing in the background, whenever
 *      the player restarts the game, the music restarts.
 * 
 *      I drew a new scrolling tile sprite with clouds and birds to replace the star themed
 *      scrolling tile sprite.
 * 
 *      I created new borders with clouds on them and replaced the white borders.
 * 
 *      I created a new title screen including drawings of the potato dogs in the game, along
 *      with using a downloaded font from 1001fonts.com. The font is called Double Bubble Shadow.
 *      I also moved some of the text around, moving the "novice tier" to the bottom left and the
 *      "expert tier" to the bottom right. I got rid of the background color for some of the text
 *      because I didn't like it.
 *      
 *      I replaced all of the sound fx with sound fx that I found on Zapsplat.com. This includes the 
 *      explosion sound, the sound the game makes when choosing between Novice and Expert tier, and the 
 *      sound the game makes when shooting a "rocket".
 * 
 *      I replaced the rocket with a blushy face, and the spaceships with potato dogs. This is because
 *      my social media account is known for using the potato dog as my mascot. The explosion animation was
 *      replaced with an explosion of hearts and sparkles.
 * 
 * My unexpected struggles:
 * -it took me an embarrassingly long time to figure out how to link a downloaded font
 * -it took me a long time to figure out why I couldn't use this.music.stop()
 * -I realized that my birds weren't showing up because I created them before the cloud background.
 * Later on I realized that I should have created the background first, and then create the birds, so
 * that they would not be covered by the clouds.
 * 
 * 
 */