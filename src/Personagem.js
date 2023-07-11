class Personagem extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.spritesheet('player', 'assets/personagem/sheet_L.png', { frameWidth: 48, frameHeight: 48 });
    }

    create ()
    {

        // Animation set
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
    }
}