

class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload () {
        // load audio
        this.load.audio('sfx_select', 'assets/blip_select12.wav');
        this.load.audio('sfx_explosion', 'assets/explosion38.wav');
        this.load.audio('sfx_rocket', 'assets/rocket_shot.wav');

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
        this.add.text(game.config.width / 2, game.config.height / 2, '(F) to fire',
        menuConfig).setOrigin(0.5);
        
        // changing the menuconfig colors and padding
        menuConfig.color = '#ff8282';
        menuConfig.backgroundColor = 'white';       // white highlight
        menuConfig.padding = 5;

        // novice text
        this.add.text(game.config.width / 40, game.config.height / 2 + borderUISize + 
            borderPadding * 15, '← for Novice', menuConfig).setOrigin(0,0);
        
        // expert text
        this.add.text(game.config.width - borderUISize - borderPadding - 150, game.config.height / 2 + borderUISize + 
            borderPadding * 15, '→ for Expert', menuConfig).setOrigin(0,0);
    
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

    }

    update () {
        if (Phaser.Input.Keyboard.JustDown (keyLEFT)) {
            // easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // hard mode
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 45000
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }
    }
}