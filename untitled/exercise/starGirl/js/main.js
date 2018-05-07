var can, ctx, w, h;

var girlPic = new Image();
var starPic = new Image();
var num = 60;
var stars = [];

function init() {
    can = document.getElementById("canvas");
    ctx = can.getContext("2d");

    w = can.width;
    h = can.height;

    girlPic.src = "img/girl.jpg";
    starPic.src = "img/star.png";
    for (var i = 0; i < num; i++) {
        var obj = new starObj();
        stars.push(obj);
        // stars[i] = init();
    }

    gameloop();
}

window.onload = init;

function gameloop() {
    window.requestAnimFrame(gameloop);
    drawBackground();
    drawGirl();
    drawStars();
}

function drawBackground() {
    ctx.fillStyle = "#393550";
    ctx.fillRect(0, 0, w, h);
}

function drawGirl() {
    // drawImage(img,x,y,width,height)
    ctx.drawImage(girlPic, 100, 150, 600, 300);
}


