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
	var numPrimer, numSegon;
	var primerClic = false;
	var segonClic = false;
	var tercerClic = false;
	var idPrimer = 'none';
	var idSegon = 'none';
	var numPeca=1;
	
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
			
			if ((h*lines) > (canvasHeight-24)){ 	
				incrShowY=(canvasHeight-24)/lines;
				aux=h-incrShowY;
				h=(canvasHeight-24);
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
			
			if ((w*cols) > (canvasWidth-24)){ 
				incrShowX=(canvasWidth-24)/cols; 
				aux=w-incrShowX;
				w=(canvasWidth-24);
				incrShowY=h-aux;
				h=incrShowY*lines;
			}else{
				incrShowX=w;
				w=incrShowX*cols;
			}
		}
		
		gridAx=(canvasWidth-w)/2;
		gridAy=(canvasHeight-h)/2;

		var id_img=0;
		var peces = new Array();
		
		for(var i=0; i<activityData.llistaImatges.length; i++){
			
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
			if(frontImage=='none'){	
				frontImage=myImages.getFrontImage(DragData.startPosX, DragData.startPosY);
				if(frontImage!='notfound') frontImage.setDraggable();
			}

			if (DragData.currentPosX >= gridAx && DragData.currentPosX < gridAx+w && DragData.currentPosY >= gridAy && DragData.currentPosY < gridAy+h){
				primerClic = true;
				if (segonClic==true){
					idSegon = frontImage.id;
					myImages.images[idSegon].setHidden(false);
					
					numPrimer = myImages.images[idPrimer].numPeca;
					numSegon = myImages.images[idSegon].numPeca;
					
					tercerClic=true;
				}
			}
			
		//Disable the current active image
		}else{

			if (DragData.currentPosX >= gridAx && DragData.currentPosX < gridAx+w && DragData.currentPosY >= gridAy && DragData.currentPosY < gridAy+h){
				if(tercerClic==true)
				{
					if(numPrimer != numSegon){
						myImages.images[idPrimer].setHidden(true);
						myImages.images[idSegon].setHidden(true);
					}else{
						colocades++;
					}
					
					segonClic = false;
					primerClic = false;
					tercerClic = false;
					idPrimer='none';
					idSegon='none';
				}
				
				if(primerClic==true){
					idPrimer = frontImage.id;
					myImages.images[idPrimer].setHidden(false);
					segonClic = true;
				}
			}
			
			if(frontImage!='none'){
				if(frontImage!='notfound') frontImage.unsetDraggable();
				frontImage='none';
			}
			primerClic = false;
		}	
	
		//COMPROVAR ESTAT ACTIVITAT
		if(colocades==(numPeca-1)){
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

