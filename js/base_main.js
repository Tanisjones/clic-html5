function iniciaActivitat(canvas,num) {
	var act;
	//Posar aqui tots els tipus d'activitat que hi hagi
	
	//if (dadesActivitats.settings.atributsActivitat.title == "La xocolata") { act = new Memoria(); }
	if (dadesActivitats.settings.activitats[num].atributsActivitat.class == "@memory.MemoryGame") { act = new Memoria(); }
	
	//if (tipusActivitat[num] == "PuzzleDoble") { act = new PuzzleDoble(); }
	//if (tipusActivitat[num] == "PuzzleIntercanvi") { act = new PuzzleIntercanvi(); }
	
	//Inicialitzar l'activitat
	//act.init(canvas, dadesActivitat[num]);
	act.init(canvas, dadesActivitat[num]);
	return act;
}


////////////////////////////////////////////////
var canvas = document.getElementById('canvas');
var canvasControl = document.getElementById('canvasControl');

	
//Inicialitzem l'interficie d'usuari
var UI = new UserInterface();
UI.init(canvasControl);
var uiClic;

//Triem la primera activitat i l'inicalitzem
var numActivitat = 0;
var activitatActual=iniciaActivitat(canvas, numActivitat);


// MAIN LOOP FUNCTION
var mainLoop = function () {	
	
	//Dibuixem l'interficie d'usuari
	UI.draw();
	
	//Mirem si hi ha algun event a la interficie d'usuari
	uiClic = UI.checkClics();
	if (uiClic == "next")
	{	
		//Mirem si podem avan�ar a la segŸent activitat
		if (numActivitat < maxActivitats) 
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
