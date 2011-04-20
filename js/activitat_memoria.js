/**
 * ACTIVITAT PUZZLE
 */
function Memoria(){
	//Variables del canvas
	var context;
	var canvasWidth;
	var canvasHeight;
	var myText = new Text();
	
	//Variables especifiques d'aquesta activitat
	var frontImage='none';
	var colocades=0;
	var acabat=false;
	var lines,cols;
	var w,h;
	var myImages = new ImageSetMemory();
	var grid;
	var peces;
	var dist;
	var x = new Array();
	var y = new Array();
	var ordArray = new Array();
	
	//Funcio per a inicialitzar l'activitat a partir de les seves dades
	this.init = function(canvas, activityData){
		//Inicialitzar el canvas
		canvasWidth  = canvas.width;
		canvasHeight = canvas.height;
		context = canvas.getContext("2d");
		
		//Inicialitzar la font
		myText.context = context;
		myText.face = vector_battle;

		w=activityData.cellWidth;
		h=activityData.cellHeight;
		
		dist = activityData.distribucio;
		
		/**************************************
		// w: amplada general
		// h: alçada general
		// incrShowX: amplada peça
		// incrShowY: alçada peça
		***/
		
		if ((dist == "AB")||(dist == "BA")){
			lines=activityData.lines*2;
			cols=activityData.cols*2;
			
			if ((h*lines) > 566){ 	
				incrShowY=566/lines;
				aux=h-incrShowY;
				h=566;
				incrShowX=w-aux;
				w=incrShowX*cols;
			}else{
				incrShowY=h;
				h=incrShowY*lines;
			}
		}
		if ((dist == "AUB")||(dist == "BUA")){
			lines=activityData.lines*2;
			cols=activityData.cols;
			
			if ((w*cols) > 1000){ 
				incrShowX=1000/cols; 
				aux=w-incrShowX;
				w=1000;
				incrShowY=h-aux;
				h=incrShowY*lines;
			}else{
				incrShowX=w;
				w=incrShowX*cols;
			}
		}
		
		gridAx=(1024-w)/2;
		gridAy=(590-h)/2;
		
			//peces = createPecesMemory(context, activityData.llistaImatges, lines, cols, {width:w,height:h}, {x:gridAx,y:gridAy}, gridAx, gridAy);
		

		var id_img=0;
		var numPeca=1;
		var peces = new Array();
		
		for(var i=0; i<6; i++){
			
			var myImage = new Image();
			
			myImage.onload = function() {
				imageLoaded = true;
			};

			myImage.src = activityData.llistaImatges[i].src;
			var novaPeca = new ImageMemory(context, id_img, myImage,incrShowX,incrShowY);
			novaPeca.setNumPeca(numPeca);
			peces.push(novaPeca);
			id_img++;
			
			var novaPeca2 = new ImageMemory(context, id_img, myImage,incrShowX,incrShowY);
			novaPeca2.setNumPeca(numPeca);
			peces.push(novaPeca2);
			id_img++;
			
			numPeca++;
			
		}

		/////////////////////////////////////////////////////////DESORDENAR PECES
		
		for (var o=0;o<lines*cols;o++){
			ordArray[o]=o;
		}
		
		//// Trobem les posicions que hi haurà a la graella
		
		var theX = gridAx;
		var theY = gridAy;
		var o = 0;
	    
		for(var i=0;i<lines;i++) { 
	        for(var j=0;j<cols;j++) { 
	        	x[o]=theX;
	        	y[o]=theY;
	        	theX += incrShowX;
	            o++;
	        }
	        theX = gridAx;
	        theY +=  incrShowY;
	    }
	    /////
		
		ordArray.sort( randOrd );
		
		for (var o=0;o<peces.length;o++){
			peces[o].setPosx(x[ordArray[o]]);
			peces[o].setPosy(y[ordArray[o]]);
		}	
		/////////////////////////////////////////////////////////////////////////////
			
		
		grid = new Grid(context, lines, cols, {width:w,height:h}, {x:gridAx,y:gridAy});
		
		for (var o=0;o<peces.length;o++){	
			myImages.add(peces[o]);
		}
		
	};
	
	//Aqui dins va el codi de l'activitat
	this.run = function() {
		context.clearRect(0, 0, canvasWidth, canvasHeight);
		
		//DRAW THE IMAGE
		myImages.draw();
		grid.draw();
		
		//LLEGIR DADES USUARI
		if(DragData.active)
		{
			myText.renderText('DRAG FROM: '+DragData.startPosX+' '+DragData.startPosY, 24, 10,30);  
			
			//Choose the selected image and activate it
			if(frontImage=='none'){	
				frontImage=myImages.getFrontImage(DragData.startPosX, DragData.startPosY);
				if(frontImage!='notfound') frontImage.setDraggable();
				
			}
			//Move the dragged image around
			if(frontImage!='notfound'){
				frontImage.drag(DragData.startPosX-DragData.currentPosX, DragData.startPosY-DragData.currentPosY);
			}
			
		//Disable the current active image
		}else{
			/**
			 * FER LA LÍNIA D'UNIÓ
			 */
			
			context.beginPath(); //esborra anteriors
			context.moveTo(DragData.currentPosX, DragData.currentPosY);
			context.lineTo(frontImage.posx, 600);
			/* draw it! */   
			context.strokeStyle = "#000";
			context.stroke();	
			
			/*if (!frontImage.colocada){	//per col·locar-la no h a d'estar col·locada
				if (DragData.currentPosX>=(frontImage.colocaciox)&&DragData.currentPosX<=(frontImage.colocaciox+frontImage.w)&&
						DragData.currentPosY>=(frontImage.colocacioy)&&DragData.currentPosY<=(frontImage.colocacioy+frontImage.h)){
					frontImage.posx=frontImage.colocaciox;
					frontImage.posy=frontImage.colocacioy;
					colocades++;
					frontImage.colocada=true;
				}else{	//Si no es col·loca on toca torna a posició inicial
					frontImage.posx=frontImage.iniposx;
					frontImage.posy=frontImage.iniposy;
				}
			}else{
				//si ja estava col·locada torna a col·locar-se bé!!
				frontImage.posx=frontImage.colocaciox;
				frontImage.posy=frontImage.colocacioy;
			}
				
			if(frontImage!='none'){
				if(frontImage!='notfound') frontImage.unsetDraggable();
				frontImage='none';
			}*/
		}		
		
		//COMPROVAR ESTAT ACTIVITAT
		if(colocades==lines*cols){
			acabat=true;
		}
		
		if(acabat){
			myText.renderText('FINALITZAT:', 24, 30,60);
		}
		
		
		
	};
	
	//Aquest funcio s'ha de cridar un cop s'ha acabat l'activitat i es canvia a una altra
	this.end = function() {
		delete(grid);
		//Aqui hauriem d'alliberar la memoria de les imatges (si es pot)
		return;
	};
}

