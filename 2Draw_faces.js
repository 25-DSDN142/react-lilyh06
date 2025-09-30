// ----=  Faces  =----
/* load images here */
function prepareInteraction() {
  //bgImage = loadImage('/images/background.png');
   crabImage = loadImage('images/crabtest.png');
   bgImage = loadImage('images/background test.png');
   forefrontImage = loadImage('images/forefront test.png');
}

function drawInteraction(faces, hands) {

  // for loop to capture if there is more than one face on the screen. This applies the same process to all faces. 
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i]; // face holds all the keypoints of the face\
    console.log(face);
    if (showKeypoints) {
      drawPoints(face)
    }
  
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
    // Here are some variables you may like to use. 
    // Face basics
    let faceCenterX = face.faceOval.centerX;
    let faceCenterY = face.faceOval.centerY;
    let faceWidth = face.faceOval.width;
    let faceheight = face.faceOval.height;
    // Left eye
    let leftEyeCenterX = face.leftEye.centerX;
    let leftEyeCenterY = face.leftEye.centerY;
    let leftEyeWidth = face.leftEye.width;
    let leftEyeHeight = face.leftEye.height;
    // Left eyebrow
    let leftEyebrowCenterX = face.leftEyebrow.centerX;
    let leftEyebrowCenterY = face.leftEyebrow.centerY;
    let leftEyebrowWidth = face.leftEyebrow.width;
    let leftEyebrowHeight = face.leftEyebrow.height;

    // Lips
    let lipsCenterX = face.lips.centerX;
    let lipsCenterY = face.lips.centerY;
    let lipsWidth = face.lips.width;
    let lipsHeight = face.lips.height;

    // Right eye
    let rightEyeCenterX = face.rightEye.centerX;
    let rightEyeCenterY = face.rightEye.centerY;
    let rightEyeWidth = face.rightEye.width;
    let rightEyeHeight = face.rightEye.height;

    // Right eyebrow
    let rightEyebrowCenterX = face.rightEyebrow.centerX;
    let rightEyebrowCenterY = face.rightEyebrow.centerY;
    let rightEyebrowWidth = face.rightEyebrow.width;
    let rightEyebrowHeight = face.rightEyebrow.height;

    let noseTipX = face.keypoints[4].x;
    let noseTipY = face.keypoints[4].y;

    let testX = face.keypoints[358].x;
    let testY = face.keypoints[358].y;

    let lefttriangleX1 = face.keypoints[448].x;
    let lefttriangleY1 = face.keypoints[448].y;
    let lefttriangleX2 = face.keypoints[451].x;
    let lefttriangleY2 = face.keypoints[451].y;
    let lefttriangleX3 = face.keypoints[280].x;
    let lefttriangleY3 = face.keypoints[280].y;

   let righttriangleX1 = face.keypoints[228].x;
    let righttriangleY1 = face.keypoints[228].y;
    let righttriangleX2 = face.keypoints[231].x;
    let righttriangleY2 = face.keypoints[231].y;
    let righttriangleX3 = face.keypoints[50].x;
    let righttriangleY3 = face.keypoints[50].y;

    let sideFace = face.keypoints[132].x;
    let sideFaceY = face.keypoints[97].y;

    let sidefaceRightX = face.keypoints[323].x;
    let sidefaceRightY = face.keypoints[323].y;
    let sidefaceLeftX = face.keypoints[93].x;
    let sidefaceLeftY = face.keypoints[93].x;

    /*
    Start drawing on the face here
    */
 image(bgImage,0,0,1280,960)
  strokeWeight(20)
  stroke(0)
  line(testX,testY,leftEyeCenterX,leftEyeCenterY)


   let eyedist = dist(leftEyeCenterX,leftEyeCenterY,rightEyeCenterX,rightEyeCenterY)
   console.log(eyedist) //210 and 70
   let crabSize = map(eyedist,210,70,700,150)
  
  push()
   imageMode(CENTER)
   image(crabImage,noseTipX,noseTipY+100,crabSize,crabSize)
  pop()




 strokeWeight(5)
    fill(255);
    // fill(get(leftEyeCenterX, leftEyeCenterY))
     stroke(255,0,0)
    ellipse(leftEyeCenterX, leftEyeCenterY, leftEyeWidth+20, leftEyeHeight+20);
    fill(0)
      noStroke()
    ellipse(leftEyeCenterX,leftEyeCenterY, 30, leftEyeHeight+10);
   //righteye
    fill(255);
     stroke(255,0,0)
    ellipse(rightEyeCenterX, rightEyeCenterY, rightEyeWidth+20, rightEyeHeight+20);
    fill(0)
       noStroke()
    ellipse(rightEyeCenterX,rightEyeCenterY, 30, rightEyeHeight+10);




    image(forefrontImage,0,0,1280,960)
  // triangle(lefttriangleX1,lefttriangleY1,lefttriangleX2,lefttriangleY2, lefttriangleX3,lefttriangleY3)
  // triangle(righttriangleX1,righttriangleY1,righttriangleX2,righttriangleY2, righttriangleX3,righttriangleY3)




    // drawPoints(face.leftEye);
    // drawPoints(face.leftEyebrow);
    // drawPoints(face.lips);
    // drawPoints(face.rightEye);
    // drawPoints(face.rightEyebrow);

    //  drawX(rightEyeCenterX,rightEyeCenterY);
    // drawX(leftEyeCenterX,leftEyeCenterY);


    //clownX(noseTipX,noseTipY); 

    // drawX(face.keypoints[332].x,face.keypoints[332].y);
    // drawX(face.keypoints[103].x,face.keypoints[103].y);


    /*
    Stop drawing on the face here
    */

  }
  //------------------------------------------------------
  // You can make addtional elements here, but keep the face drawing inside the for loop. 
}

function drawX(X, Y) {
  push()

  strokeWeight(15)
  line(X - 20, Y - 20, X + 20, Y + 20)
  line(X - 20, Y + 20, X + 20, Y - 20)

  pop()
}

function clownX(X,Y) {
push()
noStroke()
  fill(255,0,0)
  ellipse(X,Y, 70,70)


pop()

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