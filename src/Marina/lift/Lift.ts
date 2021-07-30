import Cabin from "./Cabin";
import Controller from "./Controller";
import Button from "./Button";
import ChoiceGame from "_Main/СhoiceGame";


export default class Lift{
    public cabin: Cabin;
    public buttons: Button[];
    public controller: Controller;
    public floorsNumber = 5;
    public background: PIXI.Sprite;
    public container: PIXI.Container;
    public backButton: PIXI.Sprite;
    public choiceGame: ChoiceGame;

    constructor(choiceGame: ChoiceGame){
        this.container = new PIXI.Container();
        this.choiceGame = choiceGame;
        this.createBg();
        this.createBackButton();    
        this.cabin = new Cabin(this);
        this.buttons = this.createButton();
        this.controller = new Controller(this);
        this.container.scale.x = sceneWidth / 1504;
        this.container.scale.y = sceneHeight/ 906;
        window.app.stage.addChild(this.container);
    }

    createBg(){
        let t = PIXI.Texture.from('assets/lift_bgbg.png');
        let bg = new PIXI.Sprite(t);
        this.container.addChild(bg);

        let liftShaft = new PIXI.Graphics();
        liftShaft.beginFill(0xa39c99);
        liftShaft.drawRect(510, 100, 80, 750);
        liftShaft.endFill();
        this.container.addChild(liftShaft);
    }

    createButton(){
        let result: Button[] = [];
        for(let i = 1; i < this.floorsNumber + 1; i++){
            result.push(new Button(this, i));
        }
        return result;
    }

    createBackButton(){
        let texture = PIXI.Texture.from('./assets/Image/back.png');
        this.backButton = new PIXI.Sprite(texture);
        this.backButton.width = window.app.screen.width/8; 
        this.backButton.height = window.app.screen.height/5; 
        this.backButton.x = window.app.screen.width - this.backButton.width - 20;
        this.backButton.y = 20;
        this.backButton.buttonMode = true;
        this.backButton.interactive = true;
        this.backButton.on("pointerdown", this.goBack.bind(this));
        this.container.addChild(this.backButton);
    }

    goBack(){
        PIXI.utils.clearTextureCache();
        window.app.stage.removeChildren();
        this.choiceGame.Create(1);
    }
}