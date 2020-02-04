


var blueDropshipSprite        = createSprite(spriteCanvas, spriteContext, 200, dropshipPoints , "rgba(90,155,255,1)");
var oneSprite                 = createSprite(spriteCanvas, spriteContext,  55, fighterPoints  , "rgba(90,155,255,1)");
var blueVanguardFighterSprite = createSprite(spriteCanvas, spriteContext,  80, fighter2Points , "rgba(90,155,255,1)");
var threeSprite               = createSprite(spriteCanvas, spriteContext, 430, carrierPoints  , "rgba(90,155,255,1)");
var scoutSprite               = createSprite(spriteCanvas, spriteContext, 120, scoutPoints    , "rgba(90,155,255,1)");
var scout2Sprite              = createSprite(spriteCanvas, spriteContext, 150, scout2Points   , "rgba(90,155,255,1)");


ship1 = new Ship({sprite: blueDropshipSprite});
ships.push(ship1);


mainLoop();