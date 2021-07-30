import { Spine } from 'pixi-spine';
import Game from "./game";

export default class Player {

    public player: Spine;
    public hitbox: PIXI.Sprite;
    public lives: PIXI.Sprite[] = [];
    public livesCont: PIXI.Container = new PIXI.Container()
    public livesNumber: number = 5;
    private game: Game;

    constructor(player: Spine, game: Game) {
        this.game = game;
        this.player = player;
        this.game.scene.addChild(player);
        this.player.visible = false
        this.makeHitbox();
        this.makeLives();
        this.livesCont.visible = false;
    }

    makeHitbox() {
        let hitbox = new PIXI.Sprite(PIXI.Texture.EMPTY);

        //хитбок немного сдвинут влево, но так и должно быть, чтобы сократь число неправильных коллизий с камнем
        hitbox.x = this.player.x;

        hitbox.width = this.player.width - 100;
        hitbox.y = screen.height - hitbox.width * 4.5
        hitbox.height = this.player.height - 150;
        this.hitbox = hitbox
        this.game.scene.addChild(hitbox)
    }

    makeLives() {
        for (let i = 0; i < 5; i++) {
            let t = PIXI.Texture.from('assets/сердце.png');
            let r = new PIXI.Sprite(t);
            r.width = 50;
            r.height = 50;
            r.x = i * 55
            this.lives.push(r);
            this.livesCont.addChild(r);
            this.game.scene.addChild(this.livesCont);
        }
    }
}