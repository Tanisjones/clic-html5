function UserInterface()
{
	//Variables del canvas
	var context;
	var canvasWidth;
	var canvasHeight;
	var textControl = new Text();
	var textInicial = new Text();
	var numActivitat;
	
	//Imatges
	var ctrlImages = [
	              { "src" : './images/arrow_left_green.png', "posx" : 10, "posy" : 10, "w" : 35, "h" : 35},
	              { "src" : './images/arrow_right_green.png', "posx" : 60, "posy" : 10, "w" : 35, "h" : 35},
	         ];
	var myimages = new ImageSet();
	var clicked; 
	
	this.init = function(canvas,num) {
		////////////////////////////////////////////////
		//Inicialitzem el canvas de control
		canvasWidth  = canvas.width;
		canvasHeight = canvas.height;
		canvasLeft = canvas.offsetLeft;
		canvasTop = canvas.offsetTop;
		context = canvas.getContext("2d");
		numActivitat = num;
		
		textControl.context = context;
		textControl.face = vector_battle;
		
		//Inicialitzar les imatges
		var i;
		for (i=0;i<ctrlImages.length;i++){
			var img = new ImageData(i,context,ctrlImages[i].src);
			img.setPosition(ctrlImages[i].posx,ctrlImages[i].posy);
			img.setSize(ctrlImages[i].w,ctrlImages[i].h);
			myimages.add(img);
		}
	};
	
	this.draw = function(numCell) {
		//CLEAR SCREEN
		context.clearRect(0, 0, canvasWidth, canvasHeight);

		//DRAW THE IMAGES
		myimages.draw();
		textControl.renderText(dadesActivitats.activitats[numActivitat].cell[numCell].atributs.p, 24, 180,30);
		
		/*if(ControlData.active)
			textControl.renderText('TOUCH POS: '+(ControlData.startPosX-canvasLeft)+' '+(ControlData.startPosY-canvasTop)+' '+ControlData.active, 24, 10,30);*/  
	};
	
	this.checkClics =  function(){
		
		if(ControlData.active)
		{
			if(clicked=='none')
				clicked=myimages.getFrontImage(ControlData.startPosX-canvasLeft, ControlData.startPosY-canvasTop);

			//Mirem si hem apretat algun boto
			if(clicked!='notfound' && clicked!='none') {
				if( clicked.id == 'image0'){ControlData.active=false; return "previous";}
				if( clicked.id == 'image1'){ControlData.active=false; return "next";}		
			}	
		} else {
			clicked='none';
		}
		return "none";
	};
}

