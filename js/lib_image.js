function randOrd(){
	return (Math.round(Math.random())-0.5); 
} 

function Peca(ctxt,id,img,posx,posy,w,h,insidePointx,insidePointy,insideSizew,insideSizeh,colocaciox,colocacioy,showH,showW)
{
   this.ctxt = ctxt;
   this.id = id;
   this.img = img;
   this.posx = posx;
   this.posy = posy;
   this.w = w;
   this.h = h;
   this.insidePointx = insidePointx;
   this.insidePointy = insidePointy;
   this.insideSizew = insideSizew;
   this.insideSizeh = insideSizeh;
   this.colocaciox = colocaciox;
   this.colocacioy = colocacioy;
   this.depth = 0;  
   this.iniposx=posx;
   this.iniposy=posy;
   this.colocada=false;
   this.showH=showH;
   this.showW=showW;
   this.numPeca;

   this.setPosx = function(x){
	   this.posx = x;
	   this.iniposx = x;
   };
   
   this.setPosy = function(y){
	   this.posy = y;
	   this.iniposy = y;
   };
   
   this.setNumPeca = function(numPeca){
	   this.numPeca = numPeca;
   };
   
   //Renders the image in the screen
   this.draw2 = function() {
	   this.ctxt.drawImage(this.img,this.posx,this.posy,this.showW,this.showH);
	};
	
	this.draw = function() {
		this.ctxt.drawImage(this.img,this.insidePointx,this.insidePointy,this.insideSizew,this.insideSizeh,this.posx,this.posy,this.showW,this.showH);
	};
	
	//Checks if the point x,y is inside the image
	this.isInside = function(x,y){
		if (x>=this.posx && x<=(this.posx+this.w) 
				&& y>=this.posy && y<=(this.posy+this.h)) return true;
		return false;
	};

	//Activates the image as a draggable element
	this.setDraggable = function(){
		//Save some data
		this.previousDepth= this.depth;
		this.depth=20;
		this.startX = this.posx;
		this.startY = this.posy;
	};
	
	//Sets the depth of the image
	//Depth must be an integer value between 0 (back) and 20 (front)
	this.setDepth = function(depth){
		this.depth = depth;
	};
	
	//Deactivates the image as a draggable element
	this.unsetDraggable = function(){
		this.depth= this.previousDepth;
	};
	
	//Drags the image according to a relative increment
	this.drag = function(incX,incY){
		this.posx =  this.startX-incX;
		this.posy =  this.startY-incY;
	};

}

function ImageMemory(ctxt,id,img,showH,showW)
{
   this.ctxt = ctxt;
   this.id = id;
   this.img = img;
   this.posx;
   this.posy;
   this.depth = 0;
   this.showH=showH;
   this.showW=showW;
   this.colocada=false;
   this.numPeca;
   this.hidden=true;
   this.llocPeca;
   
   this.setPosx = function(x){
	   this.posx = x;
   };
   
   this.setPosy = function(y){
	   this.posy = y;
   };
   
   this.setNumPeca = function(numPeca){
	   this.numPeca = numPeca;
   };
   
   this.llocPeca = function(llocPeca){
	   this.llocPeca = llocPeca;
   };
   
   this.setHidden = function(hidden){
	   this.hidden = hidden;
   };
   
   //Renders the image in the screen
   this.draw = function() {
	   if (!this.hidden){
		   this.ctxt.drawImage(this.img,this.posx,this.posy,this.showW,this.showH);
	   }
	};
	
	//Checks if the point x,y is inside the image
	this.isInside = function(x,y){
		if (x>=this.posx && x<=(this.posx+this.showW) 
				&& y>=this.posy && y<=(this.posy+this.showH)) return true;
		return false;
	};

	//Activates the image as a draggable element
	this.setDraggable = function(){
		//Save some data
		this.previousDepth= this.depth;
		this.depth=20;
		this.startX = this.posx;
		this.startY = this.posy;
	};
	
	//Sets the depth of the image
	//Depth must be an integer value between 0 (back) and 20 (front)
	this.setDepth = function(depth){
		this.depth = depth;
	};
	
	//Deactivates the image as a draggable element
	this.unsetDraggable = function(){
		this.depth= this.previousDepth;
	};
	
	//Drags the image according to a relative increment
	this.drag = function(incX,incY){
		this.posx =  this.startX-incX;
		this.posy =  this.startY-incY;
	};
}

function createPeca(ctxt,myImage,lines,cols,imageSize,basePosition,imageColocation,imageShow)
{
    var incrY = imageSize.height/lines;
    var incrX = imageSize.width/cols;
    var incrShowY = imageShow.h/lines;
    var incrShowX = imageShow.w/cols;
    var theX = basePosition.x;
    var theY = basePosition.y;
    var peces = new Array();
    var id_img=0;
    for(var i=0;i<lines;i++) { 
        for(var j=0;j<cols;j++) { 
        	peces.push(new Peca(ctxt, id_img, myImage,theX,theY,incrShowX,incrShowY,(j*incrX),(i*incrY),incrX,incrY,imageColocation.x+(j*incrShowX),imageColocation.y+(i*incrShowY),incrShowY,incrShowX));
        	theX += incrShowX;
            id_img++;
        }
        theX = basePosition.x;
        theY +=  incrShowY;
    }
    return peces;
}

