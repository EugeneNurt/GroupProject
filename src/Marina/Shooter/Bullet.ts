import ShooterGame from "./ShooterGame";

export default class Bullet{
    protected parent: ShooterGame;
    public bullet: PIXI.Sprite;

    constructor(parent: any){
        this.parent = parent;
        this.create();
    }

    create(){
        const texture = PIXI.Texture.from('assets/bullet.png');
        this.bullet = new PIXI.Sprite(texture);
        this.bullet.width = 70;
        this.bullet.height = 70;
        this.bullet.visible = false;
        this.parent.container.addChild(this.bullet);
    }
}