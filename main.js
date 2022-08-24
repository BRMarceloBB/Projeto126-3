song1 = "";
song2 = "";
punhoDireitoX = 0;
punhoDireitoY = 0;
punhoEsquerdoX = 0;
punhoEsquerdoY = 0;

function preload() {
    song1.loadSound("music.mp3");
    song1.loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.posenet("video", modelLoaded);
    posenet.on("pose", gotPoses)
}

function draw() {
    image(video, 0, 0, 600,500);
}

function modelLoaded() {
     console.log("Posenet foi Inicializado");
}

function gotPoses(results) {
    if (results.length > 0) {
      console.log(results);
      punhoDireitoX = results[0].pose.rightWrist.x;
      punhoEsquerdoX = results[0].pose.leftWrist.x;
      punhoDireitoY = results[0].pose.rightWrist.y;
      punhoEsquerdoY = results[0].pose.leftWrist.y;
      console.log(punhoDireitoX, punhoDireitoY);
      console.log(punhoEsquerdoX, punhoEsquerdoY);
    }
}