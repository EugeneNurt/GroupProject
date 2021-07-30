import ShooterGame from "./ShooterGame";

export default class Box{
    protected parent: ShooterGame;
    public box: PIXI.Sprite;

    constructor(parent: any){
        this.parent = parent;
        this.create();
    }

    create(){
        const texture = PIXI.Texture.from('assets/box.png');
        this.box = new PIXI.Sprite(texture);
        this.box.width = 150;
        this.box.height = 150;
        this.box.x = window.app.screen.width;
        this.box.y = window.app.screen.height/1.15;
        this.box.anchor.set(1);
        this.box.visible = false;
        this.parent.container.addChild(this.box);
    }
}