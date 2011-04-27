/**
 * ACTIVITAT PUZZLE
 */
function PuzzleIntercanvi(){
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
	var myImages = new ImageSet();
	var grid;
	var peces = new Array();
	var dist;
	var x = new Array();
	var y = new Array();
	var ordArray = new Array();
	var grid, showW, showH, gridAx, gridAy;
	var primerClic = false;
	var segonClic = false;
	var tercerClic = false;
	var idPrimer = 'none';
	var idSegon = 'none';
	
	//Funcio per a inicialitzar l'activitat a partir de les seves dades
	this.init = function(canvas, activityData){
		//Inicialitzar el canvas
		canvasWidth  = canvas.width;
		canvasHeight = canvas.height;
		context = canvas.getContext("2d");
		
		//Inicialitzar la font
		myText.context = context;
		myText.face = vector_battle;
		
		//Inicialitzar les imatges
		var myImage = new Image();
		
		myImage.onload = function() {
			imageLoaded = true;
			w=myImage.width;
			h=myImage.height;
			showW=myImage.width;
			showH=myImage.height;
			
			gridAx=(canvasWidth-w)/2;
			gridAy=(canvasHeight-h)/2;
			if(w > (canvasWidth-50)){
				showW=(canvasWidth-50)/2; 
				showH=h-(w-((canvasWidth-50)/2)); 
				gridAx=(canvasWidth-showW)/2; 
				gridAy=(canvasHeight-showH)/2; 
			}
			
			lines=activityData.imatge.lines;
			cols=activityData.imatge.cols;
				
			peces = createPeca(context, myImage, lines, cols, {width:w,height:h}, {x:gridAx,y:gridAy}, {x:gridAx,y:gridAy}, {w:showW,h:showH});
			
			grid = new Grid(context, lines, cols, {width:showW,height:showH}, {x:gridAx,y:gridAy});

			/*****************DESORDENAR PECES*************************/ 
			for (var o=0;o<lines*cols;o++){
				ordArray[o]=o;
			}
			
			ordArray.sort( randOrd );

			for (var o=0;o<peces.length;o++){
				x[o]=peces[o].posx;
				y[o]=peces[o].posy;
			}
			
			for (var o=0;o<peces.length;o++){
				peces[o].setPosx(x[ordArray[o]]);
				peces[o].setPosy(y[ordArray[o]]);
				peces[o].llocPeca=ordArray[o];
			}	
			/************************************************************/

			for (var o=0;o<peces.length;o++){	
				myImages.add(peces[o]);
			} 

		};
		myImage.src = activityData.imatge.src;
	};
	
	//Aqui dins va el codi de l'activitat
	this.run = function() {
		context.clearRect(0, 0, canvasWidth, canvasHeight);

		if(DragData.active)
		{  
			if(frontImage=='none'){	
				frontImage=myImages.getFrontImage(DragData.startPosX, DragData.startPosY);
				if(frontImage!='notfound') frontImage.setDraggable();
			}

			//MIRAR SI S'HA CLICAT FORA DEL PANELL
			if (DragData.currentPosX >= gridAx && DragData.currentPosX < w && DragData.currentPosY >= gridAy && DragData.currentPosY < h){
				primerClic = true;
				if (segonClic==true){
					idSegon = frontImage.id;
					tercerClic=true;
				}
			}
		}else{

			colocades=0;
			
			//MIRAR SI S'HA CLICAT FORA DEL PANELL
			if (DragData.currentPosX >= gridAx && DragData.currentPosX < w && DragData.currentPosY >= gridAy && DragData.currentPosY < h){
				if(tercerClic==true)
				{
					var auxX = myImages.images[idPrimer].posx;
					var auxY = myImages.images[idPrimer].posy;
					
					myImages.images[idPrimer].setPosx(myImages.images[idSegon].posx);
					myImages.images[idPrimer].setPosy(myImages.images[idSegon].posy);
					
					myImages.images[idSegon].setPosx(auxX);
					myImages.images[idSegon].setPosy(auxY);
	
					segonClic = false;
					primerClic = false;
					tercerClic = false;
					idPrimer='none';
					idSegon='none';
					
					//COMPROVAR SI ESTAN TOTES COL·LOCADES
					for (var i=0; i<lines*cols;i++){
						if (myImages.images[i].posx==myImages.images[i].colocaciox && myImages.images[i].posy==myImages.images[i].colocacioy){
							colocades++;
						}
					}
				}
			
				if(primerClic==true){
					idPrimer = frontImage.id;
					segonClic = true;
				}
			}
			
			if(frontImage!='none'){
				if(frontImage!='notfound') frontImage.unsetDraggable();
				frontImage='none';
			}	
		}		
		
		//COMPROVAR ESTAT ACTIVITAT
		if(colocades==lines*cols){
			acabat=true;
		}
		
		if(acabat){
			myText.renderText('FINALITZAT:', 24, 30,60);
		}
		
		//DRAW THE IMAGE
		myImages.draw();
		grid.draw();

	};
	
	//Aquest funcio s'ha de cridar un cop s'ha acabat l'activitat i es canvia a una altra
	this.end = function() {
		delete(grid);
		//Aqui hauriem d'alliberar la memoria de les imatges (si es pot)
		return;
	};
}

