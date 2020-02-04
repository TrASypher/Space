function createSprite(canvas, context, size , pointsArg , color){ //SHIPS ARE DRAWN FACING TO THE RIGHT
    var sprite =   {
        offset: [0,0],
        points: [],
        width : 0,
        height: 0,
        image : null
    };

    for(var i = 0 ; i < pointsArg.length; i++){ //THIS COPIES THE pointsArg INTO THE SPRITE'S POINTS RATHER THAN REFERENCING THE EXISTING ARG'S ARRAY
        sprite.points.push([pointsArg[i][0],pointsArg[i][1]]);
    }
    var biggestValue =  sprite.points[0][0]; //The origin of the sprite points is 0,0, and these are the initial values used to find what the farthest points from 0,0 are to scale the points to the sprite size
    var biggestX     =  sprite.points[0][0];
    var biggestY     =  sprite.points[0][1];

    for(var i = 1; i < sprite.points.length; i++){
        if (Math.abs(sprite.points[i][0])>Math.abs(biggestValue)){Math.abs(biggestValue= sprite.points[i][0]);}
        if (Math.abs(sprite.points[i][1])>Math.abs(biggestValue)){Math.abs(biggestValue= sprite.points[i][1]);}
        if (Math.abs(sprite.points[i][0])>Math.abs(biggestX)){biggestX=Math.abs( sprite.points[i][0]);}
        if (Math.abs(sprite.points[i][1])>Math.abs(biggestY)){biggestY=Math.abs( sprite.points[i][1]);}
    }

    var scale = (size*0.45)/biggestValue;
    for(var i = 0; i < sprite.points.length; i++){
        sprite.points[i][0]*=scale;
        sprite.points[i][1]*=scale;
    }
    sprite.width  = (biggestX*scale)/0.45;
    sprite.height = (biggestY*scale)/0.45;
    sprite.offset[0]=sprite.width *-0.5;
    sprite.offset[1]=sprite.height*-0.5;
    canvas.width  = sprite.width*2; //sprite coordinates are between -5,5 x and y, so each 1*scale is equal to 10x10 pixels.
    canvas.height = sprite.height*2;
    context.clearRect(0,0,sprite.width*2,sprite.height*2);
    context.beginPath();
    //context.save();
    context.translate(sprite.width, sprite.height);
    context.moveTo(sprite.points[0][0]*2 ,sprite.points[0][1]*2);

    for(var i = 1 ; i < sprite.points.length; i++) {
        context.lineTo(sprite.points[i][0]*2,sprite.points[i][1]*2);
    }
    //context.closePath();

    context.fillStyle = color;
    context.fill();
    var image = document.createElement("img");
    image.src = canvas.toDataURL("image/png");
    sprite.image = image;
    return sprite;
}