var starObj = function () {
    this.x;
    this.y;
};

starObj.prototype.init = function() {
    this.x = 100 + Math.random() * 600;
    this.y = 150 + Math.random() * 300;

    this.picNo=0;
}

starObj.prototype.update=function () {
    this.picNo+=1;
    if(this.picNo>=7){
        this.picNo=0;
    }
}
starObj.prototype.draw = function () {
    // drawImage(img,sx,sy,swidth,sheight,x,y,width,height)
    ctx.drawImage(starPic, this.picNo*7,0,7,7,this.x, this.y,7,7);
}

function drawStars() {
    for (var i = 0; i < num; i++) {
        stars[i].update();
        stars[i].draw();
    }
}