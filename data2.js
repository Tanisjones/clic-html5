var maxActivitats = 3;
var tipusActivitat = [];
var dadesActivitat = [];

tipusActivitat[1] = "Memoria";
dadesActivitat[1] = {
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
					"lines": 1,
					"cellWidth" : 225.0,
					"cellHeight" : 225.0,
					"distribucio" : "AUB",
					"atributsActivitat":{	"settings-window-border":"true",
											"settings-window-bgColor":"0xFF9933",
											"settings-container-counters-score":"true",
											"layout-position":"AUB",
											"class":"@memory.MemoryGame",
											"code":"",
											"settings-report":"true",
											"settings-margin":"8",
											"scramble-times":"31",
											"name":"Joc de mem�ria",
											"settings-container-counters-actions":"true",
											"settings-reportActions":"false",
											"settings-container-counters-time":"true",
											"settings-container-bgColor":"0xFFFF66"}
					};

tipusActivitat[2] = "PuzzleIntercanvi";
dadesActivitat[2] = {
					"textInit": "Activitat 3",
					"textFinal": "FINALITZAT",
					"imatge" : { "src" : './images/plane.jpg', "lines": 3, "cols": 3}
					};

tipusActivitat[3] = "PuzzleDoble";
dadesActivitat[3] = {
					"textInit": "Activitat 1",
					"textFinal": "FINALITZAT",
					"imatge" : { "src" : './images/plane.jpg', "lines": 3, "cols": 3},
					"distribucio" : "BUA"
					};

var dadesActivitats =	{"settings":
							{"atributsActivitat":
								{"skin-file":"@orange.xml",
								"organization-state":"Catalunya",
								"title":"La xocolata",
								"descriptors-level":"Infantil (3-6)",
								"organization-name":"CEIP La Florida",
								"language":"catal�",
								"organization-mail":"a8028436@centres.xtec.es",
								"author-name":"Maite �lvarez Leo",
								"descriptors-area":"Diversos",
								"organization-city":"Santa Perp�tua de Mogoda",
								"organization-url":"http://www.xtec.es/centres/a8028436",
								"author-mail":"malva232@xtec.cat"
								},
								"descripcio":["Projecte d\u0027activitats per a educaci� infantil sobre la xocolata. A partir 		d\u0027aquest centre d\u0027inter�s trobem activitats de matem�tiques, com ordenar 		s�ries; 	de lleg�es, com ordenar lletres, relacionar sons amb paraules escrites, etc..."],
								"index":1
							},
							"activitats":
								[{"atributsActivitat":
									{"settings-window-border":"true",
									"settings-window-bgColor":"0xFFFFFF",
									"settings-container-gradient-dest":"0xFFFFFF",
									"settings-container-counters-score":"true",
									"settings-container-gradient-angle":"108",
									"class":"@panels.InformationScreen",
									"code":"",
									"settings-report":"false",
									"settings-margin":"8",
									"settings-container-gradient-source":"0x993300",
									"name":"inici",
									"settings-container-counters-actions":"true",
									"settings-container-counters-time":"true",
									"settings-container-bgColor":"0xC0C0C0"
									},
									"cell":
										[{"atributs":
											{"media-level":"1",
											"style-font-family":"Astigma",
											"p":"LA XOCOLATA",
											"style-color-background":"0x993300",
											"style-color-foreground":"0xFFFFFF",
											"style-font-size":"50",
											"media-type":"PLAY_AUDIO",
											"type":"initial",
											"media-file":"la xocolata.mp3"}
										}],
										"celllist":[{"atributs":
														{"shaper-rows":"1",
														"cols":"1",
														"shaper-cols":"1",
														"shaper-class":"@Rectangular",
														"cellHeight":"312.0",
														"border":"true",
														"cellWidth":"336.0",
														"rows":"1"
														},
														"cell":[{"atributs":
																	{"image":"FOTO CACAU copia [640x480].jpg"}
																}]
													}]
									},
									{"atributsActivitat":
										{"settings-window-border":"true",
										"settings-window-bgColor":"0xFF0033",
										"settings-container-gradient-dest":"0xFF9933",
										"settings-container-counters-score":"true",
										"layout-position":"AUB",
										"settings-container-gradient-angle":"110",
										"settings-skin-file":"@orange.xml",
										"class":"@memory.MemoryGame",
										"code":"",
										"settings-report":"true",
										"settings-margin":"8",
										"scramble-times":"31",
										"settings-container-gradient-source":"0xFF6600",
										"name":"memori 1",
										"settings-container-counters-actions":"true",
										"settings-reportActions":"false",
										"settings-container-counters-time":"true",
										"settings-container-bgColor":"0xC0C0C0"
										},
										"cell":[{"atributs":
													{"style-color-background":"0x00CC33",
													"style-font-size":"48",
													"style-font-family":"Arial Black",
													"type":"initial",
													"p":"BUSCA LES PARELLES"}
												},
												{"atributs":
													{"media-level":"1",
													"style-font-family":"Arial Black",
													"p":"GENIAL!",
													"style-color-background":"0x33FF00",
													"style-font-size":"48",
													"media-type":"PLAY_AUDIO",
													"type":"final","media-file":"genial.mp3"}
												}],
										"celllist":[{"atributs":
														{"style-color-inactive":"0xFF6666",
														"id":"primary",
														"shaper-rows":"1",
														"cols":"6",
														"shaper-cols":"6",
														"shaper-class":"@Rectangular",
														"cellHeight":"139.0",
														"style-color-background":"0xFF0000",
														"style-borderStroke":"0.7",
														"border":"true",
														"style-markerStroke":"5.0",
														"cellWidth":"128.0",
														"rows":"1"
														},
														"cell":[{"atributs":
																	{"image":"bombons [320x200].jpg"}
																},
																{"atributs":
																	{"image":"IMG_8303 [320x200].JPG"}
																},
																{"atributs":
																	{"image":"tarta xoco [320x200].jpg"}
																},
																{"atributs":
																	{"image":"IMG_8385 [320x200].JPG"}
																},
																{"atributs":
																	{"image":"IMG_8360 [320x200].JPG"}
																},
																{"atributs":
																	{"image":"xocolate [320x200].jpg"}
																}]
													}]
										}
									]};