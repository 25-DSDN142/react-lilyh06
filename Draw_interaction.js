// ----=  HANDS  =----
function prepareInteraction() {
//setting
 crabImage = loadImage('images/redcrab.png');
 bgImage = loadImage('images/background 1.png');
 forefrontImage = loadImage('images/foreground.png');
//crab
 tatcrabImage =  loadImage('images/tatcrab overlay.png');
 tatcrabImage2 =  loadImage('images/tatcrab fademid.png');
 tatcrabImage1 =  loadImage('images/tatcrab fadelow.png');
 partycrabImage =  loadImage('images/partycrab overlay.png');
 clawcrabImage =  loadImage('images/clawcrab.png');
 clawcrab2Image =  loadImage('images/clawcrab2.png');
 //other
 nemoImage =  loadImage('images/nemo.png');
 doryImage =  loadImage('images/dory.png');
 confettiImage =  loadImage('images/confetti.png');
 octopusImage =  loadImage('images/octopus.png');
 octopusImage2 =  loadImage('images/octopus full.png');


 fishMove = 1000;
 fishMove2 = 1280;
 Yvalue = 0;

}

function drawInteraction(faces, hands) {

image(bgImage,0,0,1280,960)

  // hands part
  // USING THE GESTURE DETECTORS (check their values in the debug menu)
  // detectHandGesture(hand) returns "Pinch", "Peace", "Thumbs Up", "Pointing", "Open Palm", or "Fist"

  // for loop to capture if there is more than one hand on the screen. This applies the same process to all hands.
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    if (showKeypoints) {
      drawPoints(hand)
      drawConnections(hand)
    }
    // console.log(hand);
    let indexFingerTipX = hand.index_finger_tip.x;
    let indexFingerTipY = hand.index_finger_tip.y;
    /*
    Start drawing on the hands here
    */

   //DORY
  if(hand.handedness ==="Right"){
   if(detectHandGesture = "Open Palm"){
      image(doryImage,fishMove,350,200,100)
      image(doryImage,fishMove,900,150,75)
      fishMove = fishMove-1;
    }
  }
    if(fishMove <=100){ 
   fishMove = 1000;
}

 if(hand.handedness ==="Right"){
  if(detectHandGesture = "Open Palm"){
      image(doryImage,fishMove2-200,850,100,50)
       push()
       fishMove2 = fishMove2-2.5;
       pop()
    }
  }
    if(fishMove2 <=100){ 
   fishMove2 = 1280;
}
//NEMO
if (hand.handedness === "Left") {
    push()
   imageMode(CENTER)
   image(nemoImage,indexFingerTipX,indexFingerTipY,150,100)
   pop() 
}
//OCTOPUS
  if(detectHandGesture = "Thumbs Up"){
      image(octopusImage,0,0,1280,960)
  if (detectHandGesture = "Peace"){
      image(octopusImage2,0,0,1280,960)
    }
    }

    /*
    Stop drawing on the hands here
    */
  }



  //------------------------------------------------------------
  //facePart
  // for loop to capture if there is more than one face on the screen. This applies the same process to all faces. 
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i]; // face holds all the keypoints of the face
    if (showKeypoints) {
      drawPoints(face)
    }

   let leftEyeCenterX = face.leftEye.centerX;
    let leftEyeCenterY = face.leftEye.centerY;
    let leftEyeWidth = face.leftEye.width;
    let leftEyeHeight = face.leftEye.height;

    // Right eye
    let rightEyeCenterX = face.rightEye.centerX;
    let rightEyeCenterY = face.rightEye.centerY;
    let rightEyeWidth = face.rightEye.width;
    let rightEyeHeight = face.rightEye.height;


    let noseTipX = face.keypoints[4].x;
    let noseTipY = face.keypoints[4].y;

    let LeyeStemX = face.keypoints[423].x;
    let LeyeStemY = face.keypoints[423].y;

    let ReyeStemX = face.keypoints[203].x;
    let ReyeStemY = face.keypoints[203].y;

    let toplipX = face.keypoints[12].x;
    let toplipY = face.keypoints[12].y;
    let bottomlipX = face.keypoints[14].x;
    let bottomlipY = face.keypoints[14].y;

    let sideFaceX = face.keypoints[93].x;
    let sideFaceY = face.keypoints[93].y;
    let sideFaceX2 = face.keypoints[323].x;
    let sideFaceY2 = face.keypoints[323].y;
  

    // console.log(face);
    /*
    Once this program has a face, it knows some things about it.
    This includes how to draw a box around the face, and an oval. 
    It also knows where the key points of the following parts are:
     face.leftEye
     face.leftEyebrow
     face.lips
     face.rightEye
     face.rightEyebrow
    */

    /*
    Start drawing on the face here
    */
//EYES
   strokeWeight(10)
   stroke(0)
   line(LeyeStemX,LeyeStemY,leftEyeCenterX,leftEyeCenterY)
//CRAB
   line(ReyeStemX,ReyeStemY,rightEyeCenterX,rightEyeCenterY)
   let eyedist = dist(leftEyeCenterX,leftEyeCenterY,rightEyeCenterX,rightEyeCenterY)
   //console.log(eyedist) //210 and 70
   let crabSize = map(eyedist,210,70,700,150)
