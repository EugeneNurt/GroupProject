export default class Eldoors {
    public door1:PIXI.Graphics;
    public door2:PIXI.Graphics;
    public open:boolean;
    public left: number;

    constructor(rect: PIXI.Graphics, container: PIXI.Container) {
        this.open = false;
        this.left = -1;

        this.door1 = new PIXI.Graphics;
        this.door1.lineStyle(window.app.screen.width/200, 0xd5402b, 1)
        this.door1.position.x = rect.position.x + window.app.screen.width/150;
        this.door1.position.y = rect.position.y + window.app.screen.height/45;
        this.door1.pivot.set(0, window.app.screen.width/80);
        this.door1.moveTo(5, 0);
        this.door1.lineTo(5, window.app.screen.height/20)

        container.addChild(this.door1);

        this.door2 = new PIXI.Graphics;
        this.door2.lineStyle(window.app.screen.width/200, 0xd5402b, 1)
        this.door2.position.x = rect.position.x + rect.width/2 - window.app.screen.width/300;
        this.door2.position.y = rect.position.y + window.app.screen.height/45;
        this.door2.pivot.set(0, window.app.screen.width/80);
        this.door2.moveTo(5, 0);
        this.door2.lineTo(5, window.app.screen.height/20)

        container.addChild(this.door2);
    }

    OpenDoor() {
        this.open = true;
    }

    AnimationDoors(delta:number, rect: PIXI.Graphics) {
        this.door1.position.x += Math.ceil(delta/1000 * 100) * this.left;
        this.door2.position.x -= Math.ceil(delta/1000 * 100) * this.left;

        if (this.door1.position.x <= rect.position.x) {
            this.left = 1;
        }
        else if (this.door1.position.x >= rect.position.x + rect.width/2 - window.app.screen.width/300) {
            this.left = -1;
            this.open = false;
        }
    }
}