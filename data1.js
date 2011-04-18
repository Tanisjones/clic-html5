var maxActivitats = 3;
var tipusActivitat = [];
var dadesActivitat = [];

tipusActivitat[1] = "PuzzleDoble";
dadesActivitat[1] = {
					"textInit": "Activitat 1",
					"textFinal": "FINALITZAT",
					"imatge" : { "src" : './images/plane.jpg', "lines": 3, "cols": 3},
					"distribucio" : "AB"
					};

tipusActivitat[2] = "PuzzleIntercanvi";
dadesActivitat[2] = {
					"textInit": "Activitat 3",
					"textFinal": "FINALITZAT",
					"imatge" : { "src" : './images/plane.jpg', "lines": 3, "cols": 3}
					};

tipusActivitat[3] = "Memoria";
dadesActivitat[3] = {
					"textInit": "Activitat 2",
					"textFinal": "FINALITZAT",
					"imatge" : { "src" : './images/pingui.jpg'},
					"llistaImatges" : [{ "src" : './images/pirata2[1].jpg'},
					                   { "src" : './images/pirata1[1].png'},
					                   { "src" : './images/espada_pirata_63_cm_CM035LI_1[1].jpg'},
					                   { "src" : './images/dibuix pirata.jpg'},
					                   { "src" : './images/barret.jpg'},
					                   { "src" : './images/GarfioPirata[1].jpg'}],
					"cols": 6,
					"lines": 1
					};