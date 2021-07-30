import Game from "./game";
import { Spine } from 'pixi-spine';

export default class Enemy {
    public hitbox: PIXI.Sprite;
    public enemy: Spine;
    public game: Game;

    get visible() {
        return this.enemy.visible;
    }

    set visible(val) {
        this.enemy.visible = val;
    }

    constructor(game: Game, dragon: Spine) {
        this.game = game;
        let e = new PIXI.Sprite(PIXI.Texture.EMPTY);
        e.width = 200;
        e.y = screen.height - 280;
        // e.visible = false;
        e.height = 200;
        this.hitbox = e;
        this.game.scene.addChild(e);

        const animation = new Spine(dragon.spineData);
        animation.x = window.sceneWidth
        animation.y = screen.height - 280;
        animation.visible = false;
        animation.width = -animation.width
        animation.state.setAnimation(0, 'flying', true);
        animation.state.timeScale = 0.4;
        this.enemy = animation
        this.game.scene.addChild(animation);
    }

    start() {
        this.enemy.visible = true;
        this.hitbox.visible = true;

        //не получилось двигать одним твином
        this.game.addTween().addControl(this.hitbox)
            .do({ x: [window.sceneWidth, 0 - this.hitbox.width] }).start(2900, this.game.enemies.inField.shift, 1);
        this.game.addTween().addControl(this.enemy)
            .do({ x: [window.sceneWidth - this.enemy.width / 2, 0 - this.hitbox.width] }).start(3000, undefined, 1);

    }

}