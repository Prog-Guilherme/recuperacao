import Phaser from "phaser";

class Jogo extends Phaser.Scene
{
    vida = 3;
    cursors;
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('chao', 'assets/Other/grass.png');
        this.load.image('backgound', 'assets/Backgrounds/colored_desert.png');
        this.load.image('inimigo', 'assets/Aliens/alienGreen_suit.png');
        this.load.spritesheet('player', 'assets/personagem/sheet_L.png',{ frameWidth: 48, frameHeight: 48 } );
    }

    create ()
    {
        this.cursors = this.input.keyboard.createCursorKeys();
        
        this.add.image(400, 300, 'backgound');

        this.add.image(400, 300, 'chao');

        this.add.image(50, 80, 'player');

        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('player', { start: 65, end:73 }),
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: 'jump',
            frames: this.anims.generateFrameNumbers('player', { start: 56, end:57 }),
            frameRate: 8,
            repeat: -1
        });

        this.add.particles(0, 0, 'inimigo', {
            y: { random: [ 80, 720 ] },
            lifespan: 2500,
            gravityY: 0,
            frequency: 80,
            scale: { min: 0.6, max: 1.1 },
            blendMode: 'ADD'
        });
    }

    update ()
    {
        this.player.setVelocity(0);

        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-300);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(300);
        }

        if (this.cursors.up.isDown)
        {
            this.player.setVelocityY(-300);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.setVelocityY(300);
        }
    }
}export default Jogo