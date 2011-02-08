
$(function () {
  var canvas = $("#canvas");
  canvasWidth  = canvas.width();
  canvasHeight = canvas.height();

  var context = canvas[0].getContext("2d");

  Text.context = context;
  Text.face = vector_battle;

  var i, j = 0;
  var avgFramerate = 0;
  var frameCount = 0;
  var elapsedCounter = 0;

  var lastFrame = Date.now();
  var thisFrame;
  var elapsed;
  var delta;

  
  // MAIN LOOP FUNCTION
  var mainLoop = function () {
	  
	//CLEAR SCREEN
    context.clearRect(0, 0, canvasWidth, canvasHeight);

    //COUNT THE TIME AND FRAMES PER SECOND
    thisFrame = Date.now();
    elapsed = thisFrame - lastFrame;
    lastFrame = thisFrame;
    frameCount++;
    elapsedCounter += elapsed;
    if (elapsedCounter > 1000) {
      elapsedCounter -= 1000;
      avgFramerate = frameCount;
      frameCount = 0;
    }
    delta = elapsed / 30;
    
    // PRINT THE FRAME RATE
    Text.renderText('FPS:'+avgFramerate, 24, canvasWidth - 118, canvasHeight - 2);

    if (TouchData.numFingers>0) 
    {
    	for(i=0; i<TouchData.numFingers; i++)
    	{
        	Text.renderText('FINGER:'+TouchData.posX[0]+' '+TouchData.posY[0], 24, 10,30+30*i);    	
    	}
    	TouchData.numFingers=0;
    }
    
  };

  // START MAINLOOP
  var mainLoopId = setInterval(mainLoop, 25);
});