function arrodonir(quantitat, decimals) {
	var quantitat = parseFloat(quantitat);
	var decimals = parseFloat(decimals);
	decimals = (!decimals ? 2 : decimals);
	return Math.round(quantitat * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

function Grid(ctxt,lines,cols,imageSize,basePosition)
{	
	this.ctxt = ctxt;
	this.lines = lines;
	this.cols = cols;
    this.incrY2 = imageSize.height/lines;//220/3 = 73.333
    this.incrX2 = imageSize.width/cols;//220/3 = 73.333
    this.incrY=arrodonir(this.incrY2,4);
    this.incrX=arrodonir(this.incrX2,4);
    this.theX = basePosition.x;//518
    this.theY = basePosition.y;//185
	
	//Renders the board in the screen
	this.draw = function() {
		this.ctxt.beginPath(); //esborra anteriors
		for (var x = this.theX; x < (this.theX+((this.cols+1)*this.incrX)); x += this.incrX) {
			this.ctxt.moveTo(x, this.theY);
			this.ctxt.lineTo(x, this.theY+imageSize.height);
		}
		   
		for (var y = this.theY; y < (this.theY+((this.lines+1)*this.incrY)); y += this.incrY) {
			this.ctxt.moveTo(this.theX, y);
			this.ctxt.lineTo(this.theX+imageSize.width, y);
		}
		/* draw it! */   
		this.ctxt.strokeStyle = "#000";
		this.ctxt.stroke();	
	};
}

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
function ImageData(id,context,src)
{
	this.context=context;
	this.id = 'image'+id;
	this.posX = 0;
	this.posY = 0;
	this.depth = 0;

	this.img = new Image();
	this.img.src = src;
	
	//Sets the x,y position of the image
	this.setPosition = function(posX,posY){
		this.posX = posX;
		this.posY = posY;
	};
	
	//Sets the dimensions of the image
	this.setSize = function(width,height){
		this.img.width = width;
		this.img.height = height;	
	};
	
	//Sets the depth of the image
	//Depth must be an integer value between 0 (back) and 20 (front)
	this.setDepth = function(depth){
		this.depth = depth;
	};
	
	//Renders the image in the screen
	this.draw = function(){
		this.context.drawImage(this.img, this.posX, this.posY, this.img.width, this.img.height);
	};
	
	//Checks if the point x,y is inside the image
	this.isInside = function(x,y){
		if (x>=this.posX && x<=(this.posX+this.img.width) 
				&& y>=this.posY && y<=(this.posY+this.img.height)) return true;
		return false;
	};
	
	//Activates the image as a draggable element
	this.setDraggable = function(){
		//Save some data
		this.previousDepth= this.depth;
		this.depth=20;
		this.startX = this.posX;
		this.startY = this.posY;
	};
	
	
	//Deactivates the image as a draggable element
	this.unsetDraggable = function(){
		this.depth= this.previousDepth;
	};
	
	//Drags the image according to a relative increment
	this.drag = function(incX,incY){
		this.posX =  this.startX-incX;
		this.posY =  this.startY-incY;
	};
} 


////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
//A collection of images
function ImageSet()
{
	this.images = new Array(20);
	this.num_images = 0;
	
	//Adds an image to the collection
	this.add = function(image){
		this.images[this.num_images]=image;
		this.num_images++;
	};
	
	// Draws all the images (maintaining the order)
	this.draw = function(){
		var i,depth;
		for(depth=0;depth<21;depth++){
			for (i=0;i<this.num_images;i++){
				if(this.images[i].depth==depth){
					this.images[i].draw();
				}
			}
		}
	};
	
	//Returns the most frontal image at position x,y
	this.getFrontImage = function(x, y){
		var img = 'notfound';
		var currentdepth = 0;
	 	
		for (i=0;i<this.num_images;i++){
			if(this.images[i].isInside(x,y) && 
			   this.images[i].depth>=currentdepth) {
				img = this.images[i];
				currentdepth = this.images[i].depth;
			}
		}	
		return img;
	};
}

//A collection of images
function ImageSetMemory()
{
	this.images = new Array(20);
	this.num_images = 0;
	
	//Adds an image to the collection
	this.add = function(image){
		this.images[this.num_images]=image;
		this.num_images++;
	};
	
	// Draws all the images (maintaining the order)
	this.draw = function(){
		var i,depth;
		for(depth=0;depth<21;depth++){
			for (i=0;i<this.num_images;i++){
				if(this.images[i].depth==depth){
					this.images[i].draw();
				}
			}
		}
	};
	
	//Returns the most frontal image at position x,y
	this.getFrontImage = function(x, y){
		var img = 'notfound';
		var currentdepth = 0;
		
		for (i=0;i<this.num_images;i++){
			if(this.images[i].isInside(x,y) && 
			   this.images[i].depth>=currentdepth) {
				img = this.images[i];
				currentdepth = this.images[i].depth;
			}
		}	
		return img;
	};
}
