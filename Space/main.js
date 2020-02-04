'use strict';

let resolution = {x : 1920, y: 1080};

var mainCanvas      = document.getElementById('mainCanvas');
var spriteCanvas  	= document.createElement('canvas');
// var smokeACanvas  	= document.createElement('canvas');
// var smokeBCanvas  	= document.createElement('canvas');

var mainContext     = mainCanvas.getContext("2d");
var spriteContext	= spriteCanvas.getContext("2d");
// var smokeAContext	= smokeACanvas.getContext("2d");
// var smokeBContext	= smokeBCanvas.getContext("2d");

let debugMode = true;

var ships = [];

const physicsUpdateTime = 10; //100 fps physics 10ms delay between physics frames

let now = Date.now();
let lastPhysicsFrameTime = Date.now();
let nextFrameTime = Date.now();

function mainLoop(){
    now = Date.now();

    while(nextFrameTime < now){
        nextFrameTime+= physicsUpdateTime;
        lastPhysicsFrameTime = nextFrameTime;

        physicsLoop(ships);
    }
    render(now, lastPhysicsFrameTime);

    requestAnimationFrame(mainLoop);
}


function physicsLoop(){
    for (let i = 0; i < ships.length; i++){
        let ship = ships[i];
        ship.updatePosition(physicsUpdateTime);
    }
}

function render(now, lastPhysicsFrameTime){
    let timeRenderDelta = now - lastPhysicsFrameTime;
    mainContext.clearRect(0,0,resolution.x,resolution.y);

    drawShips(mainContext, ships, timeRenderDelta);

}

function drawShips(context, ships, timeRenderDelta){
    let ship;
    for (let i = 0; i < ships.length; i++){
        ship = ships[i];
        mainContext.clearRect(0,0,resolution.x,resolution.y);
        mainContext.fillRect(ship.x , ship.y +100,50,50);

        context.save();
        context.translate(getInterpolatedX(ship , timeRenderDelta), getInterpolatedY(ship , timeRenderDelta));
        context.translate(getInterpolatedX(ship , timeRenderDelta), getInterpolatedY(ship , timeRenderDelta));
        context.rotate(getInterpolatedFacing(ship, timeRenderDelta));

        //mainContext.fillRect(-25 , -25 ,50,50);
        if(ship.sprite.image != null){
            mainContext.drawImage(ship.sprite.image, -136 , -100 , 280 , 200);
        }
        mainContext.fillRect(-5 , -5 ,10,10);

        context.restore();


    }
}