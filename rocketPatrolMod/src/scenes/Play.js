
class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    
    preload() {
        // load images/tile sprites
        this.load.image('rocket', 'assets/rocket.png');
        this.load.image('spaceship', 'assets/spaceship.png');
        this.load.image('cloudsback', 'assets/cloudsback.png');
        this.load.image('fastship', 'assets/fastship.png');                   // add a fast ship asset here
        this.load.image('borderleftright', 'assets/borderleftright.png');      // add border asset
        this.load.image('bordertopdown', 'assets/bordertopdown.png');          // add border asset

        this.load.image('birds', 'assets/birdstemp.png');                      // temp birds
        this.load.image('cloudsfront', 'assets/cloudsfront.png');

        // load spritesheet 
        this.load.spritesheet('explosion', 'assets/explosion.png', 
        {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});

    }

    create() {
        // add bg music
        this.music = this.sound.add('cute_music');
        this.music.play();

        // place tile sprite
        this.cloudsback = this.add.tileSprite(
            0,0,640,480, 'cloudsback'
            ).setOrigin(0,0);
        
        this.cloudsfront = this.add.tileSprite(
            0, 0, 640, 480, 'cloudsfront'
            ).setOrigin(0,0);
        
        // birds
        this.birds = this.add.tileSprite(
            0,0,640,480, 'birds'
            ).setOrigin(0,0);
        
        // add rocket (p1)
        this.p1Rocket = new Rocket(
            this, 
            game.config.width/2, 

            // made a change here
            game.config.height - borderUISize - borderPadding - 20, 
            'rocket'
            ).setOrigin(0.5, 0);
      
        // implementing fast ship
        this.fastShip = new FastShip(
            this,
            game.config.width + borderUISize * 6,
            borderUISize * 3 + 15,
            'fastship',
            0,
            100
            ).setOrigin(0,0);
        
        // add spaceships (x3)
        this.ship1 = new Ship(
            this,
            game.config.width + borderUISize * 6,
            borderUISize * 4,
            'spaceship',
            0,
            30
            ).setOrigin(0,0);
        
        this.ship2 = new Ship (
            this,
            game.config.width + borderUISize * 3,
            borderUISize * 5 + borderPadding * 2,
            'spaceship',
            0,
            20
            ).setOrigin(0,0);
        this.ship3 = new Ship(
            this,
            game.config.width,
            borderUISize * 6 + borderPadding * 4,
            'spaceship',
            0,
            10
            ).setOrigin(0,0);
        // cloud borders
        // top border
        this.add.image(
            0, 
            0, 
            'bordertopdown'
            ).setOrigin(0 ,0);
        this.add.image(
            0, 
            game.config.height - borderUISize, 
            'bordertopdown'
            ).setOrigin(0 ,0);
        // left border
        this.add.image(
            0,
            0,
            'borderleftright'
        ).setOrigin(0,0);
        // right border
        this.add.image(
            game.config.width - borderUISize,
            0,
            'borderleftright'
        ).setOrigin(0,0);
        // timer display    
        this.countDown = new Timer(this,
            500, 
            borderUISize + borderPadding * 2, 
            game.settings.gameTimer);

        // define keys
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        
        // animation config
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 0, first: 0}),
            frameRate: 10
        });

        // initialize score
        this.p1Score = 0;

        // display score
        let scoreConfig = {
            fontFamily: 'myFirstFont',
            fontSize: '28px',
            backgroundColor: 'white',
            color: '#843605',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
                right: 10,
                left: 10
            },
            fixedWidth: 100
        }
        this.scoreLeft = this.add.text(borderUISize + borderPadding, 
        borderUISize + borderPadding * 2, this.p1Score, scoreConfig);

        // GAME OVER flag
        this.gameOver = false;

        // 60-second play clock
        scoreConfig.fixedWidth = 0;
        this.clock = this.time.delayedCall(game.settings.gameTimer - 1000, () => {
            this.add.text(game.config.width / 2, game.config.height / 2 - borderUISize, 'GAME OVER', {
                fontFamily: 'myFirstFont', fontSize: '50px', align: 'center', color: '#843605', textShadow: '4px, 4px, white'}).setOrigin(0.5);
            this.add.text(game.config.width / 2, game.config.height / 2 + 30, '(R) to Restart\n??? for Menu',
                {fontFamily: 'myFirstFont', fontSize: '28px', color: '#843605', align: 'center'}).setOrigin(0.5);
            this.countDown.reset();
            this.gameOver = true;
            }, null, this);
        // this.add.text(game.config.width / 2, game.config.height / 2 - borderUISize, this.clock, scoreConfig).setOrigin(0.5);
    }

    update() {
        // check key input for restart
        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)) {
            this.music.pause();
            this.music.currentTime = 0;
            this.scene.restart();            
        }
        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            this.music.pause();
            this.music.currentTime = 0;
            this.scene.start("menuScene");
            

        }

        this.birds.tilePositionX -= 2;
        this.cloudsfront.tilePositionX -= 3;
        this.cloudsback.tilePositionX -= 5;

        if (!this.gameOver) {
            this.p1Rocket.update();     //update rocket sprite
            this.ship1.update();        // update spaceship (x3)
            this.ship2.update();
            this.ship3.update();
            this.fastShip.update();
            this.countDown.update();

        }
        // check collisions
        if(this.checkCollision(this.p1Rocket, this.ship1)) {
            this.p1Rocket.reset();
            this.shipExplode(this.ship1);
        }
        if (this.checkCollision(this.p1Rocket, this.ship2)) {
            this.p1Rocket.reset();
            this.shipExplode(this.ship2);
        }
        if (this.checkCollision(this.p1Rocket, this.ship3)) {
            this.p1Rocket.reset();
            this.shipExplode(this.ship3);
        }

        if (this.checkCollision(this.p1Rocket, this.fastShip)) {
            this.p1Rocket.reset();
            this.shipExplode(this.fastShip);
        }
        
    }
    checkCollision(rocket, ship) {
        // simple aabb checking
        if(rocket.x + rocket.width > ship.x && 
            rocket.x < ship.x + ship.width && 
            rocket.height + rocket.y > ship.y && 
            rocket.y < ship.y + ship.height){
                return true;
        } else {
            return false;
        }
    }
    shipExplode(ship) {
        // temporarily hide ship
        ship.alpha = 0;
        // create explosion sprite at ship's position
        let boom = this.add.sprite(ship.x, ship.y, 'explosion').setOrigin(0,0);
        boom.anims.play('explode');                 // play explode animation
        boom.on('animationcomplete', () => {        // callback after anim completes
            ship.reset();                           // reset ship position
            ship.alpha = 1;                         // make ship visible again
            boom.destroy();                         // remove explosion sprite
        });
        // score add and repaint
        this.p1Score += ship.points;
        this.scoreLeft.text = this.p1Score;

        this.sound.play('sfx_explosion');
    }
}

