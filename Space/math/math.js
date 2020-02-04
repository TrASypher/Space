function getInterpolatedX(object, time){
    return object.x + object.xV * (time/1000);
}

function getInterpolatedY(object, time){
    return object.y + object.yV *(time/1000);
}

function getInterpolatedFacing(object, time){
    return object.facing + object.rV *(time/1000);
}