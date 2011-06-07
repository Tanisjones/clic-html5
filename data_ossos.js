var maxActivitats = 31;
var dadesActivitat = {
	    "settings": {
	        "atributsActivitat": {
	            "skin-file": "@orange.xml",
	            "organization-state": "Balears",
	            "title": "Òssos i músculs",
	            "descriptors-level": "Primària (6-12)",
	            "organization-name": "CP Gabriel Comas i Ribas",
	            "language": "català",
	            "descriptors": "aprenentatge de les ciències naturals, Aparell locomotor",
	            "organization-mail": "cpgabrielcomasiribas@educacio.caib.es",
	            "author-name": "Albert Mayans Garcia",
	            "descriptors-area": "Ciències experimentals",
	            "organization-city": "Esporles - Mallorca",
	            "organization-url": "http://www.cpgabrielcomasiribas.org/",
	            "author-mail": "establimenter@gmail.com"
	        },
	        "descripcio": ["Projecte d\u0027activitats sobre l\u0027aparell locomotor:", "\u003cul\u003e", "\u003cli\u003eConeixement i identificació d\u0027ossos: crani, columna, clavícula...", "\u003cli\u003eConeixement i identificació de Músculs: bíceps, tríceps, quàdriceps...", "\u003c/ul\u003e"],
	        "index": 5
	    },
	    "activitats": [{
	        "atributsActivitat": {
	            "settings-window-border": "false",
	            "settings-window-bgColor": "0xC0C0C0",
	            "settings-container-counters-score": "true",
	            "scramble-primary": "false",
	            "class": "@panels.Identify",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "settings-window-transparent": "true",
	            "name": "Portada",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0xF78305"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0xF78305",
	                "type": "initial"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "id": "primary",
	                "shaper-rows": "2",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "181.0",
	                "border": "false",
	                "cellWidth": "427.0",
	                "rows": "2"
	            },
	            "cell": [{
	                "atributs": {
	                    "style-color-background": "0xFFFFFF",
	                    "id": "0",
	                    "style-font-size": "48",
	                    "style-font-family": "Arial",
	                    "imgAlign": "middle,bottom",
	                    "p": "OSSOS I MÚSCULS"
	                }
	            }, {
	                "atributs": {
	                    "style-color-background": "0xFFFFFF",
	                    "id": "0",
	                    "style-font-size": "14",
	                    "image": "portada.png",
	                    "style-font-family": "Arial",
	                    "style-font-bold": "true"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0xF8F80A",
	            "settings-container-counters-score": "true",
	            "class": "@puzzles.ExchangePuzzle",
	            "settings-dragCells": "true",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "Puzzle esquelet",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0xF89507"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "initial",
	                "p": "Quina imatge pots construir?"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "final",
	                "p": "Molt bé! L\u0027esquelet!"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "finalError",
	                "p": "Segur?"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "8",
	                "image": "esqueleto_humano-resized.jpg",
	                "cols": "2",
	                "shaper-cols": "2",
	                "shaper-class": "@Rectangular",
	                "border": "true",
	                "rows": "8"
	            },
	            "cell": []
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0xFBE703",
	            "settings-container-counters-score": "true",
	            "class": "@puzzles.ExchangePuzzle",
	            "settings-dragCells": "true",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "Puzzle músculs",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0xF89507"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "initial",
	                "p": "Quina imatge pots construir?"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "final",
	                "p": "Molt bé! Els músculs!"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "finalError",
	                "p": "Segur?"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "8",
	                "image": "z604_nutricion.gif",
	                "cols": "4",
	                "shaper-cols": "4",
	                "shaper-class": "@Rectangular",
	                "border": "true",
	                "rows": "8"
	            },
	            "cell": []
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0xFDEC09",
	            "settings-container-counters-score": "true",
	            "layout-position": "AUB",
	            "scramble-primary": "true",
	            "class": "@associations.SimpleAssociation",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "Funcions",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "scramble-secondary": "true",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0xF78406"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "initial",
	                "p": "Uneix el principi de frase amb la continuació corresponent"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "final",
	                "p": "Molt bé!"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "finalError",
	                "p": "No, no..."
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "id": "primary",
	                "shaper-rows": "1",
	                "cols": "3",
	                "shaper-cols": "3",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "100.0",
	                "style-color-background": "0xFFFFFF",
	                "style-borderStroke": "0.7",
	                "border": "true",
	                "style-markerStroke": "5.0",
	                "cellWidth": "200.0",
	                "rows": "1"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "Els ossos serveixen per..."
	                }
	            }, {
	                "atributs": {
	                    "p": "Els ossos serveixen per protegir..."
	                }
	            }, {
	                "atributs": {
	                    "p": "Els músculs serveixen per..."
	                }
	            }]
	        }, {
	            "atributs": {
	                "id": "secondary",
	                "shaper-rows": "1",
	                "cols": "3",
	                "shaper-cols": "3",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "100.0",
	                "style-color-background": "0xFFFFFF",
	                "border": "true",
	                "cellWidth": "200.0",
	                "rows": "1"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "...mantenir el cos dret"
	                }
	            }, {
	                "atributs": {
	                    "p": "...els òrgans més importants, com el cervell, el cor o els pulmons"
	                }
	            }, {
	                "atributs": {
	                    "p": "...produir moviment"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-margin": "8",
	            "settings-window-bgColor": "0xFDEC09",
	            "settings-container-counters-score": "true",
	            "name": "Inici ossos",
	            "settings-container-counters-actions": "true",
	            "class": "@panels.InformationScreen",
	            "settings-report": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0xF78406"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "initial",
	                "p": "Llegeix i recorda els ossos de l\u0027esquelet"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "1",
	                "image": "101esqueleto amb noms ossos-resized.jpg",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "border": "true",
	                "rows": "1"
	            },
	            "cell": []
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0xFDEC09",
	            "settings-container-counters-score": "true",
	            "layout-position": "AUB",
	            "scramble-primary": "true",
	            "class": "@associations.SimpleAssociation",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "Preguntes ossos",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "scramble-secondary": "true",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0xF78406"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "initial",
	                "p": "Relaciona cada pregunta dels requadres de dalt amb la resposta adequada dels requadres de baix"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "final",
	                "p": "Molt bé!"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "finalError",
	                "p": "No, no..."
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "id": "primary",
	                "shaper-rows": "2",
	                "cols": "5",
	                "shaper-cols": "5",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "100.0",
	                "style-color-background": "0xFFFFFF",
	                "border": "true",
	                "cellWidth": "200.0",
	                "rows": "2"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "L\u0027os que protegeix el cervell és..."
	                }
	            }, {
	                "atributs": {
	                    "p": "Els ossos que protegeixen el cor i els pulmons són..."
	                }
	            }, {
	                "atributs": {
	                    "p": "L\u0027os més llarg de l\u0027esquelet es troba a la cuixa i és..."
	                }
	            }, {
	                "atributs": {
	                    "p": "Hi ha un conjunt d\u0027ossos anomenats vèrtebres que, un a damunt de l\u0027altre, formen..."
	                }
	            }, {
	                "atributs": {
	                    "p": "L\u0027os que tenim a les espatlles és..."
	                }
	            }, {
	                "atributs": {
	                    "p": "L\u0027os que és entre el fèmur i la tíbia i el peroné és..."
	                }
	            }, {
	                "atributs": {
	                    "p": "Dels dos ossos de la cama, el que tenim a darrere és..."
	                }
	            }, {
	                "atributs": {
	                    "p": "Quin os podem descobrir si alçam el dit gros de la mà cap amunt?"
	                }
	            }, {
	                "atributs": {
	                    "p": "Quin és l\u0027os que és a darrere el radi?"
	                }
	            }, {
	                "atributs": {
	                    "p": "Dels dos ossos que tenim a la cama, quin és el que hi ha a davant?"
	                }
	            }]
	        }, {
	            "atributs": {
	                "id": "secondary",
	                "shaper-rows": "2",
	                "cols": "5",
	                "shaper-cols": "5",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "101.0",
	                "style-color-background": "0xFFFFFF",
	                "border": "true",
	                "cellWidth": "200.0",
	                "rows": "2"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "el crani"
	                }
	            }, {
	                "atributs": {
	                    "p": "les costelles"
	                }
	            }, {
	                "atributs": {
	                    "p": "el fèmur"
	                }
	            }, {
	                "atributs": {
	                    "p": "la columna vertebral"
	                }
	            }, {
	                "atributs": {
	                    "p": "la clavícula"
	                }
	            }, {
	                "atributs": {
	                    "p": "la ròtula"
	                }
	            }, {
	                "atributs": {
	                    "p": "el peroné"
	                }
	            }, {
	                "atributs": {
	                    "p": "el radi"
	                }
	            }, {
	                "atributs": {
	                    "p": "el cúbit"
	                }
	            }, {
	                "atributs": {
	                    "p": "la tíbia"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "textGrid-border": "true",
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0xF9EE0F",
	            "settings-container-counters-score": "true",
	            "clues-clue-id": "11",
	            "class": "@textGrid.WordSearch",
	            "code": "",
	            "settings-report": "true",
	            "row": "****RADI********",
	            "textGrid-cellWidth": "28.0",
	            "textGrid-style-color-background": "0xFFFFFF",
	            "settings-margin": "8",
	            "textGrid-cellHeight": "28.0",
	            "textGrid-columns": "16",
	            "name": "sopa ossos",
	            "clue": "RÒTULA",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "textGrid-rows": "16",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0xFA9604"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "initial",
	                "p": "Troba els noms de 12 ossos. Ves amb compte amb les faltes d\u0027ortografia."
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "final",
	                "p": "Molt bé!"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "finalError",
	                "p": "No, no..."
	            }
	        }],
	        "celllist": []
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0xFDEC09",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "scramble-primary": "false",
	            "settings-skin-file": "@orange.xml",
	            "class": "@text.WrittenAnswer",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "Ossos",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0xF78406"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "initial",
	                "p": "Quin és aquest os?"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "final",
	                "p": "Molt bé!"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "finalError",
	                "p": "Estàs segur? Ves viu amb les faltes d\u0027ortografia!"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "id": "primary",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "ids": "0",
	                "image": "2crani-resized.jpg",
	                "border": "true",
	                "rows": "1"
	            },
	            "cell": []
	        }, {
	            "atributs": {
	                "id": "answers",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "50.0",
	                "style-color-background": "0xFFFFFF",
	                "border": "true",
	                "cellWidth": "200.0",
	                "rows": "1"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "crani"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0xFDEC09",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "scramble-primary": "false",
	            "settings-skin-file": "@orange.xml",
	            "class": "@text.WrittenAnswer",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "Ossos_2",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0xF78406"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "initial",
	                "p": "Quin és aquest os?"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "final",
	                "p": "Molt bé!"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "finalError",
	                "p": "Estàs segur? Ves viu amb les faltes d\u0027ortografia!"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "id": "primary",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "ids": "0",
	                "image": "3columna-resized.jpg",
	                "border": "true",
	                "rows": "1"
	            },
	            "cell": []
	        }, {
	            "atributs": {
	                "id": "answers",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "50.0",
	                "style-color-background": "0xFFFFFF",
	                "border": "true",
	                "cellWidth": "200.0",
	                "rows": "1"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "columna vertebral"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0xFDEC09",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "scramble-primary": "false",
	            "settings-skin-file": "@orange.xml",
	            "class": "@text.WrittenAnswer",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "Ossos_3",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0xF78406"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "initial",
	                "p": "Quin és aquest os?"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "final",
	                "p": "Molt bé!"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "finalError",
	                "p": "Estàs segur? Ves viu amb les faltes d\u0027ortografia!"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "id": "primary",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "ids": "0",
	                "style-color-background": "0xFFFFFF",
	                "image": "1clavícula.gif",
	                "style-borderStroke": "0.7",
	                "border": "true",
	                "style-markerStroke": "5.0",
	                "rows": "1"
	            },
	            "cell": []
	        }, {
	            "atributs": {
	                "id": "answers",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "50.0",
	                "style-color-background": "0xFFFFFF",
	                "border": "true",
	                "cellWidth": "200.0",
	                "rows": "1"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "clavícula"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0xFDEC09",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "scramble-primary": "false",
	            "settings-skin-file": "@orange.xml",
	            "class": "@text.WrittenAnswer",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "Ossos_4",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0xF78406"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "initial",
	                "p": "Quin és aquest os?"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "final",
	                "p": "Molt bé!"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "finalError",
	                "p": "Estàs segur? Ves viu amb les faltes d\u0027ortografia!"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "id": "primary",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "ids": "0",
	                "image": "4costelles-resized.jpg",
	                "border": "true",
	                "rows": "1"
	            },
	            "cell": []
	        }, {
	            "atributs": {
	                "id": "answers",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "50.0",
	                "style-color-background": "0xFFFFFF",
	                "border": "true",
	                "cellWidth": "200.0",
	                "rows": "1"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "costelles"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0xFDEC09",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "scramble-primary": "false",
	            "settings-skin-file": "@orange.xml",
	            "class": "@text.WrittenAnswer",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "Ossos_5",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0xF78406"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "initial",
	                "p": "Quin és aquest os?"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "final",
	                "p": "Molt bé!"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "finalError",
	                "p": "Estàs segur? Ves viu amb les faltes d\u0027ortografia!"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "id": "primary",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "ids": "0",
	                "image": "8húmer-resized.jpg",
	                "border": "true",
	                "rows": "1"
	            },
	            "cell": []
	        }, {
	            "atributs": {
	                "id": "answers",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "50.0",
	                "style-color-background": "0xFFFFFF",
	                "border": "true",
	                "cellWidth": "200.0",
	                "rows": "1"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "húmer"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0xFDEC09",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "scramble-primary": "false",
	            "settings-skin-file": "@orange.xml",
	            "class": "@text.WrittenAnswer",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "Ossos_6",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0xF78406"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "initial",
	                "p": "Quin és aquest os?"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "final",
	                "p": "Molt bé!"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "finalError",
	                "p": "Estàs segur? Ves viu amb les faltes d\u0027ortografia!"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "id": "primary",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "ids": "0",
	                "image": "5radi-resized.jpg",
	                "border": "true",
	                "rows": "1"
	            },
	            "cell": []
	        }, {
	            "atributs": {
	                "id": "answers",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "50.0",
	                "style-color-background": "0xFFFFFF",
	                "border": "true",
	                "cellWidth": "200.0",
	                "rows": "1"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "radi"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0xFDEC09",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "scramble-primary": "false",
	            "settings-skin-file": "@orange.xml",
	            "class": "@text.WrittenAnswer",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "Ossos_7",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0xF78406"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "initial",
	                "p": "Quin és aquest os?"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "final",
	                "p": "Molt bé!"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "finalError",
	                "p": "Estàs segur? Ves viu amb les faltes d\u0027ortografia!"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "id": "primary",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "ids": "0",
	                "image": "9pelvis-resized.jpg",
	                "border": "true",
	                "rows": "1"
	            },
	            "cell": []
	        }, {
	            "atributs": {
	                "id": "answers",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "50.0",
	                "style-color-background": "0xFFFFFF",
	                "border": "true",
	                "cellWidth": "200.0",
	                "rows": "1"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "pelvis"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0xFDEC09",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "scramble-primary": "false",
	            "settings-skin-file": "@orange.xml",
	            "class": "@text.WrittenAnswer",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "Ossos_8",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0xF78406"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "initial",
	                "p": "Quin és aquest os?"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "final",
	                "p": "Molt bé!"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "finalError",
	                "p": "Estàs segur? Ves viu amb les faltes d\u0027ortografia!"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "id": "primary",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "ids": "0",
	                "image": "10fèmur-resized.jpg",
	                "border": "true",
	                "rows": "1"
	            },
	            "cell": []
	        }, {
	            "atributs": {
	                "id": "answers",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "50.0",
	                "style-color-background": "0xFFFFFF",
	                "border": "true",
	                "cellWidth": "200.0",
	                "rows": "1"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "fèmur"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0xFDEC09",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "scramble-primary": "false",
	            "settings-skin-file": "@orange.xml",
	            "class": "@text.WrittenAnswer",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "Ossos_9",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0xF78406"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "initial",
	                "p": "Quin és aquest os?"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "final",
	                "p": "Molt bé!"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "finalError",
	                "p": "Estàs segur? Ves viu amb les faltes d\u0027ortografia!"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "id": "primary",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "ids": "0",
	                "image": "11ròtula-resized.jpg",
	                "border": "true",
	                "rows": "1"
	            },
	            "cell": []
	        }, {
	            "atributs": {
	                "id": "answers",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "50.0",
	                "style-color-background": "0xFFFFFF",
	                "border": "true",
	                "cellWidth": "200.0",
	                "rows": "1"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "ròtula"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0xFDEC09",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "scramble-primary": "false",
	            "settings-skin-file": "@orange.xml",
	            "class": "@text.WrittenAnswer",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "Ossos_10",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0xF78406"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "initial",
	                "p": "Quin és aquest os?"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "final",
	                "p": "Molt bé!"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "finalError",
	                "p": "Estàs segur? Ves viu amb les faltes d\u0027ortografia!"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "id": "primary",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "600.0",
	                "style-color-background": "0xFFFFFF",
	                "style-borderStroke": "0.7",
	                "border": "true",
	                "style-markerStroke": "5.0",
	                "cellWidth": "411.0",
	                "rows": "1"
	            },
	            "cell": [{
	                "atributs": {
	                    "id": "0",
	                    "image": "103tíbia.gif",
	                    "imgAlign": "middle,top"
	                }
	            }]
	        }, {
	            "atributs": {
	                "id": "answers",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "50.0",
	                "style-color-background": "0xFFFFFF",
	                "border": "true",
	                "cellWidth": "200.0",
	                "rows": "1"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "tíbia"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0xFDEC09",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "scramble-primary": "false",
	            "settings-skin-file": "@orange.xml",
	            "class": "@text.WrittenAnswer",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "Ossos_11",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0xF78406"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "initial",
	                "p": "Quin és aquest os?"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "final",
	                "p": "Molt bé!"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "finalError",
	                "p": "Estàs segur? Ves viu amb les faltes d\u0027ortografia!"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "id": "primary",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "ids": "0",
	                "image": "102peroné-resized.jpg",
	                "border": "true",
	                "rows": "1"
	            },
	            "cell": []
	        }, {
	            "atributs": {
	                "id": "answers",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "50.0",
	                "style-color-background": "0xFFFFFF",
	                "border": "true",
	                "cellWidth": "201.0",
	                "rows": "1"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "peroné"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-margin": "8",
	            "settings-window-bgColor": "0xFDEC09",
	            "settings-container-counters-score": "true",
	            "name": "Inici musculs",
	            "settings-container-counters-actions": "true",
	            "class": "@panels.InformationScreen",
	            "code": "",
	            "settings-report": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0xF78406"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "initial",
	                "p": "Llegeix i recorda els músculs"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "final"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "1",
	                "image": "musculs amb nom definitiu-resized.jpg",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "border": "true",
	                "rows": "1"
	            },
	            "cell": []
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0xFDEC09",
	            "settings-container-counters-score": "true",
	            "layout-position": "AUB",
	            "scramble-primary": "true",
	            "class": "@associations.SimpleAssociation",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "Preguntes músculs",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "scramble-secondary": "true",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0xF78406"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "initial",
	                "p": "Relaciona cada pregunta dels requadres de dalt amb la resposta adequada dels requadres de baix"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "final",
	                "p": "Molt bé!"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "finalError",
	                "p": "No, no..."
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "id": "primary",
	                "shaper-rows": "2",
	                "cols": "4",
	                "shaper-cols": "4",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "100.0",
	                "style-color-background": "0xFFFFFF",
	                "border": "true",
	                "cellWidth": "200.0",
	                "rows": "2"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "El múscul de davant la cuixa és..."
	                }
	            }, {
	                "atributs": {
	                    "p": "El múscul més famós de tots, que és al braç, és..."
	                }
	            }, {
	                "atributs": {
	                    "p": "A la part posterior del braç (a darrere el bíceps) tenim..."
	                }
	            }, {
	                "atributs": {
	                    "p": "Són dos músculs que van junts i són iguals, a la part de darrere de la cama. Són..."
	                }
	            }, {
	                "atributs": {
	                    "p": "Els músculs que tenim al pit són ..."
	                }
	            }, {
	                "atributs": {
	                    "p": "A la panxa tenim uns músculs que formen una quadrícula, són..."
	                }
	            }, {
	                "atributs": {
	                    "p": "El múculs que hi ha a darrere el fèmur són..."
	                }
	            }, {
	                "atributs": {
	                    "p": "Els músculs que tenim a darrere la pelvis són..."
	                }
	            }]
	        }, {
	            "atributs": {
	                "id": "secondary",
	                "shaper-rows": "2",
	                "cols": "4",
	                "shaper-cols": "4",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "101.0",
	                "style-color-background": "0xFFFFFF",
	                "border": "true",
	                "cellWidth": "200.0",
	                "rows": "2"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "el quàdriceps"
	                }
	            }, {
	                "atributs": {
	                    "p": "el bíceps"
	                }
	            }, {
	                "atributs": {
	                    "p": "el tríceps"
	                }
	            }, {
	                "atributs": {
	                    "p": "els bessons"
	                }
	            }, {
	                "atributs": {
	                    "p": "els pectorals"
	                }
	            }, {
	                "atributs": {
	                    "p": "els abdominals"
	                }
	            }, {
	                "atributs": {
	                    "p": "els isquitiobials"
	                }
	            }, {
	                "atributs": {
	                    "p": "els glutis"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "textGrid-border": "true",
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0xFBF409",
	            "settings-container-counters-score": "true",
	            "clues-clue-id": "7",
	            "class": "@textGrid.WordSearch",
	            "code": "",
	            "settings-report": "true",
	            "row": "**BÍCEPS******",
	            "textGrid-cellWidth": "32.0",
	            "textGrid-style-color-background": "0xFFFFFF",
	            "settings-margin": "8",
	            "textGrid-cellHeight": "32.0",
	            "textGrid-columns": "14",
	            "name": "Sopa Músculs",
	            "clue": "GLUTIS",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "textGrid-rows": "14",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0xFB9308"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "initial",
	                "p": "Troba el nom de 8 músculs"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "final",
	                "p": "Molt bé!"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "finalError",
	                "p": "No, no..."
	            }
	        }],
	        "celllist": []
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0xFDEC09",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "scramble-primary": "false",
	            "settings-skin-file": "@orange.xml",
	            "class": "@text.WrittenAnswer",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "Músculs_1",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0xF78406"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "initial",
	                "p": "Quin és aquest múscul?"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "final",
	                "p": "Molt bé!"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "finalError",
	                "p": "Estàs segur? Ves viu amb les faltes d\u0027ortografia!"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "id": "primary",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "ids": "0",
	                "image": "1bíceps-resized.jpg",
	                "border": "true",
	                "rows": "1"
	            },
	            "cell": []
	        }, {
	            "atributs": {
	                "id": "answers",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "50.0",
	                "style-color-background": "0xFFFFFF",
	                "border": "true",
	                "cellWidth": "300.0",
	                "rows": "1"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "bíceps"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0xFDEC09",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "scramble-primary": "false",
	            "settings-skin-file": "@orange.xml",
	            "class": "@text.WrittenAnswer",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "Músculs_2",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0xF78406"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "initial",
	                "p": "Quin és aquest múscul?"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "final",
	                "p": "Molt bé!"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "finalError",
	                "p": "Estàs segur? Ves viu amb les faltes d\u0027ortografia!"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "id": "primary",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "ids": "0",
	                "image": "2tríceps-resized.jpg",
	                "border": "true",
	                "rows": "1"
	            },
	            "cell": []
	        }, {
	            "atributs": {
	                "id": "answers",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "50.0",
	                "style-color-background": "0xFFFFFF",
	                "border": "true",
	                "cellWidth": "300.0",
	                "rows": "1"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "tríceps"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0xFDEC09",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "scramble-primary": "false",
	            "settings-skin-file": "@orange.xml",
	            "class": "@text.WrittenAnswer",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "Músculs_3",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0xF78406"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "initial",
	                "p": "Quin és aquest múscul?"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "final",
	                "p": "Molt bé!"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "finalError",
	                "p": "Estàs segur? Ves viu amb les faltes d\u0027ortografia!"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "id": "primary",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "ids": "0",
	                "style-color-background": "0xFFFFFF",
	                "image": "4pectorals-resized.jpg",
	                "border": "true",
	                "rows": "1"
	            },
	            "cell": []
	        }, {
	            "atributs": {
	                "id": "answers",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "50.0",
	                "style-color-background": "0xFFFFFF",
	                "border": "true",
	                "cellWidth": "300.0",
	                "rows": "1"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "pectorals"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0xFDEC09",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "scramble-primary": "false",
	            "settings-skin-file": "@orange.xml",
	            "class": "@text.WrittenAnswer",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "Músculs_4",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0xF78406"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "initial",
	                "p": "Quin és aquest múscul?"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "final",
	                "p": "Molt bé!"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "finalError",
	                "p": "Estàs segur? Ves viu amb les faltes d\u0027ortografia!"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "id": "primary",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "ids": "0",
	                "image": "5abdominals-resized.jpg",
	                "border": "true",
	                "rows": "1"
	            },
	            "cell": []
	        }, {
	            "atributs": {
	                "id": "answers",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "50.0",
	                "style-color-background": "0xFFFFFF",
	                "border": "true",
	                "cellWidth": "300.0",
	                "rows": "1"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "abdominals"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0xFDEC09",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "scramble-primary": "false",
	            "settings-skin-file": "@orange.xml",
	            "class": "@text.WrittenAnswer",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "Músculs_5",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0xF78406"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "initial",
	                "p": "Quin és aquest múscul?"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "final",
	                "p": "Molt bé!"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "finalError",
	                "p": "Estàs segur? Ves viu amb les faltes d\u0027ortografia!"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "id": "primary",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "ids": "0",
	                "image": "3quàdriceps-resized.jpg",
	                "border": "true",
	                "rows": "1"
	            },
	            "cell": []
	        }, {
	            "atributs": {
	                "id": "answers",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "50.0",
	                "style-color-background": "0xFFFFFF",
	                "border": "true",
	                "cellWidth": "300.0",
	                "rows": "1"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "quàdriceps"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0xFDEC09",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "scramble-primary": "false",
	            "settings-skin-file": "@orange.xml",
	            "class": "@text.WrittenAnswer",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "Músculs_6",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0xF78406"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "initial",
	                "p": "Quin és aquest múscul?"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "final",
	                "p": "Molt bé!"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "finalError",
	                "p": "Estàs segur? Ves viu amb les faltes d\u0027ortografia!"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "id": "primary",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "ids": "0",
	                "image": "7isquiotibials-resized.jpg",
	                "border": "true",
	                "rows": "1"
	            },
	            "cell": []
	        }, {
	            "atributs": {
	                "id": "answers",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "50.0",
	                "style-color-background": "0xFFFFFF",
	                "border": "true",
	                "cellWidth": "300.0",
	                "rows": "1"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "isquiotibials"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0xFDEC09",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "scramble-primary": "false",
	            "settings-skin-file": "@orange.xml",
	            "class": "@text.WrittenAnswer",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "Músculs_7",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0xF78406"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "initial",
	                "p": "Quin és aquest múscul?"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "final",
	                "p": "Molt bé!"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "finalError",
	                "p": "Estàs segur? Ves viu amb les faltes d\u0027ortografia!"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "id": "primary",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "ids": "0",
	                "image": "6bessons-resized.jpg",
	                "border": "true",
	                "rows": "1"
	            },
	            "cell": []
	        }, {
	            "atributs": {
	                "id": "answers",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "50.0",
	                "style-color-background": "0xFFFFFF",
	                "border": "true",
	                "cellWidth": "300.0",
	                "rows": "1"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "bessons"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0xFDEC09",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "scramble-primary": "false",
	            "settings-skin-file": "@orange.xml",
	            "class": "@text.WrittenAnswer",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "Músculs_8",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0xF78406"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "initial",
	                "p": "Quin és aquest múscul?"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "final",
	                "p": "Molt bé!"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "finalError",
	                "p": "Estàs segur? Ves viu amb les faltes d\u0027ortografia!"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "id": "primary",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "ids": "0",
	                "image": "8glutis-resized.jpg",
	                "border": "true",
	                "rows": "1"
	            },
	            "cell": []
	        }, {
	            "atributs": {
	                "id": "answers",
	                "shaper-rows": "1",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "50.0",
	                "style-color-background": "0xFFFFFF",
	                "border": "true",
	                "cellWidth": "300.0",
	                "rows": "1"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "glutis"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "textGrid-border": "true",
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0xFAEF0F",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "class": "@textGrid.CrossWord",
	            "code": "",
	            "settings-report": "true",
	            "row": "******************",
	            "textGrid-cellWidth": "25.0",
	            "textGrid-style-color-background": "0xFFFFFF",
	            "settings-margin": "8",
	            "textGrid-cellHeight": "25.0",
	            "textGrid-columns": "18",
	            "name": "Encreuats",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "textGrid-rows": "18",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0xF78305"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "initial"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "final"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "id": "acrossClues",
	                "shaper-rows": "1",
	                "cols": "3",
	                "shaper-cols": "3",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "60.0",
	                "border": "true",
	                "cellWidth": "200.0",
	                "rows": "1"
	            },
	            "cell": [{
	                "atributs": {
	                    "id": "17",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "16",
	                    "item": "3"
	                }
	            }, {
	                "atributs": {
	                    "id": "16",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "16",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "16",
	                    "item": "2"
	                }
	            }, {
	                "atributs": {
	                    "id": "15",
	                    "p": "os de l\u0027espatlla",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "15",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "15",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "14",
	                    "p": "os més llarg i gruixat del braç",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "14",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "14",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "14",
	                    "item": "2"
	                }
	            }, {
	                "atributs": {
	                    "id": "13",
	                    "item": "3"
	                }
	            }, {
	                "atributs": {
	                    "id": "13",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "13",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "13",
	                    "item": "2"
	                }
	            }, {
	                "atributs": {
	                    "id": "12",
	                    "item": "5"
	                }
	            }, {
	                "atributs": {
	                    "id": "12",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "12",
	                    "item": "3"
	                }
	            }, {
	                "atributs": {
	                    "id": "12",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "12",
	                    "item": "2"
	                }
	            }, {
	                "atributs": {
	                    "id": "12",
	                    "item": "4"
	                }
	            }, {
	                "atributs": {
	                    "id": "11",
	                    "p": "músculs que formen una quadrícula a la panxa",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "11",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "11",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "10",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "10",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "10",
	                    "item": "2"
	                }
	            }, {
	                "atributs": {
	                    "id": "10",
	                    "item": "2"
	                }
	            }, {
	                "atributs": {
	                    "id": "10",
	                    "p": "os, el dit gros li fa d\u0027antena",
	                    "item": "3"
	                }
	            }, {
	                "atributs": {
	                    "id": "9",
	                    "p": "músculs de les anques",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "9",
	                    "p": "ossos del cap",
	                    "item": "2"
	                }
	            }, {
	                "atributs": {
	                    "id": "9",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "9",
	                    "item": "2"
	                }
	            }, {
	                "atributs": {
	                    "id": "8",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "8",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "8",
	                    "item": "2"
	                }
	            }, {
	                "atributs": {
	                    "id": "8",
	                    "item": "2"
	                }
	            }, {
	                "atributs": {
	                    "id": "8",
	                    "item": "3"
	                }
	            }, {
	                "atributs": {
	                    "id": "7",
	                    "p": "Os de davant la cama",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "7",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "7",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "6",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "6",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "6",
	                    "item": "2"
	                }
	            }, {
	                "atributs": {
	                    "id": "6",
	                    "item": "2"
	                }
	            }, {
	                "atributs": {
	                    "id": "6",
	                    "item": "3"
	                }
	            }, {
	                "atributs": {
	                    "id": "5",
	                    "p": "Ossos que protegeixen els pulmons",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "5",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "5",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "5",
	                    "item": "2"
	                }
	            }, {
	                "atributs": {
	                    "id": "4",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "4",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "4",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "4",
	                    "item": "2"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "item": "2"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "item": "2"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "p": "múscul de davant el fèmur",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "3",
	                    "item": "2"
	                }
	            }, {
	                "atributs": {
	                    "id": "3",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "3",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "3",
	                    "item": "2"
	                }
	            }, {
	                "atributs": {
	                    "id": "2",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "2",
	                    "p": "Múscul de la part poseterior de la cama",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "2",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "2"
	                }
	            }]
	        }, {
	            "atributs": {
	                "id": "downClues",
	                "cols": "3",
	                "border": "true",
	                "cellHeight": "60.0",
	                "cellWidth": "200.0",
	                "rows": "1"
	            },
	            "cell": [{
	                "atributs": {
	                    "id": "8",
	                    "item": "4"
	                }
	            }, {
	                "atributs": {
	                    "id": "11",
	                    "item": "4"
	                }
	            }, {
	                "atributs": {
	                    "id": "4",
	                    "item": "3"
	                }
	            }, {
	                "atributs": {
	                    "id": "17",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "17",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "16",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "16",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "15",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "15",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "9",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "9",
	                    "item": "3"
	                }
	            }, {
	                "atributs": {
	                    "id": "9",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "9",
	                    "item": "5"
	                }
	            }, {
	                "atributs": {
	                    "id": "8",
	                    "p": "ossos del cap",
	                    "item": "3"
	                }
	            }, {
	                "atributs": {
	                    "id": "8",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "8",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "7",
	                    "p": "os de darrere el radi",
	                    "item": "3"
	                }
	            }, {
	                "atributs": {
	                    "id": "7",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "7",
	                    "item": "4"
	                }
	            }, {
	                "atributs": {
	                    "id": "6",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "6",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "6",
	                    "item": "4"
	                }
	            }, {
	                "atributs": {
	                    "id": "5",
	                    "item": "3"
	                }
	            }, {
	                "atributs": {
	                    "id": "5",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "5",
	                    "item": "5"
	                }
	            }, {
	                "atributs": {
	                    "id": "10",
	                    "item": "3"
	                }
	            }, {
	                "atributs": {
	                    "id": "10",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "14",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "14",
	                    "p": "Os format per 24 vèrtebres",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "13",
	                    "item": "2"
	                }
	            }, {
	                "atributs": {
	                    "id": "13",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "13",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "13",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "12",
	                    "p": "os més llarg del l\u0027esquelet",
	                    "item": "4"
	                }
	            }, {
	                "atributs": {
	                    "id": "12",
	                    "item": "3"
	                }
	            }, {
	                "atributs": {
	                    "id": "12",
	                    "item": "4"
	                }
	            }, {
	                "atributs": {
	                    "id": "12",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "12",
	                    "item": "2"
	                }
	            }, {
	                "atributs": {
	                    "id": "12",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "10",
	                    "p": "Múculs del pit",
	                    "item": "2"
	                }
	            }, {
	                "atributs": {
	                    "id": "10",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "10",
	                    "item": "2"
	                }
	            }, {
	                "atributs": {
	                    "id": "10",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "9",
	                    "item": "4"
	                }
	            }, {
	                "atributs": {
	                    "id": "9",
	                    "item": "2"
	                }
	            }, {
	                "atributs": {
	                    "id": "9",
	                    "item": "4"
	                }
	            }, {
	                "atributs": {
	                    "id": "9",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "8",
	                    "item": "3"
	                }
	            }, {
	                "atributs": {
	                    "id": "8",
	                    "item": "2"
	                }
	            }, {
	                "atributs": {
	                    "id": "8",
	                    "item": "3"
	                }
	            }, {
	                "atributs": {
	                    "id": "8",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "7",
	                    "item": "3"
	                }
	            }, {
	                "atributs": {
	                    "id": "7",
	                    "item": "2"
	                }
	            }, {
	                "atributs": {
	                    "id": "7",
	                    "item": "3"
	                }
	            }, {
	                "atributs": {
	                    "id": "7",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "6",
	                    "item": "3"
	                }
	            }, {
	                "atributs": {
	                    "id": "6",
	                    "item": "2"
	                }
	            }, {
	                "atributs": {
	                    "id": "6",
	                    "item": "3"
	                }
	            }, {
	                "atributs": {
	                    "id": "6",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "5",
	                    "item": "4"
	                }
	            }, {
	                "atributs": {
	                    "id": "5",
	                    "item": "2"
	                }
	            }, {
	                "atributs": {
	                    "id": "5",
	                    "item": "4"
	                }
	            }, {
	                "atributs": {
	                    "id": "5",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "4",
	                    "item": "5"
	                }
	            }, {
	                "atributs": {
	                    "id": "4",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "4",
	                    "item": "6"
	                }
	            }, {
	                "atributs": {
	                    "id": "4",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "4",
	                    "item": "2"
	                }
	            }, {
	                "atributs": {
	                    "id": "4",
	                    "item": "7"
	                }
	            }, {
	                "atributs": {
	                    "id": "4",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "2",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "2",
	                    "p": "os rodó del genoll",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "2",
	                    "item": "2"
	                }
	            }, {
	                "atributs": {
	                    "id": "2",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "p": "múscul a la part posterior del braç",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "item": "2"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "item": "2"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "11",
	                    "item": "3"
	                }
	            }, {
	                "atributs": {
	                    "id": "11",
	                    "item": "2"
	                }
	            }, {
	                "atributs": {
	                    "id": "11",
	                    "p": "os molt gran que es pareix al nom d\u0027un cantant de rock and roll",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "11",
	                    "item": "3"
	                }
	            }, {
	                "atributs": {
	                    "id": "11",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "11",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "3",
	                    "item": "3"
	                }
	            }, {
	                "atributs": {
	                    "id": "3",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "3",
	                    "p": "múscul més famós del braç",
	                    "item": "4"
	                }
	            }, {
	                "atributs": {
	                    "id": "3",
	                    "item": "2"
	                }
	            }, {
	                "atributs": {
	                    "id": "3",
	                    "item": "4"
	                }
	            }, {
	                "atributs": {
	                    "id": "3",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "2"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-margin": "8",
	            "settings-window-bgColor": "0xF9EE0F",
	            "settings-container-counters-score": "true",
	            "name": "Final",
	            "settings-container-counters-actions": "true",
	            "class": "@panels.InformationScreen",
	            "code": "",
	            "settings-report": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0xFA9604"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "initial",
	                "p": "Has acabat. Si t\u0027has equivocat moltes vegades, et convé repetir les activitats per aprendre-ho millor!"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFFFF",
	                "type": "final"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "1",
	                "image": "festa-.jpg",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "border": "true",
	                "rows": "1"
	            },
	            "cell": []
	        }]
	    }]
	};