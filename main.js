noseX=0;
noseY=0;

function preload(){
mustache_nose=loadImage("https://i.postimg.cc/zvLGfz41/mustache-21600.png");
}

function setup(){
canvas=createCanvas(300, 300);
canvas.center();

video=createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotposes);
}

function modelLoaded(){
    console.log("model is initialized");
}

function gotposes(result){
    if (result.length>0){
    console.log(result);

    noseX=result[0].pose.nose.x-13;
    noseY=result[0].pose.nose.y-5;

    console.log("nose X ="+noseX);
    console.log("nose Y ="+noseY);
    }
}

function draw(){
image(video, 0, 0, 300, 300);
//fill(255, 0, 0);
//stroke(255, 0, 0);
//circle(noseX, noseY, 20);
image(mustache_nose, noseX, noseY, 40, 40);
}

function take_snapshot(){
save('myfilterimage.png');
}