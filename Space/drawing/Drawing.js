function drawCursor1(x, y, context){
    context.save();
    context.beginPath();
    context.strokeStyle = "rgba(255, 255, 255, 1)";
    context.setLineDash([1,14,2,14,2,14,2,14,1]);
    context.lineWidth=8;
    context.arc(x,y,10.1859163579,0, 2*Math.PI);
    context.stroke();
    context.restore();
}

function blackCanvas(canvas, context){
    context.fillStyle = "rgba(0, 0, 0, 1)";
    context.fillRect(0, 0, canvas.width, canvas.height);
}