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
    text("Anbu", 50, 400);
    fill("#1eaff0");
    textSize(difference);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results)
    }

    rightwristx = results[0].pose.rightWrist.x;
    leftwristx  = results[0].pose.leftWrist.x;
    difference  = floor(leftwristx - rightwristx);
    console.log("right wrist x = "+rightwristx+" | left wrist x = "+leftwristx+" | difference = "+difference);
}