//CRAB CLAWS
    let mouthopen = dist(toplipX,toplipY, bottomlipX,bottomlipY)
   //console.log(mouthopen) //1 and 90


if (mouthopen < 15){
  push()
   imageMode(CENTER)
   image(crabImage,noseTipX,noseTipY+75,crabSize+120,crabSize)
  pop()
 }
   if (mouthopen >= 15  && mouthopen <=50){
     push()
   imageMode(CENTER)
   image(clawcrabImage,noseTipX,noseTipY+75,crabSize+120,crabSize)
  pop()  
 }

if (mouthopen >= 50){
  push()
   imageMode(CENTER)
   image(clawcrab2Image,noseTipX,noseTipY+75,crabSize+120,crabSize)
  pop()
 }
 if (mouthopen >= 50){
  push()
   image(confettiImage,0,-400,1280,960)
  pop()
 }
  if (mouthopen >= 60){
  push()
   image(confettiImage,0,0,1280,960)
  pop()
 }

 if (mouthopen >= 50){
  push()
   imageMode(CENTER)
   image(partycrabImage,noseTipX,noseTipY+75,crabSize+120,crabSize)
  pop()
 }


 let faceSize = dist(sideFaceX,sideFaceY, sideFaceX2,sideFaceY2)
 //console.log(faceSize) //170, 390


 if (faceSize >= 200 && faceSize <= 280){
  push()
   imageMode(CENTER)
   image(tatcrabImage2,noseTipX,noseTipY+75,crabSize+120,crabSize)
  pop()
 }

 if (faceSize >= 280 && faceSize <= 340){
  push()
   imageMode(CENTER)
   image(tatcrabImage2,noseTipX,noseTipY+75,crabSize+120,crabSize)
  pop()
 }

 if (faceSize >= 340){
  push()
   imageMode(CENTER)
   image(tatcrabImage,noseTipX,noseTipY+75,crabSize+120,crabSize)
  pop()
 }

//if (detectHandGesture = "Peace"){
if (key==='p'){
   push()
   imageMode(CENTER)
   image(partycrabImage,noseTipX,noseTipY+75,crabSize+120,crabSize)
  pop()  
}

if (key==='t'){
   push()
   imageMode(CENTER)
   image(tatcrabImage,noseTipX,noseTipY+75,crabSize+120,crabSize)
  pop()  
}



 strokeWeight(5)
    fill(255, 218, 143);
    // fill(get(leftEyeCenterX, leftEyeCenterY))
     stroke(117, 19, 1)
    ellipse(leftEyeCenterX, leftEyeCenterY, leftEyeWidth+20, leftEyeHeight*3);
    fill(117, 19, 1)
      noStroke()
    ellipse(leftEyeCenterX,leftEyeCenterY, 30, leftEyeHeight+10);
   //righteye
    fill(255, 218, 143);
     stroke(117, 19, 1)
    ellipse(rightEyeCenterX, rightEyeCenterY, rightEyeWidth+20, rightEyeHeight*3);
    fill(117, 19, 1)
       noStroke()
    ellipse(rightEyeCenterX,rightEyeCenterY, 30, rightEyeHeight+10);




   


    // fill(225, 225, 0);
    // ellipse(leftEyeCenterX, leftEyeCenterY, leftEyeWidth, leftEyeHeight);

    // drawPoints(face.leftEye);
    // drawPoints(face.leftEyebrow);
    // drawPoints(face.lips);
    // drawPoints(face.rightEye);
    // drawPoints(face.rightEyebrow);
    /*
    Stop drawing on the face here
    */

  }
  //------------------------------------------------------
  // You can make addtional elements here, but keep the face drawing inside the for loop. 
   image(forefrontImage,0,0,1280,960)
}


function drawConnections(hand) {
  // Draw the skeletal connections
  push()
  for (let j = 0; j < connections.length; j++) {
    let pointAIndex = connections[j][0];
    let pointBIndex = connections[j][1];
    let pointA = hand.keypoints[pointAIndex];
    let pointB = hand.keypoints[pointBIndex];
    stroke(255, 0, 0);
    strokeWeight(2);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
  }
  pop()
}

function pinchCircle(hand) { // adapted from https://editor.p5js.org/ml5/sketches/DNbSiIYKB
  // Find the index finger tip and thumb tip
  let finger = hand.index_finger_tip;
  //let finger = hand.pinky_finger_tip;
  let thumb = hand.thumb_tip;

  // Draw circles at finger positions
  let centerX = (finger.x + thumb.x) / 2;
  let centerY = (finger.y + thumb.y) / 2;
  // Calculate the pinch "distance" between finger and thumb
  let pinch = dist(finger.x, finger.y, thumb.x, thumb.y);

  // This circle's size is controlled by a "pinch" gesture
  fill(0, 255, 0, 200);
  stroke(0);
  strokeWeight(2);
  circle(centerX, centerY, pinch);

}


// This function draw's a dot on all the keypoints. It can be passed a whole face, or part of one. 
function drawPoints(feature) {

  push()
  for (let i = 0; i < feature.keypoints.length; i++) {
    let element = feature.keypoints[i];
    noStroke();
    fill(0, 255, 0);
    circle(element.x, element.y, 5);
  }
  pop()

}