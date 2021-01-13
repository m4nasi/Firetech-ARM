// Classifier Variable
let classifier;
// Model URL
// PUT YOUR URL INBETWEEN THE QUOTES ON THE LINE BELOW.
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/qtijOJWF_/';

// Video
let video;
let flippedVideo;
// To store the classification
let label = "";

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  createCanvas(320, 260);
  // Create the video
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();

  flippedVideo = ml5.flipImage(video);
  // Start classifying
  classifyVideo();
}

function draw() {
  background(0);
  // Draw the video
  image(flippedVideo, 0, 0);

  // Draw the label
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
  flippedVideo.remove();
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  
  
  
  // Classifiy again!
  // put your code in here to make a selection
  // EMOJIS from https://emojipedia.org/
  
  if (results[0].label == "bottle"){
    label = "🧴"
  } else if (results[0].label == "") {
    label = ""
  } else if (results[0].label == "") {
    label = ""
  } else if (results[0].label == "") {
    label = ""

  } else{
    label = "Nothing classified yet"
  } 
  
  classifyVideo();
}

