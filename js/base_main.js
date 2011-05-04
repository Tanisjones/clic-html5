function iniciaActivitat(canvas,num) {
	var act;
	//Posar aqui tots els tipus d'activitat que hi hagi
	
	if (dadesActivitats.activitats[num].atributsActivitat.class == "@puzzles.DoublePuzzle") { act = new PuzzleDoble(); }
	if (dadesActivitats.activitats[num].atributsActivitat.class == "@puzzles.ExchangePuzzle") { act = new PuzzleIntercanvi(); }
	if (dadesActivitats.activitats[num].atributsActivitat.class == "@memory.MemoryGame") { act = new Memoria(); }
	if (dadesActivitats.activitats[num].atributsActivitat.class == "@panels.InformationScreen") { act = new Panels(); }
	
	//Inicialitzar l'activitat
	act.init(canvas, dadesActivitats.activitats[num]);
	return act;
}


////////////////////////////////////////////////
var canvas = document.getElementById('canvas');
var canvasControl = document.getElementById('canvasControl');
var numActivitat = 0;
	
//Inicialitzem l'interficie d'usuari
var UI = new UserInterface();
UI.init(canvasControl,numActivitat);
var uiClic;

//Triem la primera activitat i l'inicalitzem
var activitatActual=iniciaActivitat(canvas, numActivitat);


// MAIN LOOP FUNCTION
var mainLoop = function () {	
	
	//Dibuixem l'interficie d'usuari
	if (activitatActual.acabat){
		UI.draw(1);
	}else{
		UI.draw(0);
	}

	//Mirem si hi ha algun event a la interficie d'usuari
	uiClic = UI.checkClics();
	if (uiClic == "next")
	{	
		//Mirem si podem avan�ar a la segŸent activitat
		if (numActivitat < maxActivitats-1) 
		{
			//Tanquem l'activitat anterior
			activitatActual.end();
			
			//I comencem la nova
			numActivitat++;
			activitatActual=iniciaActivitat(canvas, numActivitat);
		}
	} 
	else if (uiClic == "previous") {
		//Mirem si podem anar a l'activitat anterior
		if (numActivitat > 1) 
		{
			//Tanquem l'activitat anterior
			activitatActual.end();
			
			//I comencem la nova
			numActivitat--;
			activitatActual=iniciaActivitat(canvas, numActivitat);
		}
	}
	
	//Despres actualitzem l'activitat que tenim en progres
	activitatActual.run();

};

// START MAINLOOP
var mainLoopId = setInterval(mainLoop, 25);
