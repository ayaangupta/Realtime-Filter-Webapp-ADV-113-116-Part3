musX=0;
musY=0;

function preload(){
mustache = loadImage("https://i.postimg.cc/521r58HF/R-removebg-preview.png")
}

function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Intialized');
}

function draw(){
image(video, 0, 0, 500, 500);
image(mustache, musX - 35, musY - 10, 100, 100);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results){
if(results.length > 0){
console.log(results);
musX = results[0].pose.nose.x;
musY = results[0].pose.nose.y;
console.log("mustache x = " + results[0].pose.nose.x);
console.log("mustache y = " + results[0].pose.nose.y)
}
}