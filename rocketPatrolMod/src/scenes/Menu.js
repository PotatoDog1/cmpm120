

class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload () {
        // load audio
        this.load.audio('sfx_select', 'assets/bell_small_001.mp3');
        this.load.audio('sfx_explosion', 'assets/multimedia_pop_up_alert_tone_3.mp3');     // replaced with media tone
        this.load.audio('sfx_rocket', 'assets/food_drink_big_bubble_blown_into_glass_through_drinking_straw_1.mp3');       // replaced with blowing bubbles

        // background music
        this.load.audio('cute_music', 'assets/bensound-cute.mp3');

        // menu screen
        this.load.image('menuscreen', './assets/menuscreen.png');
    }
    create() {
         // menu text configuration
         let menuConfig = {
            fontFamily: 'myFirstFont',
            fontSize: '28px',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        this.menuscreen = this.add.tileSprite(
            0,0,640,480, 'menuscreen'
            ).setOrigin(0,0);
        
        // show menu text
        this.add.text(game.config.width / 2, game.config.height / 3 - borderUISize - 
            borderPadding, 'POTATO\nPATROL', {fontFamily: 'myFirstFont', fontSize: 65}).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 2 - borderUISize, '←→ to move',
        menuConfig).setOrigin(0.5);
        // let f = '(F)'.fontcolor('rgb(' + [255, 130, 130].join(',') + ')');
        this.add.text(game.config.width / 2, game.config.height / 2, '(F) to fire',
        menuConfig).setOrigin(0.5);
        
        // changing the menuconfig colors and padding
        menuConfig.color = '#ff8282';
        menuConfig.backgroundColor = 'rgb(' + [255, 255, 255, .8].join(',') + ')';       // white highlight, lowered opacity
        menuConfig.padding = 5;

        // novice text
        this.add.text(game.config.width / 40, game.config.height / 2 + borderUISize + 
            borderPadding * 15, '← for Novice', menuConfig).setOrigin(0,0);
        
        // expert text
        this.add.text(game.config.width - borderUISize - borderPadding - 150, game.config.height / 2 + borderUISize + 
            borderPadding * 15, '→ for Expert', menuConfig).setOrigin(0,0);
            
        // key input
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

    }

    update () {
        if (Phaser.Input.Keyboard.JustDown (keyLEFT)) {
            // easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 61000,
                // startTime: Date.now()         // track the start time of this mode
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // hard mode
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 46000,
                // startTime: Date.now()         // track the start time of this mode
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }
    }
}