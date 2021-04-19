class Timer {
    constructor(scene, x, y, totalTime) {
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.totalTime = totalTime;
        this.createTime = Date.now();       // current time
        let timerAreaconfig = {
            fontFamily: 'myFirstFont', 
            fontSize: '28px', 
            color: '#843605',
            backgroundColor: 'white',
            padding: {
                top: 5,
                bottom: 5,
                left: 10,
                right: 10
            }
        }
        this.timerArea = this.scene.add.text(this.x, this.y, 
            (this.totalTime) / 1000, 
            timerAreaconfig);

    }

    update() {
        // how much time has passed 
        let elapsedTime = Date.now() - this.createTime;
        this.timerArea.text = (Math.floor((this.totalTime - elapsedTime) / 1000)).toString() + ' sec';
    }

    
    reset() {
        // this.timerArea.text = (Math.floor((game.settings.gameTimer - 1000)/ 1000)).toString() + ' sec';
        this.timerArea.text = '0 sec';
        this.x = game.config.width;
    }
}