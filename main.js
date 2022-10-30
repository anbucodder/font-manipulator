nosex="0";
nosey="0";
difference="0";
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
function gotPoses(results){
    if(results.length>0){
        console.log(results)
    }

    rightwristx = results[0].pose.rightWrist.x;
    leftwristx  = results[0].pose.leftWrist.x;
    difference  = floor(leftwristx - rightwristx);

    nosex = results[0].pose.nose.x;
    nosey = results[0].pose.nose.y;

    console.log("right wrist x = "+rightwristx+" | left wrist x = "+leftwristx+" | difference = "+difference);
}
function draw(){
    background("#696765");
    text("Anbu",nosex ,nosey );
    fill("#1eaff0");
    textSize(difference);
}
