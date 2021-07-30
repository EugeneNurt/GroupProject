import Lift from "./Lift";

export default class Cabin{
    protected parent: Lift;
    public cabin: PIXI.Graphics;
    public doors: PIXI.Graphics[];

    constructor(parent: any){
        this.parent = parent;
        this.doors = [];
        this.draw();
        this.createDoor();
    }

    draw(){
        this.cabin = new PIXI.Graphics();
        this.cabin.beginFill(0xFAEBD7);
        this.cabin.drawRect(0, 0, 80, 150);
        this.cabin.x = 510;
        this.cabin.y = 700;
        this.cabin.endFill();
        this.parent.container.addChild(this.cabin);
    }

    createDoor(){
        let door = new PIXI.Graphics();
        door.beginFill(0x708090);
        door.drawRect(0, 0, 38, 150);
        door.x = 510;
        door.y = 700;
        door.endFill();

        let door2 = new PIXI.Graphics();
        door2.beginFill(0x708090);
        door2.drawRect(-38, 0, 38, 150);
        door2.x = 590;
        door2.y = 700;
        door2.endFill();
        this.doors.push(door);
        this.doors.push(door2);
        this.parent.container.addChild(this.doors[0], this.doors[1]);
    }
}