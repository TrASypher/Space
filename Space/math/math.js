function getInterpolatedX(object, timeOffset){
    return object.x + object.xV * (timeOffset/1000);
}

function getInterpolatedY(object, timeOffset){
    return object.y + object.yV *(timeOffset/1000);
}

function getInterpolatedFacing(object, timeOffset){
    return object.facing + object.rV *(timeOffset/1000);
}