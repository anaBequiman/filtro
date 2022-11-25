function preload(){

}
function draw(){
    image(vd, 0, 0, 400,400);
}
function setup(){
    cnv = createCanvas(400, 400);
    cnv.position(400, 160);
    vd = createCapture(VIDEO);
    vd.size(400, 400);
    vd.hide();
}