function setup(){
    video= createCapture(VIDEO);
    video.size(500,450);
    video.position(240,180)
    canvas = createCanvas(450,400);
    canvas.position(800,150);
    poseNet= ml5.poseNet(video , modalloaded);
    poseNet.on('pose',gotPoses);
}
function modalloaded(){
    console.log("Posenet is Initiallised!")
}
function draw(){
    background("#696765");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results)
    }
}