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
	var myImages = new ImageSet();
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
		/*
		//Inicialitzar les imatges
		var myImage = new Image();
		myImage.onload = function() {
			imageLoaded = true;
		};
		myImage.src = activityData.imatge.src;
*/
		//Problema amb les mides de la foto !!!!!!!!!!!!!!!!!!!!!!!!!!!
		//w=myImage.width;
		//h=myImage.height;
		
		lines=activityData.lines*2;
		cols=activityData.cols;
		/**/
		w=100*cols;
		h=100*lines;
		
		gridAx=(1024-w)/2;
		gridAy=(590-h)/2;
	
		//peces = createPecesMemory(context, activityData.llistaImatges, lines, cols, {width:w,height:h}, {x:gridAx,y:gridAy}, gridAx, gridAy);
		
		grid = new Grid_rectangular(context, lines, cols, {width:w,height:h}, {x:gridAx,y:gridAy});
		
		
	
		/*for (var o=0;o<peces.length;o++){	
			myImages.add(peces[o]);
		} */
		
		
		/*
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
		}	
		
	
		
*/
	};
	
	//Aqui dins va el codi de l'activitat
	this.run = function() {
		context.clearRect(0, 0, canvasWidth, canvasHeight);

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
			if (!frontImage.colocada){	//per col�locar-la no h a d'estar col�locada
				if (DragData.currentPosX>=(frontImage.colocaciox)&&DragData.currentPosX<=(frontImage.colocaciox+frontImage.w)&&
						DragData.currentPosY>=(frontImage.colocacioy)&&DragData.currentPosY<=(frontImage.colocacioy+frontImage.h)){
					frontImage.posx=frontImage.colocaciox;
					frontImage.posy=frontImage.colocacioy;
					colocades++;
					frontImage.colocada=true;
				}else{	//Si no es col�loca on toca torna a posici� inicial
					frontImage.posx=frontImage.iniposx;
					frontImage.posy=frontImage.iniposy;
				}
			}else{
				//si ja estava col�locada torna a col�locar-se b�!!
				frontImage.posx=frontImage.colocaciox;
				frontImage.posy=frontImage.colocacioy;
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
		//myImages.draw();
		grid.draw();
	};
	
	//Aquest funcio s'ha de cridar un cop s'ha acabat l'activitat i es canvia a una altra
	this.end = function() {
		delete(grid);
		//Aqui hauriem d'alliberar la memoria de les imatges (si es pot)
		return;
	};
}

