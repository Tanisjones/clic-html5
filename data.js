var maxActivitats = 74;
var dadesActivitat = {
	    "settings": {
	        "atributsActivitat": {
	            "skin-file": "@blue.xml",
	            "organization-state": "Catalunya",
	            "title": "És la teva Terra, estima-la",
	            "descriptors-level": "Infantil (3-6), Primària (6-12)",
	            "organization-name": "C Escola Pia de Granollers",
	            "language": "català",
	            "organization-mail": "a8017785@centres.xtec.es",
	            "author-name": "Pau Córdoba",
	            "descriptors-area": "Ciències experimentals",
	            "organization-city": "Granollers",
	            "organization-url": "http://www.xtec.es/centres/a8017785",
	            "author-mail": "pauc@vallesnet.org"
	        },
	        "descripcio": ["Projecte d\u0027activitats sobre el reciclatge dividit en tres parts diferents:", "\u003cul\u003e", "\u003cli\u003eEducació infantil", "\u003cli\u003eCicle inicial", "\u003cli\u003eCicle mitjà", "\u003cli\u003eCicle superior", "\u003c/ul\u003e"],
	        "index": 7
	    },
	    "activitats": [{
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-margin": "8",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "false",
	            "classe": "@panels.InformationScreen",
	            "name": "portada.ass",
	            "settings-container-counters-actions": "false",
	            "settings-container-image-name": "fons.gif",
	            "settings-container-image-tiled": "true",
	            "settings-report": "false",
	            "settings-container-counters-time": "false",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "p": "Benvinguts",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "media-type": "PLAY_AUDIO",
	                "type": "initial",
	                "media-file": "aquester.wav",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "final",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "1",
	                "cols": "1",
	                "style-font-family": "Arial",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "360.0",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "border": "true",
	                "style-font-bold": "true",
	                "cellWidth": "220.0",
	                "rows": "1"
	            },
	            "cell": [{
	                "atributs": {
	                    "media-file": "menu.ass",
	                    "media-level": "1",
	                    "image": "portada.gif",
	                    "media-type": "RUN_CLIC_ACTIVITY"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-margin": "8",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "false",
	            "classe": "@panels.InformationScreen",
	            "name": "menu.ass",
	            "settings-container-counters-actions": "false",
	            "settings-container-image-name": "fons.gif",
	            "settings-container-image-tiled": "true",
	            "settings-report": "false",
	            "settings-container-counters-time": "false",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "final",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "style-shadow": "true",
	                "shaper-rows": "4",
	                "cols": "1",
	                "style-color-shadow": "0x000000",
	                "style-font-family": "Arial",
	                "shaper-cols": "1",
	                "cellHeight": "90.0",
	                "style-color-alternative": "0x000000",
	                "style-font-size": "31",
	                "style-font-bold": "true",
	                "cellWidth": "450.0",
	                "rows": "4",
	                "style-color-inactive": "0x000000",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "false"
	            },
	            "cell": [{
	                "atributs": {
	                    "media-file": "recicla1.pac",
	                    "media-level": "1",
	                    "p": "Nivell 1 - Educació Infantil",
	                    "media-type": "RUN_CLIC_PACKAGE"
	                }
	            }, {
	                "atributs": {
	                    "media-file": "recicla2.pac",
	                    "media-level": "1",
	                    "p": "Nivell 2 - Cicle Inicial",
	                    "media-type": "RUN_CLIC_PACKAGE"
	                }
	            }, {
	                "atributs": {
	                    "media-file": "recicla3.pac",
	                    "media-level": "1",
	                    "p": "Nivell 3 - Cicle Mitjà",
	                    "media-type": "RUN_CLIC_PACKAGE"
	                }
	            }, {
	                "atributs": {
	                    "media-file": "recicla4.pac",
	                    "media-level": "1",
	                    "p": "Nivell 4 - Cicle Superior",
	                    "media-type": "RUN_CLIC_PACKAGE"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-margin": "8",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "false",
	            "classe": "@panels.InformationScreen",
	            "p": "Presentació contenidor blau",
	            "name": "verd.ass",
	            "settings-container-counters-actions": "false",
	            "settings-report": "false",
	            "settings-container-counters-time": "false",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "p": "SÓC EN VERD, EL CONTENIDOR DE VIDRE!",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "media-type": "PLAY_AUDIO",
	                "type": "initial",
	                "media-file": "cverd.wav",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "final",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "1",
	                "cols": "1",
	                "style-font-family": "Arial",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "285.0",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "border": "false",
	                "style-font-bold": "true",
	                "cellWidth": "250.0",
	                "rows": "1"
	            },
	            "cell": [{
	                "atributs": {
	                    "media-file": "cverd.wav",
	                    "media-level": "1",
	                    "image": "congravd.gif",
	                    "media-type": "PLAY_AUDIO"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-margin": "8",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "false",
	            "classe": "@panels.InformationScreen",
	            "p": "Presentació contenidor blau",
	            "name": "blau.ass",
	            "settings-container-counters-actions": "false",
	            "code": "",
	            "settings-report": "false",
	            "settings-container-counters-time": "false",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "p": "SÓC EN BLAU, EL CONTENIDOR DE PAPER I CARTRÓ!",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "media-type": "PLAY_AUDIO",
	                "type": "initial",
	                "media-file": "cblau.wav",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "final",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "1",
	                "cols": "1",
	                "style-font-family": "Arial",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "275.0",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "border": "false",
	                "style-font-bold": "true",
	                "cellWidth": "240.0",
	                "rows": "1"
	            },
	            "cell": [{
	                "atributs": {
	                    "media-file": "cblau.wav",
	                    "media-level": "1",
	                    "image": "congrablau.gif",
	                    "media-type": "PLAY_AUDIO"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-margin": "8",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "false",
	            "classe": "@panels.InformationScreen",
	            "p": "Presentació contenidor marro",
	            "name": "marro.ass",
	            "settings-container-counters-actions": "false",
	            "code": "",
	            "settings-report": "false",
	            "settings-container-counters-time": "false",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "p": "HOLA, SÓC EN MARRÓ, EL CONTENIDOR DE MATÈRIA ORGÀNICA.",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "media-type": "PLAY_AUDIO",
	                "type": "initial",
	                "media-file": "cmarro.wav",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "final",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "1",
	                "cols": "1",
	                "style-font-family": "Arial",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "275.0",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "border": "false",
	                "style-font-bold": "true",
	                "cellWidth": "240.0",
	                "rows": "1"
	            },
	            "cell": [{
	                "atributs": {
	                    "media-file": "cmarro.wav",
	                    "media-level": "1",
	                    "image": "congramr.gif",
	                    "media-type": "PLAY_AUDIO"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-margin": "8",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "false",
	            "classe": "@panels.InformationScreen",
	            "p": "Presentació contenidor groc",
	            "name": "groc.ass",
	            "settings-container-counters-actions": "false",
	            "code": "",
	            "settings-report": "false",
	            "settings-container-counters-time": "false",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "p": "SÓC EN GROC, EL CONTENIDOR D\u0027ENVASOS!",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "media-type": "PLAY_AUDIO",
	                "type": "initial",
	                "media-file": "cgroc.wav",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "final",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "1",
	                "cols": "1",
	                "style-font-family": "Arial",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "276.0",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "border": "false",
	                "style-font-bold": "true",
	                "cellWidth": "240.0",
	                "rows": "1"
	            },
	            "cell": [{
	                "atributs": {
	                    "media-file": "cgroc.wav",
	                    "media-level": "1",
	                    "image": "congragroc.gif",
	                    "media-type": "PLAY_AUDIO"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-margin": "8",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "false",
	            "classe": "@panels.InformationScreen",
	            "name": "blanc.ass",
	            "settings-container-counters-actions": "false",
	            "settings-report": "false",
	            "settings-container-counters-time": "false",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "p": "SOC EN BLANC, EL CONTENDOR DE PILES",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "media-type": "PLAY_AUDIO",
	                "type": "initial",
	                "media-file": "cblanc.wav",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "final",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "3",
	                "cols": "4",
	                "style-font-family": "Arial",
	                "shaper-cols": "4",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x8000FF",
	                "style-color-foreground": "0x004080",
	                "style-font-size": "20",
	                "image": "conpiles.gif",
	                "border": "false",
	                "style-font-bold": "true",
	                "rows": "3"
	            },
	            "cell": []
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "false",
	            "classe": "@puzzles.ExchangePuzzle",
	            "settings-helpWindow-showSolution": "true",
	            "settings-dragCells": "true",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "cblau1.puz",
	            "settings-container-counters-actions": "false",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "false",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "QUI SÓC?"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "p": "SÓC EN BLAU, EL CONTENIDOR DE PAPER I CARTRÓ!",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "cblau.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "4",
	                "cols": "2",
	                "style-font-family": "Arial",
	                "shaper-cols": "2",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x8000FF",
	                "style-color-foreground": "0x004080",
	                "style-font-size": "20",
	                "image": "congrabl.gif",
	                "border": "true",
	                "style-font-bold": "true",
	                "rows": "4"
	            },
	            "cell": []
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "layout-position": "BA",
	            "classe": "@associations.SimpleAssociation",
	            "scramble-primary": "true",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "colors.ass",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "scramble-secondary": "true",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "DE QUIN COLOR SOM?"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "ovacio.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "2",
	                "cols": "2",
	                "style-font-family": "Arial",
	                "shaper-cols": "2",
	                "cellHeight": "84.0",
	                "style-color-alternative": "0xFF8040",
	                "style-font-size": "23",
	                "style-font-bold": "true",
	                "cellWidth": "133.0",
	                "rows": "2",
	                "style-color-inactive": "0xFF8040",
	                "id": "primary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "image": "cgroc.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "cverd.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "cblau.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "cmarro.gif"
	                }
	            }]
	        }, {
	            "atributs": {
	                "shaper-rows": "2",
	                "cols": "2",
	                "style-font-family": "Arial",
	                "shaper-cols": "2",
	                "cellHeight": "100.0",
	                "style-font-size": "23",
	                "style-font-bold": "true",
	                "cellWidth": "130.0",
	                "rows": "2",
	                "id": "secondary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "media-file": "groc.wav",
	                    "media-level": "1",
	                    "p": "GROC",
	                    "media-type": "PLAY_AUDIO"
	                }
	            }, {
	                "atributs": {
	                    "media-file": "verd.wav",
	                    "media-level": "1",
	                    "p": "VERD",
	                    "media-type": "PLAY_AUDIO"
	                }
	            }, {
	                "atributs": {
	                    "media-file": "blau.wav",
	                    "media-level": "1",
	                    "p": "BLAU",
	                    "media-type": "PLAY_AUDIO"
	                }
	            }, {
	                "atributs": {
	                    "media-file": "marro.wav",
	                    "media-level": "1",
	                    "p": "MARRÓ",
	                    "media-type": "PLAY_AUDIO"
	                }
	            }]
	        }, {
	            "atributs": {
	                "id": "solvedPrimary",
	                "shaper-rows": "2",
	                "cols": "2",
	                "shaper-cols": "2",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "84.0",
	                "border": "true",
	                "cellWidth": "133.0",
	                "rows": "2"
	            },
	            "cell": [{
	                "atributs": {
	                    "image": "cgroc.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "cverd.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "cblau.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "cmarro.gif"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "layout-position": "BA",
	            "classe": "@associations.ComplexAssociation",
	            "scramble-primary": "true",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "fotos1.ass",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "scramble-secondary": "true",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "QUINA IMATGE T\u0027AGRADA?"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "aquester.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "2",
	                "cols": "2",
	                "style-font-family": "Arial",
	                "shaper-cols": "2",
	                "cellHeight": "130.0",
	                "style-font-size": "23",
	                "style-font-bold": "true",
	                "cellWidth": "200.0",
	                "rows": "2",
	                "id": "primary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "id": "0",
	                    "image": "fotobosc.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "image": "fotofum.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "image": "fotopeix.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "image": "fotoriu.gif"
	                }
	            }]
	        }, {
	            "atributs": {
	                "shaper-rows": "2",
	                "cols": "1",
	                "style-font-family": "Arial",
	                "shaper-cols": "1",
	                "cellHeight": "120.0",
	                "style-font-size": "23",
	                "style-font-bold": "true",
	                "cellWidth": "120.0",
	                "rows": "2",
	                "id": "secondary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "media-file": "oh.wav",
	                    "media-level": "1",
	                    "image": "agrada.gif",
	                    "media-type": "PLAY_AUDIO"
	                }
	            }, {
	                "atributs": {
	                    "media-file": "ecs.wav",
	                    "media-level": "1",
	                    "image": "noagrada.gif",
	                    "media-type": "PLAY_AUDIO"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "classe": "@associations.ComplexAssociation",
	            "scramble-primary": "true",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "deixcon2.ass",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "scramble-secondary": "true",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "ON HAS DE LLENÇAR-ME?"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "ovacio.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "2",
	                "cols": "2",
	                "style-font-family": "Arial",
	                "shaper-cols": "2",
	                "cellHeight": "80.0",
	                "style-font-size": "23",
	                "style-font-bold": "true",
	                "cellWidth": "135.0",
	                "rows": "2",
	                "id": "primary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "id": "3",
	                    "image": "pellplat.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "image": "brik.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "2",
	                    "image": "paper.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "image": "potvidre.gif"
	                }
	            }]
	        }, {
	            "atributs": {
	                "shaper-rows": "2",
	                "cols": "2",
	                "style-font-family": "Arial",
	                "shaper-cols": "2",
	                "cellHeight": "82.0",
	                "style-font-size": "23",
	                "style-font-bold": "true",
	                "cellWidth": "136.0",
	                "rows": "2",
	                "id": "secondary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "image": "cgroc.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "cverd.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "cblau.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "cmarro.gif"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "classe": "@puzzles.DoublePuzzle",
	            "settings-helpWindow-showSolution": "true",
	            "settings-dragCells": "true",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "cgroc1.puz",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "QUI SÓC?"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "p": "SÓC EN GROC, EL CONTENIDOR D\u0027ENVASOS!",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "cgroc.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "3",
	                "cols": "2",
	                "style-font-family": "Arial",
	                "shaper-cols": "2",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x8000FF",
	                "style-color-foreground": "0x004080",
	                "style-font-size": "20",
	                "image": "congragr.gif",
	                "border": "true",
	                "style-font-bold": "true",
	                "rows": "3"
	            },
	            "cell": []
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "classe": "@associations.ComplexAssociation",
	            "scramble-primary": "true",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "deixcon1.ass",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "scramble-secondary": "true",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "ON HAS DE LLENÇAR-ME?"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "palmes.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "4",
	                "cols": "2",
	                "style-font-family": "Arial",
	                "shaper-cols": "2",
	                "cellHeight": "80.0",
	                "style-font-size": "23",
	                "style-font-bold": "true",
	                "cellWidth": "133.0",
	                "rows": "4",
	                "id": "primary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "id": "0",
	                    "image": "p_plast1.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "3",
	                    "image": "sardina.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "3",
	                    "image": "corpoma.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "image": "llauna2.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "2",
	                    "image": "cartro.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "2",
	                    "image": "diaris.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "image": "potvidre.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "image": "ampolla.gif"
	                }
	            }]
	        }, {
	            "atributs": {
	                "shaper-rows": "4",
	                "cols": "1",
	                "style-font-family": "Arial",
	                "shaper-cols": "1",
	                "cellHeight": "81.0",
	                "style-font-size": "23",
	                "style-font-bold": "true",
	                "cellWidth": "135.0",
	                "rows": "4",
	                "id": "secondary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "image": "cgroc.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "cverd.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "cblau.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "cmarro.gif"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "layout-position": "BA",
	            "classe": "@associations.ComplexAssociation",
	            "scramble-primary": "true",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "fotos2.ass",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "scramble-secondary": "true",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "QUINA IMATGE T\u0027AGRADA?"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "palmes.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "2",
	                "cols": "2",
	                "style-font-family": "Arial",
	                "shaper-cols": "2",
	                "cellHeight": "130.0",
	                "style-font-size": "23",
	                "style-font-bold": "true",
	                "cellWidth": "200.0",
	                "rows": "2",
	                "id": "primary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "id": "1",
	                    "image": "fotofoc.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "image": "fotoriu2.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "image": "fotovert.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "image": "fotomont.gif"
	                }
	            }]
	        }, {
	            "atributs": {
	                "shaper-rows": "2",
	                "cols": "1",
	                "style-font-family": "Arial",
	                "shaper-cols": "1",
	                "cellHeight": "120.0",
	                "style-font-size": "23",
	                "style-font-bold": "true",
	                "cellWidth": "118.0",
	                "rows": "2",
	                "id": "secondary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "media-file": "oh.wav",
	                    "media-level": "1",
	                    "image": "agrada.gif",
	                    "media-type": "PLAY_AUDIO"
	                }
	            }, {
	                "atributs": {
	                    "media-file": "ecs.wav",
	                    "media-level": "1",
	                    "image": "noagrada.gif",
	                    "media-type": "PLAY_AUDIO"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "classe": "@puzzles.DoublePuzzle",
	            "settings-helpWindow-showSolution": "true",
	            "settings-dragCells": "true",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "cmarro1.puz",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "QUI SÓC?"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "p": "HOLA, SÓC EN MARRÓ, EL CONTENIDOR DE MATÈRIA ORGÀNICA.",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "cmarro.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "2",
	                "cols": "3",
	                "style-font-family": "Arial",
	                "shaper-cols": "3",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x8000FF",
	                "style-color-foreground": "0x004080",
	                "style-font-size": "20",
	                "image": "congramr.gif",
	                "border": "true",
	                "style-font-bold": "true",
	                "rows": "2"
	            },
	            "cell": []
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "classe": "@memory.MemoryGame",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "memor1.puz",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "BUSCA LA PARELLA!"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "ovacio.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "2",
	                "cols": "2",
	                "style-font-family": "Arial",
	                "shaper-cols": "2",
	                "cellHeight": "109.0",
	                "style-font-size": "23",
	                "style-font-bold": "true",
	                "cellWidth": "136.0",
	                "rows": "2",
	                "id": "primary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0xFFFFFF",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "image": "cgroc.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "cverd.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "cblau.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "cmarro.gif"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "classe": "@puzzles.ExchangePuzzle",
	            "settings-helpWindow-showSolution": "true",
	            "settings-dragCells": "true",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "cverd1.puz",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "QUI SÓC?"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "p": "SÓC EN VERD, EL CONTENIDOR DE VIDRE!",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "cverd.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "2",
	                "cols": "5",
	                "style-font-family": "Arial",
	                "shaper-cols": "5",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x8000FF",
	                "style-color-foreground": "0x004080",
	                "style-font-size": "20",
	                "image": "congravd.gif",
	                "border": "true",
	                "style-font-bold": "true",
	                "rows": "2"
	            },
	            "cell": []
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "classe": "@puzzles.ExchangePuzzle",
	            "settings-helpWindow-showSolution": "true",
	            "settings-dragCells": "true",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "cblanc.puz",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "QUI SÓC?"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "p": "SÓC EN BLANC, EL CONTENIDOR DE PILES!",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "cblanc.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "3",
	                "cols": "3",
	                "style-font-family": "Arial",
	                "shaper-cols": "3",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x8000FF",
	                "style-color-foreground": "0x004080",
	                "style-font-size": "20",
	                "image": "conpiles.gif",
	                "border": "true",
	                "style-font-bold": "true",
	                "rows": "3"
	            },
	            "cell": []
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "layout-position": "AUB",
	            "classe": "@associations.SimpleAssociation",
	            "scramble-primary": "true",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "totspeti.ass",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "scramble-secondary": "true",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Per a què serveix cada contenidor?"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "palmes.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "1",
	                "cols": "5",
	                "style-font-family": "Arial",
	                "shaper-cols": "5",
	                "cellHeight": "100.0",
	                "style-color-alternative": "0xFF8040",
	                "style-font-size": "23",
	                "style-font-bold": "true",
	                "cellWidth": "110.0",
	                "rows": "1",
	                "style-color-inactive": "0xFF8040",
	                "id": "primary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "Contenidor d\u0027envasos"
	                }
	            }, {
	                "atributs": {
	                    "p": "Contenidor de paper i cartró"
	                }
	            }, {
	                "atributs": {
	                    "p": "Contenidor de vidre"
	                }
	            }, {
	                "atributs": {
	                    "p": "Contenidor de matèria orgànica"
	                }
	            }, {
	                "atributs": {
	                    "p": "Contenidor de piles"
	                }
	            }]
	        }, {
	            "atributs": {
	                "shaper-rows": "1",
	                "cols": "5",
	                "style-font-family": "Arial",
	                "shaper-cols": "5",
	                "cellHeight": "114.0",
	                "style-font-size": "23",
	                "style-font-bold": "true",
	                "cellWidth": "100.0",
	                "rows": "1",
	                "id": "secondary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "image": "conpetgr.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "conpetbl.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "conpetvd.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "conpetmr.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "conpetbc.gif"
	                }
	            }]
	        }, {
	            "atributs": {
	                "id": "solvedPrimary",
	                "shaper-rows": "1",
	                "cols": "5",
	                "shaper-cols": "5",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "100.0",
	                "border": "true",
	                "cellWidth": "110.0",
	                "rows": "1"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "Contenidor d\u0027envasos"
	                }
	            }, {
	                "atributs": {
	                    "p": "Contenidor de paper i cartró"
	                }
	            }, {
	                "atributs": {
	                    "p": "Contenidor de vidre"
	                }
	            }, {
	                "atributs": {
	                    "p": "Contenidor de matèria orgànica"
	                }
	            }, {
	                "atributs": {
	                    "p": "Contenidor de piles"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "layout-position": "AUB",
	            "classe": "@associations.ComplexAssociation",
	            "scramble-primary": "true",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "deixcon3.ass",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "scramble-secondary": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "On has de llençar-me?"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "palmes.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "3",
	                "cols": "4",
	                "style-font-family": "Arial",
	                "shaper-cols": "4",
	                "cellHeight": "81.0",
	                "style-font-size": "23",
	                "style-font-bold": "true",
	                "cellWidth": "133.0",
	                "rows": "3",
	                "id": "primary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "id": "1",
	                    "image": "p_plast1.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "4",
	                    "image": "sardina.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "4",
	                    "image": "corpoma.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "image": "llauna2.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "6",
	                    "image": "cartro.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "6",
	                    "image": "diaris.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "7",
	                    "image": "potvidre.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "7",
	                    "image": "ampolla.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "4",
	                    "image": "pellplat.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "image": "brik.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "5",
	                    "image": "pilaboto.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "image": "llauna1.gif"
	                }
	            }]
	        }, {
	            "atributs": {
	                "shaper-rows": "2",
	                "cols": "4",
	                "style-font-family": "Arial",
	                "shaper-cols": "4",
	                "cellHeight": "51.0",
	                "style-font-size": "23",
	                "style-font-bold": "true",
	                "cellWidth": "50.0",
	                "rows": "2",
	                "id": "secondary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "false"
	            },
	            "cell": [{
	                "atributs": {
	                    "image": "totpeca1.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "totpeca3.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "totpeca5.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "totpeca7.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "totpeca2.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "totpeca4.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "totpeca6.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "totpeca8.gif"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "document-section-p-background": "0x004080",
	            "settings-container-counters-score": "true",
	            "settings-window-size-height": "330",
	            "document-style-tabWidth": "4",
	            "document-section-p-text-background": "0x004080",
	            "document-style-bold": "true",
	            "document-style-background": "0xFF0000",
	            "document-style-target": "true",
	            "document-section-p-text-foreground": "0xFFFF00",
	            "document-style-foreground": "0xFFFFFF",
	            "document-section-p-text-italic": "false",
	            "checkButton": "OK?",
	            "document-style-base": "target",
	            "document-section-p-text-bold": "true",
	            "document-section-p-foreground": "0xFFFF00",
	            "document-section-p-text-family": "Arial",
	            "document-section-p-size": "15",
	            "name": "colors0.txa",
	            "settings-container-counters-actions": "true",
	            "evaluator-class": "@ComplexEvaluator",
	            "evaluator-detail": "false",
	            "settings-reportActions": "false",
	            "document-section-p-family": "Arial",
	            "option": "verd i blau",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF",
	            "forceOkToAdvance": "true",
	            "document-style-size": "15",
	            "text": ".",
	            "document-style-italic": "false",
	            "classe": "@text.FillInBlanks",
	            "answer": "blanc i verd",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "settings-window-size-width": "540",
	            "document-section-p-bold": "true",
	            "document-section-p-text-size": "15",
	            "document-style-family": "Arial",
	            "document-style-name": "targetError",
	            "document-section-p-italic": "false"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Marca el color correcte de la llista."
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "palmes.wav",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "style-font-family": "Arial",
	                "height": "80",
	                "p": "De quin color és cada contenidor",
	                "width": "500",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "style-color-foreground": "0x80FF00",
	                "style-font-size": "20",
	                "border": "false",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": []
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "classe": "@associations.ComplexAssociation",
	            "scramble-primary": "true",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "sinobl2.ass",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "scramble-secondary": "true",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Què podem llençar al contenidor blau?"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "palmes.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "3",
	                "cols": "2",
	                "style-font-family": "Arial",
	                "shaper-cols": "2",
	                "cellHeight": "90.0",
	                "style-color-alternative": "0xFF8040",
	                "style-font-size": "18",
	                "style-font-bold": "true",
	                "cellWidth": "160.0",
	                "rows": "3",
	                "style-color-inactive": "0xFF8040",
	                "id": "primary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "id": "0",
	                    "p": "Paper de diari"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "p": "Paper d\u0027alumini"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "p": "Tovallons de paper bruts"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "p": "Capses de cartró"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "p": "Cartolines"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "p": "Paper plastificat"
	                }
	            }]
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "shaper-rows": "2",
	                "cols": "1",
	                "style-font-family": "Arial",
	                "shaper-cols": "1",
	                "cellHeight": "114.0",
	                "style-font-size": "20",
	                "style-font-bold": "true",
	                "cellWidth": "100.0",
	                "rows": "2",
	                "id": "secondary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "style-color-foreground": "0x80FF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "image": "siconbl.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "noconbl.gif"
	                }
	            }]
	        }, {
	            "atributs": {
	                "id": "solvedPrimary",
	                "shaper-rows": "3",
	                "cols": "2",
	                "shaper-cols": "2",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "90.0",
	                "border": "true",
	                "cellWidth": "160.0",
	                "rows": "3"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "Paper de diari"
	                }
	            }, {
	                "atributs": {
	                    "p": "Paper d\u0027alumini"
	                }
	            }, {
	                "atributs": {
	                    "p": "Tovallons de paper bruts"
	                }
	            }, {
	                "atributs": {
	                    "p": "Capses de cartró"
	                }
	            }, {
	                "atributs": {
	                    "p": "Cartolines"
	                }
	            }, {
	                "atributs": {
	                    "p": "Paper plastificat"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "classe": "@puzzles.DoublePuzzle",
	            "settings-helpWindow-showSolution": "true",
	            "settings-dragCells": "true",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "cblau2.puz",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Qui sóc?"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "p": "Sóc en Blau, el contenidor de paper i cartró!",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "cblau.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "4",
	                "cols": "3",
	                "style-font-family": "Arial",
	                "shaper-cols": "3",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x8000FF",
	                "style-color-foreground": "0x004080",
	                "style-font-size": "20",
	                "image": "congrabl.gif",
	                "border": "true",
	                "style-font-bold": "true",
	                "rows": "4"
	            },
	            "cell": []
	        }]
	    }, {
	        "atributsActivitat": {
	            "textGrid-style-font-size": "23",
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "clues-clue-id": "4",
	            "textGrid-style-color-foreground": "0xFFFF00",
	            "textGrid-cellHeight": "30.0",
	            "name": "colors.sop",
	            "textGrid-style-font-family": "Arial",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "textGrid-rows": "10",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF",
	            "textGrid-border": "true",
	            "layout-position": "AB",
	            "classe": "@textGrid.WordSearch",
	            "code": "",
	            "settings-report": "true",
	            "textGrid-style-font-bold": "true",
	            "row": "***O***D**",
	            "textGrid-cellWidth": "30.0",
	            "textGrid-style-color-background": "0x004080",
	            "settings-margin": "8",
	            "textGrid-columns": "5",
	            "clue": "VERD"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Busca els colors dels diferents contenidors."
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "ovacio.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "id": "secondary",
	                "shaper-rows": "1",
	                "cols": "5",
	                "style-font-family": "Arial",
	                "shaper-cols": "5",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "image": "totscon2.gif",
	                "border": "false",
	                "style-font-bold": "true",
	                "rows": "1"
	            },
	            "cell": []
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "classe": "@memory.MemoryGame",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "memor2.puz",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Busca la parella!"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "palmes.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "4",
	                "cols": "2",
	                "style-font-family": "Arial",
	                "shaper-cols": "2",
	                "cellHeight": "105.0",
	                "style-font-size": "23",
	                "style-font-bold": "true",
	                "cellWidth": "149.0",
	                "rows": "4",
	                "id": "primary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0xFFFFFF",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "image": "p_plast1.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "sardina.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "corpoma.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "llauna2.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "cartro.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "diaris.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "potvidre.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "pilanorm.gif"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "classe": "@associations.ComplexAssociation",
	            "scramble-primary": "true",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "sinogr2.ass",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "scramble-secondary": "true",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Què podem llençar al contenidor groc?"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "palmes.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "4",
	                "cols": "2",
	                "style-font-family": "Arial",
	                "shaper-cols": "2",
	                "cellHeight": "70.0",
	                "style-color-alternative": "0xFF8040",
	                "style-font-size": "18",
	                "style-font-bold": "true",
	                "cellWidth": "190.0",
	                "rows": "4",
	                "style-color-inactive": "0xFF8040",
	                "id": "primary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "id": "0",
	                    "p": "Envasos de detergents"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "p": "Envasos de productes tòxics"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "p": "Safates de porexpan"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "p": "Llaunes de refresc"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "p": "Envasos metàlics"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "p": "Esprais"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "p": "Brics de sucs"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "p": "Bosses de plàstic"
	                }
	            }]
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "shaper-rows": "2",
	                "cols": "1",
	                "style-font-family": "Arial",
	                "shaper-cols": "1",
	                "cellHeight": "114.0",
	                "style-font-size": "20",
	                "style-font-bold": "true",
	                "cellWidth": "100.0",
	                "rows": "2",
	                "id": "secondary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "style-color-foreground": "0x80FF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "image": "sicongr.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "nocongr.gif"
	                }
	            }]
	        }, {
	            "atributs": {
	                "id": "solvedPrimary",
	                "shaper-rows": "4",
	                "cols": "2",
	                "shaper-cols": "2",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "70.0",
	                "border": "true",
	                "cellWidth": "190.0",
	                "rows": "4"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "Envasos de detergents"
	                }
	            }, {
	                "atributs": {
	                    "p": "Envasos de productes tòxics"
	                }
	            }, {
	                "atributs": {
	                    "p": "Safates de porexpan"
	                }
	            }, {
	                "atributs": {
	                    "p": "Llaunes de refresc"
	                }
	            }, {
	                "atributs": {
	                    "p": "Envassos metàlics"
	                }
	            }, {
	                "atributs": {
	                    "p": "Esprais"
	                }
	            }, {
	                "atributs": {
	                    "p": "Brics de sucs"
	                }
	            }, {
	                "atributs": {
	                    "p": "Bosses de plàstic"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "classe": "@associations.ComplexAssociation",
	            "scramble-primary": "true",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "deixcon4.ass",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "scramble-secondary": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "On has de llençar-me?"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "palmes.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "3",
	                "cols": "3",
	                "style-font-family": "Arial",
	                "shaper-cols": "3",
	                "cellHeight": "98.0",
	                "style-font-size": "23",
	                "style-font-bold": "true",
	                "cellWidth": "128.0",
	                "rows": "3",
	                "id": "primary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0xFFFFFF",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "id": "4",
	                    "image": "ossos.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "6",
	                    "image": "revista.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "7",
	                    "image": "ampolla.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "5",
	                    "image": "pilanorm.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "5",
	                    "image": "pilaboto.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "image": "p_plast2.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "6",
	                    "image": "bosapape.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "7",
	                    "image": "potvidre.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "image": "iogurt.gif"
	                }
	            }]
	        }, {
	            "atributs": {
	                "shaper-rows": "2",
	                "cols": "4",
	                "style-font-family": "Arial",
	                "shaper-cols": "4",
	                "cellHeight": "51.0",
	                "style-font-size": "23",
	                "style-font-bold": "true",
	                "cellWidth": "50.0",
	                "rows": "2",
	                "id": "secondary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "false"
	            },
	            "cell": [{
	                "atributs": {
	                    "image": "totpeca1.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "totpeca3.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "totpeca5.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "totpeca7.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "totpeca2.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "totpeca4.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "totpeca6.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "totpeca8.gif"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "layout-position": "AUB",
	            "classe": "@puzzles.DoublePuzzle",
	            "settings-dragCells": "true",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "music1.puz",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Ordena els fragments d\u0027aquesta cançó."
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "aquester.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "1",
	                "cols": "4",
	                "style-font-family": "Arial",
	                "shaper-cols": "4",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "70.0",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "border": "true",
	                "style-font-bold": "true",
	                "cellWidth": "100.0",
	                "rows": "1"
	            },
	            "cell": [{
	                "atributs": {
	                    "media-file": "aquester.wav",
	                    "media-level": "1",
	                    "media-to": "3340",
	                    "media-type": "PLAY_AUDIO"
	                }
	            }, {
	                "atributs": {
	                    "media-level": "1",
	                    "media-from": "3341",
	                    "media-type": "PLAY_AUDIO",
	                    "media-file": "aquester.wav",
	                    "media-to": "7050"
	                }
	            }, {
	                "atributs": {
	                    "media-level": "1",
	                    "media-from": "7051",
	                    "media-type": "PLAY_AUDIO",
	                    "media-file": "aquester.wav",
	                    "media-to": "10935"
	                }
	            }, {
	                "atributs": {
	                    "media-file": "aquester.wav",
	                    "media-level": "1",
	                    "media-from": "10936",
	                    "media-type": "PLAY_AUDIO"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "classe": "@puzzles.ExchangePuzzle",
	            "settings-helpWindow-showSolution": "true",
	            "settings-dragCells": "true",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "cgroc2.puz",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Qui sóc?"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "p": "Sóc en Groc, el contenidor d\u0027envasos!",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "cgroc.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "3",
	                "cols": "4",
	                "style-font-family": "Arial",
	                "shaper-cols": "4",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x8000FF",
	                "style-color-foreground": "0x004080",
	                "style-font-size": "20",
	                "image": "congragr.gif",
	                "border": "true",
	                "style-font-bold": "true",
	                "rows": "3"
	            },
	            "cell": []
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "classe": "@associations.ComplexAssociation",
	            "scramble-primary": "true",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "sinomar2.ass",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "scramble-secondary": "true",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Què podem llençar al contenidor marró?"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "palmes.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "3",
	                "cols": "2",
	                "style-font-family": "Arial",
	                "shaper-cols": "2",
	                "cellHeight": "90.0",
	                "style-color-alternative": "0xFF8040",
	                "style-font-size": "18",
	                "style-font-bold": "true",
	                "cellWidth": "160.0",
	                "rows": "3",
	                "style-color-inactive": "0xFF8040",
	                "id": "primary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "id": "1",
	                    "p": "Bolquers"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "p": "Menjar caducat"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "p": "Bosses d\u0027infusions"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "p": "Paper de cuina brut"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "p": "Tovallons bruts"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "p": "Restes del café"
	                }
	            }]
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "shaper-rows": "2",
	                "cols": "1",
	                "style-font-family": "Arial",
	                "shaper-cols": "1",
	                "cellHeight": "114.0",
	                "style-font-size": "20",
	                "style-font-bold": "true",
	                "cellWidth": "100.0",
	                "rows": "2",
	                "id": "secondary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "style-color-foreground": "0x80FF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "image": "siconmr.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "noconmr.gif"
	                }
	            }]
	        }, {
	            "atributs": {
	                "id": "solvedPrimary",
	                "shaper-rows": "3",
	                "cols": "2",
	                "shaper-cols": "2",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "90.0",
	                "border": "true",
	                "cellWidth": "160.0",
	                "rows": "3"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "Bolquers"
	                }
	            }, {
	                "atributs": {
	                    "p": "Menjar caducat"
	                }
	            }, {
	                "atributs": {
	                    "p": "Bosses d\u0027infusions"
	                }
	            }, {
	                "atributs": {
	                    "p": "Paper de cuina brut"
	                }
	            }, {
	                "atributs": {
	                    "p": "Tovallons bruts"
	                }
	            }, {
	                "atributs": {
	                    "p": "Marró del café"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "document-section-p-background": "0x004080",
	            "settings-container-counters-score": "true",
	            "settings-window-size-height": "337",
	            "document-style-tabWidth": "4",
	            "evaluator-checkPunctuation": "false",
	            "document-section-p-target-response-length": "12",
	            "document-section-p-text-background": "0x004080",
	            "document-style-bold": "true",
	            "document-style-background": "0xFF0000",
	            "document-style-target": "true",
	            "document-section-p-text-foreground": "0xFFFF00",
	            "document-style-foreground": "0xFFFFFF",
	            "document-section-p-text-italic": "false",
	            "checkButton": "Ok?",
	            "document-style-base": "target",
	            "document-section-p-text-bold": "true",
	            "document-section-p-foreground": "0xFFFF00",
	            "document-section-p-text-family": "Arial",
	            "document-section-p-size": "16",
	            "evaluator-checkAccents": "false",
	            "name": "colors.txa",
	            "document-section-p-target-response-maxLength": "12",
	            "settings-container-counters-actions": "true",
	            "evaluator-class": "@ComplexEvaluator",
	            "settings-reportActions": "false",
	            "document-section-p-family": "Arial",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF",
	            "document-style-size": "16",
	            "text": ".",
	            "document-style-italic": "false",
	            "evaluator-checkDoubleSpaces": "true",
	            "classe": "@text.FillInBlanks",
	            "answer": "verd i blanc",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "settings-window-size-width": "540",
	            "document-section-p-bold": "true",
	            "document-section-p-target-response-fill": "_",
	            "document-section-p-text-size": "16",
	            "document-style-family": "Arial",
	            "document-style-name": "targetError",
	            "document-section-p-italic": "false"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Escriu la resposta correcta i prem el botó \"Ok?\"."
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "palmes.wav",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "style-font-family": "Arial",
	                "height": "80",
	                "p": "De quin color és cada contenidor",
	                "width": "500",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "style-color-foreground": "0x80FF00",
	                "style-font-size": "20",
	                "border": "false",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": []
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "classe": "@puzzles.HolePuzzle",
	            "settings-helpWindow-showSolution": "true",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "cblanc2.puz",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Qui sóc?"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "p": "Sóc en Blanc, el contenidor de piles!",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "cblanc.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "3",
	                "cols": "3",
	                "style-font-family": "Arial",
	                "shaper-cols": "3",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x8000FF",
	                "style-color-foreground": "0x004080",
	                "style-font-size": "20",
	                "image": "conpiles.gif",
	                "border": "true",
	                "style-font-bold": "true",
	                "rows": "3"
	            },
	            "cell": []
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "classe": "@associations.ComplexAssociation",
	            "scramble-primary": "true",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "accions.ass",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "scramble-secondary": "true",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Quines accions són bones per a la Terra?"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "aquester.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "3",
	                "cols": "2",
	                "style-font-family": "Arial",
	                "shaper-cols": "2",
	                "cellHeight": "122.0",
	                "style-font-size": "23",
	                "style-font-bold": "true",
	                "cellWidth": "156.0",
	                "rows": "3",
	                "id": "primary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0xFFFFFF",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "id": "0",
	                    "image": "replanta.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "image": "recullir.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "image": "reciclar.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "image": "tirarpap.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "image": "recicla1.gif"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "image": "bany.gif"
	                }
	            }]
	        }, {
	            "atributs": {
	                "shaper-rows": "2",
	                "cols": "1",
	                "style-font-family": "Arial",
	                "shaper-cols": "1",
	                "cellHeight": "140.0",
	                "style-font-size": "23",
	                "style-font-bold": "true",
	                "cellWidth": "190.0",
	                "rows": "2",
	                "id": "secondary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "image": "terrabe.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "terramal.gif"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "classe": "@associations.ComplexAssociation",
	            "scramble-primary": "true",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "sinovd2.ass",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "scramble-secondary": "true",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Què podem llençar al contenidor verd?"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "palmes.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "3",
	                "cols": "2",
	                "style-font-family": "Arial",
	                "shaper-cols": "2",
	                "cellHeight": "90.0",
	                "style-color-alternative": "0xFF8040",
	                "style-font-size": "18",
	                "style-font-bold": "true",
	                "cellWidth": "160.0",
	                "rows": "3",
	                "style-color-inactive": "0xFF8040",
	                "id": "primary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "id": "1",
	                    "p": "Miralls"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "p": "Fluorescents"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "p": "Ceràmica"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "p": "Gots trencats"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "p": "Pots buits de mermelada"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "p": "Vidres trencats"
	                }
	            }]
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "shaper-rows": "2",
	                "cols": "1",
	                "style-font-family": "Arial",
	                "shaper-cols": "1",
	                "cellHeight": "114.0",
	                "style-font-size": "20",
	                "style-font-bold": "true",
	                "cellWidth": "100.0",
	                "rows": "2",
	                "id": "secondary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "style-color-foreground": "0x80FF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "image": "siconvd.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "noconvd.gif"
	                }
	            }]
	        }, {
	            "atributs": {
	                "id": "solvedPrimary",
	                "shaper-rows": "3",
	                "cols": "2",
	                "shaper-cols": "2",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "90.0",
	                "border": "true",
	                "cellWidth": "160.0",
	                "rows": "3"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "Miralls"
	                }
	            }, {
	                "atributs": {
	                    "p": "Fluorescents"
	                }
	            }, {
	                "atributs": {
	                    "p": "Ceràmica"
	                }
	            }, {
	                "atributs": {
	                    "p": "Gots trencats"
	                }
	            }, {
	                "atributs": {
	                    "p": "Pots buits de mermelada"
	                }
	            }, {
	                "atributs": {
	                    "p": "Vidres trencats"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0xFFFFFF",
	            "settings-container-counters-score": "true",
	            "classe": "@puzzles.ExchangePuzzle",
	            "settings-dragCells": "true",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "settings-window-transparent": "true",
	            "name": "partit.puz",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Ordena la partitura"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "aquester.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "4",
	                "cols": "1",
	                "style-font-family": "Arial",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "70.0",
	                "style-color-background": "0xFFFFFF",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "border": "true",
	                "style-font-bold": "true",
	                "cellWidth": "357.0",
	                "rows": "4"
	            },
	            "cell": [{
	                "atributs": {
	                    "media-level": "1",
	                    "image": "partitu1.gif",
	                    "media-from": "1",
	                    "media-type": "PLAY_AUDIO",
	                    "media-file": "aquester.wav",
	                    "media-to": "3340"
	                }
	            }, {
	                "atributs": {
	                    "media-level": "1",
	                    "image": "partitu2.gif",
	                    "media-from": "3341",
	                    "media-type": "PLAY_AUDIO",
	                    "media-file": "aquester.wav",
	                    "media-to": "7050"
	                }
	            }, {
	                "atributs": {
	                    "media-level": "1",
	                    "image": "partitu3.gif",
	                    "media-from": "7051",
	                    "media-type": "PLAY_AUDIO",
	                    "media-file": "aquester.wav",
	                    "media-to": "10935"
	                }
	            }, {
	                "atributs": {
	                    "media-level": "1",
	                    "image": "partitu4.gif",
	                    "media-from": "10936",
	                    "media-type": "PLAY_AUDIO",
	                    "media-file": "aquester.wav"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "classe": "@puzzles.ExchangePuzzle",
	            "settings-helpWindow-showSolution": "true",
	            "settings-dragCells": "true",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "tvaterr.puz",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Resol el puzzle"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "ovacio.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "4",
	                "cols": "4",
	                "style-font-family": "Arial",
	                "shaper-cols": "4",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "15",
	                "image": "totscont.gif",
	                "border": "true",
	                "style-font-bold": "true",
	                "rows": "4"
	            },
	            "cell": []
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "layout-position": "BA",
	            "classe": "@associations.ComplexAssociation",
	            "scramble-primary": "true",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "sinoblau.ass",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "scramble-secondary": "true",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Com hem de fer servir el contenidor blau?"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "ovacio.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "6",
	                "cols": "1",
	                "style-font-family": "Arial",
	                "shaper-cols": "1",
	                "cellHeight": "50.0",
	                "style-color-alternative": "0xFF8040",
	                "style-font-size": "16",
	                "style-font-bold": "true",
	                "cellWidth": "400.0",
	                "rows": "6",
	                "style-color-inactive": "0xFF8040",
	                "id": "primary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "id": "0",
	                    "p": "Plegar bé el cartró abans de llençar-lo"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "p": "Llençar papers bruts (tovallons,mocadors...)"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "p": "Vigilar que no hi vagin grapes ni clips"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "p": "Llençar paper d\u0027alumni"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "p": "Rebregar o estripar els papers"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "p": "Avisar l\u0027Ajuntament quan estigui ple"
	                }
	            }]
	        }, {
	            "atributs": {
	                "shaper-rows": "2",
	                "cols": "1",
	                "style-font-family": "Arial",
	                "shaper-cols": "1",
	                "cellHeight": "114.0",
	                "style-font-size": "23",
	                "style-font-bold": "true",
	                "cellWidth": "100.0",
	                "rows": "2",
	                "id": "secondary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "image": "siconbl.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "noconbl.gif"
	                }
	            }]
	        }, {
	            "atributs": {
	                "id": "solvedPrimary",
	                "shaper-rows": "6",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "50.0",
	                "border": "true",
	                "cellWidth": "400.0",
	                "rows": "6"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "Plegar bé el cartró abans de llençar-lo"
	                }
	            }, {
	                "atributs": {
	                    "p": "Llençar papers bruts (tovallons,mocadors...)"
	                }
	            }, {
	                "atributs": {
	                    "p": "Vigilar que no hi vagin grapes ni clips"
	                }
	            }, {
	                "atributs": {
	                    "p": "Llençar paper d\u0027alumni"
	                }
	            }, {
	                "atributs": {
	                    "p": "Rebregar o estripar els papers"
	                }
	            }, {
	                "atributs": {
	                    "p": "Avisar l\u0027Ajuntament quan estigui ple"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "classe": "@associations.ComplexAssociation",
	            "scramble-primary": "true",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "sinogroc.ass",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "scramble-secondary": "true",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Com hem de fer servir el contenidor blau?"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "palmes.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "6",
	                "cols": "1",
	                "style-font-family": "Arial",
	                "shaper-cols": "1",
	                "cellHeight": "50.0",
	                "style-color-alternative": "0xFF8040",
	                "style-font-size": "16",
	                "style-font-bold": "true",
	                "cellWidth": "400.0",
	                "rows": "6",
	                "style-color-inactive": "0xFF8040",
	                "id": "primary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "id": "0",
	                    "p": "Esbandir bé els envasos abans de posar-los"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "p": "Llençar-hi safates de porexpan (d\u0027aquelles blanques)"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "p": "Avisar l\u0027Ajuntament quan estigui ple"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "p": "Llençar-hi els envasos encara que no estiguin buits"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "p": "Plegar els brics abans de llençar-los"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "p": "Aixafar les ampolles abans de posar-les al contenidor"
	                }
	            }]
	        }, {
	            "atributs": {
	                "shaper-rows": "2",
	                "cols": "1",
	                "style-font-family": "Arial",
	                "shaper-cols": "1",
	                "cellHeight": "114.0",
	                "style-font-size": "23",
	                "style-font-bold": "true",
	                "cellWidth": "100.0",
	                "rows": "2",
	                "id": "secondary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "image": "sicongr.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "nocongr.gif"
	                }
	            }]
	        }, {
	            "atributs": {
	                "id": "solvedPrimary",
	                "shaper-rows": "6",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "50.0",
	                "border": "true",
	                "cellWidth": "400.0",
	                "rows": "6"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "Esbandir bé els envasos abans de posar-los"
	                }
	            }, {
	                "atributs": {
	                    "p": "Llençar-hi safates de porexpan (d\u0027aquelles blanques)"
	                }
	            }, {
	                "atributs": {
	                    "p": "Avisar l\u0027Ajuntament quan estigui ple"
	                }
	            }, {
	                "atributs": {
	                    "p": "Llençar-hi els envasos encara que no estiguin buits"
	                }
	            }, {
	                "atributs": {
	                    "p": "Plegar els brics abans de llençar-los"
	                }
	            }, {
	                "atributs": {
	                    "p": "Aixafar les ampolles abans de posar-les al contenidor"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "layout-position": "BA",
	            "classe": "@associations.ComplexAssociation",
	            "scramble-primary": "true",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "sinomarr.ass",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "scramble-secondary": "true",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Com hem de fer servir el contenidor marró?"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "palmes.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "6",
	                "cols": "1",
	                "style-font-family": "Arial",
	                "shaper-cols": "1",
	                "cellHeight": "50.0",
	                "style-color-alternative": "0xFF8040",
	                "style-font-size": "16",
	                "style-font-bold": "true",
	                "cellWidth": "440.0",
	                "rows": "6",
	                "style-color-inactive": "0xFF8040",
	                "id": "primary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "id": "0",
	                    "p": "Llençar-hi les restes d\u0027escurar els plats, fins i tot els ossos"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "p": "Dipositar restes de jardineria en petites quantitats"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "p": "Posar-hi els productes caducats encara que estiguin embalats"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "p": "Llençar-hi les sabates velles, ja que són de pell"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "p": "Abocar-hi l\u0027oli de fregir"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "p": "Llençar-hi els taps de suro"
	                }
	            }]
	        }, {
	            "atributs": {
	                "shaper-rows": "2",
	                "cols": "1",
	                "style-font-family": "Arial",
	                "shaper-cols": "1",
	                "cellHeight": "114.0",
	                "style-font-size": "23",
	                "style-font-bold": "true",
	                "cellWidth": "100.0",
	                "rows": "2",
	                "id": "secondary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "image": "siconmr.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "noconmr.gif"
	                }
	            }]
	        }, {
	            "atributs": {
	                "id": "solvedPrimary",
	                "shaper-rows": "6",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "50.0",
	                "border": "true",
	                "cellWidth": "440.0",
	                "rows": "6"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "Llençar-hi les restes d\u0027escurar els plats, fins i tot els ossos"
	                }
	            }, {
	                "atributs": {
	                    "p": "Dipositar restes de jardineria en petites quantitats"
	                }
	            }, {
	                "atributs": {
	                    "p": "Posar-hi els productes caducats encara que estiguin embalats"
	                }
	            }, {
	                "atributs": {
	                    "p": "Llençar-hi les sabates velles, ja que són de pell"
	                }
	            }, {
	                "atributs": {
	                    "p": "Abocar-hi l\u0027oli de fregir"
	                }
	            }, {
	                "atributs": {
	                    "p": "Llençar-hi els taps de suro"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "classe": "@associations.ComplexAssociation",
	            "scramble-primary": "true",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "sinoverd.ass",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "scramble-secondary": "true",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Com hem de fer servir el contenidor verd?"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "palmes.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "7",
	                "cols": "1",
	                "style-font-family": "Arial",
	                "shaper-cols": "1",
	                "cellHeight": "50.0",
	                "style-color-alternative": "0xFF8040",
	                "style-font-size": "16",
	                "style-font-bold": "true",
	                "cellWidth": "440.0",
	                "rows": "7",
	                "style-color-inactive": "0xFF8040",
	                "id": "primary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "id": "0",
	                    "p": "LLençar-hi els vidres trencats (gerros, gots...)"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "p": "Llencar-hi els taps de pots i ampolles"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "p": "Deixar-hi fluorescents i bombetes"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "p": "Esbandir les ampolles abans de llençar-les"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "p": "Si deixem una ampolla mig plena, cal tancar-la bé"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "p": "Avisar l\u0027Ajuntament quan estigui ple"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "p": "Deixar-hi miralls quan s\u0027hagin trencat"
	                }
	            }]
	        }, {
	            "atributs": {
	                "shaper-rows": "2",
	                "cols": "1",
	                "style-font-family": "Arial",
	                "shaper-cols": "1",
	                "cellHeight": "114.0",
	                "style-font-size": "23",
	                "style-font-bold": "true",
	                "cellWidth": "100.0",
	                "rows": "2",
	                "id": "secondary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "image": "siconvd.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "noconvd.gif"
	                }
	            }]
	        }, {
	            "atributs": {
	                "id": "solvedPrimary",
	                "shaper-rows": "7",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "50.0",
	                "border": "true",
	                "cellWidth": "440.0",
	                "rows": "7"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "LLençar-hi els vidres trencats (gerros,gots...)"
	                }
	            }, {
	                "atributs": {
	                    "p": "Llencar-hi els taps de pots i ampolles"
	                }
	            }, {
	                "atributs": {
	                    "p": "Deixar-hi fluorescents i bombetes"
	                }
	            }, {
	                "atributs": {
	                    "p": "Esbandir les ampolles abans de llençar-les"
	                }
	            }, {
	                "atributs": {
	                    "p": "Si deixem una ampolla mig plena, cal tancar-la bé"
	                }
	            }, {
	                "atributs": {
	                    "p": "Avisar l\u0027Ajuntament quan estigui ple"
	                }
	            }, {
	                "atributs": {
	                    "p": "Deixar-hi miralls quan s\u0027hagin trencat"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "classe": "@associations.ComplexAssociation",
	            "scramble-primary": "true",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "sinoblan.ass",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "scramble-secondary": "true",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Com hem de fer servir el contenidor blanc?"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "palmes.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "4",
	                "cols": "1",
	                "style-font-family": "Arial",
	                "shaper-cols": "1",
	                "cellHeight": "80.0",
	                "style-color-alternative": "0xFF8040",
	                "style-font-size": "16",
	                "style-font-bold": "true",
	                "cellWidth": "440.0",
	                "rows": "4",
	                "style-color-inactive": "0xFF8040",
	                "id": "primary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "id": "1",
	                    "p": "Posar-hi bateries de cotxe"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "p": "Posar-hi piles de rellotge, de les que tenen forma de botó"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "p": "Trobarem aquets contenidors a les botigues d\u0027electrodomèstics. També en tenim a l\u0027escola"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "p": "Hi ha dues mides: el més gran, per les piles normals, i el petit, per les piles de botó"
	                }
	            }]
	        }, {
	            "atributs": {
	                "shaper-rows": "2",
	                "cols": "1",
	                "style-font-family": "Arial",
	                "shaper-cols": "1",
	                "cellHeight": "82.0",
	                "style-font-size": "23",
	                "style-font-bold": "true",
	                "cellWidth": "120.0",
	                "rows": "2",
	                "id": "secondary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "image": "siconbla.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "noconbla.gif"
	                }
	            }]
	        }, {
	            "atributs": {
	                "id": "solvedPrimary",
	                "shaper-rows": "4",
	                "cols": "1",
	                "shaper-cols": "1",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "80.0",
	                "border": "true",
	                "cellWidth": "440.0",
	                "rows": "4"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "Posar-hi bateries de cotxe"
	                }
	            }, {
	                "atributs": {
	                    "p": "Posar-hi piles de rellotge, de les que tenen forma de botó"
	                }
	            }, {
	                "atributs": {
	                    "p": "Trobarem aquets contenidors a les botigues d\u0027electrodomèstics. També en tenim a l\u0027escola"
	                }
	            }, {
	                "atributs": {
	                    "p": "Hi ha dues mides: el més gran, per les piles normals, i el petit, per les piles de botó"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "document-section-p-background": "0x004080",
	            "settings-container-counters-score": "true",
	            "settings-window-size-height": "373",
	            "document-style-tabWidth": "16",
	            "document-section-p-text-background": "0x004080",
	            "document-style-bold": "true",
	            "document-style-background": "0xFF0000",
	            "document-style-target": "true",
	            "document-section-p-text-foreground": "0xFFFF00",
	            "document-style-foreground": "0xFFFFFF",
	            "document-section-p-text-italic": "false",
	            "checkButton": "Ok?",
	            "document-style-base": "target",
	            "document-section-p-text-bold": "true",
	            "document-section-p-foreground": "0xFFFF00",
	            "document-section-p-text-family": "Arial",
	            "document-section-p-size": "18",
	            "name": "3erres.txa",
	            "settings-container-counters-actions": "true",
	            "evaluator-class": "@ComplexEvaluator",
	            "settings-reportActions": "false",
	            "document-section-p-family": "Arial",
	            "option": "Reciclar",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF",
	            "document-style-size": "18",
	            "text": ": si ho hem de llençar ho farem al contenidor corresponent.",
	            "document-style-italic": "false",
	            "classe": "@text.FillInBlanks",
	            "answer": "Reciclar",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "settings-window-size-width": "560",
	            "document-section-p-bold": "true",
	            "document-section-p-text-size": "18",
	            "document-style-family": "Arial",
	            "document-style-name": "targetError",
	            "document-section-p-italic": "false"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "comsolu2.gif",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "style-borderStroke": "0.7",
	                "type": "final",
	                "media-file": "palmes.wav",
	                "style-markerStroke": "5.0"
	            }
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "style-font-family": "Arial",
	                "height": "70",
	                "imgAlign": "left,middle",
	                "p": "Coneixes la norma de les tres ERRES?",
	                "width": "440",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "txtAlign": "left,middle",
	                "style-color-foreground": "0x80FF00",
	                "style-font-size": "20",
	                "border": "false",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": []
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "layout-position": "BA",
	            "classe": "@associations.SimpleAssociation",
	            "scramble-primary": "true",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "llumaigu.ass",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "scramble-secondary": "true",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Relaciona les imatges amb les accions corresponents"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "palmes.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "2",
	                "cols": "2",
	                "style-font-family": "Arial",
	                "shaper-cols": "2",
	                "cellHeight": "140.0",
	                "style-color-alternative": "0xFF8040",
	                "style-font-size": "16",
	                "style-font-bold": "true",
	                "cellWidth": "200.0",
	                "rows": "2",
	                "style-color-inactive": "0xFF8040",
	                "id": "primary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "Sempre que puguem, desplaçar-nos a peu o en transport públic"
	                }
	            }, {
	                "atributs": {
	                    "p": "Apagar els llums no necessaris, sobre tot durant el dia"
	                }
	            }, {
	                "atributs": {
	                    "p": "Regular la calefacció a 20 graus durant el dia i a 16 durant la nit"
	                }
	            }, {
	                "atributs": {
	                    "p": "Tancar l\u0027aixeta quan ens ensabonem o raspallem les dents"
	                }
	            }]
	        }, {
	            "atributs": {
	                "shaper-rows": "2",
	                "cols": "2",
	                "style-font-family": "Arial",
	                "shaper-cols": "2",
	                "cellHeight": "140.0",
	                "style-font-size": "23",
	                "style-font-bold": "true",
	                "cellWidth": "100.0",
	                "rows": "2",
	                "id": "secondary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "image": "anarpeu.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "apagllum.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "regtermo.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "tancaixe.gif"
	                }
	            }]
	        }, {
	            "atributs": {
	                "id": "solvedPrimary",
	                "shaper-rows": "2",
	                "cols": "2",
	                "shaper-cols": "2",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "140.0",
	                "border": "true",
	                "cellWidth": "200.0",
	                "rows": "2"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "Sempre que poguem, desplaçar-nos a peu o en transport públic"
	                }
	            }, {
	                "atributs": {
	                    "p": "Apagar els llums innecessàris, sobre tot durant el dia"
	                }
	            }, {
	                "atributs": {
	                    "p": "Regular la calefacció a 20 graus durant el dia i a 16 durant la nit"
	                }
	            }, {
	                "atributs": {
	                    "p": "Tancar l\u0027aixeta quan ens ensabonem o raspatllem les dents"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "document-section-p-background": "0x004080",
	            "settings-container-counters-score": "true",
	            "settings-window-size-height": "340",
	            "document-style-tabWidth": "16",
	            "evaluator-checkPunctuation": "false",
	            "evaluator-checkCase": "true",
	            "document-section-p-text-background": "0x004080",
	            "document-style-bold": "true",
	            "type": "orderParagraphs",
	            "document-style-background": "0xFF0000",
	            "document-style-target": "true",
	            "document-section-p-text-foreground": "0xFFFF00",
	            "document-style-foreground": "0xFFFFFF",
	            "document-section-p-text-italic": "false",
	            "checkButton": "Corregir l\u0027Exercici",
	            "document-style-base": "target",
	            "document-section-p-text-bold": "true",
	            "document-section-p-foreground": "0xFFFF00",
	            "document-section-p-text-family": "Arial",
	            "document-section-p-size": "16",
	            "name": "ordencan.txa",
	            "settings-container-counters-actions": "true",
	            "evaluator-class": "@BasicEvaluator",
	            "settings-reportActions": "false",
	            "document-section-p-family": "Arial",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF",
	            "document-style-size": "16",
	            "document-style-italic": "false",
	            "evaluator-checkDoubleSpaces": "true",
	            "classe": "@text.Order",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "settings-window-size-width": "467",
	            "document-section-p-bold": "true",
	            "target": "de veritat!",
	            "document-section-p-text-size": "16",
	            "document-style-family": "Arial",
	            "document-style-name": "targetError",
	            "document-section-p-italic": "false"
	        },
	        "cell": [{
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "p": "Ordena els paràgrafs",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "media-type": "PLAY_AUDIO",
	                "type": "initial",
	                "media-file": "aquester.wav",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "ovacio.wav",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "style-font-family": "Arial",
	                "height": "65",
	                "p": "Ordena el text de la cançó.",
	                "width": "450",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "style-color-foreground": "0x80FF00",
	                "style-font-size": "20",
	                "border": "false",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "media-level": "1",
	                "style-font-family": "Arial",
	                "imgAlign": "left,middle",
	                "width": "20",
	                "style-font-size": "20",
	                "image": "soico.gif",
	                "media-type": "PLAY_AUDIO",
	                "media-file": "aquester.wav",
	                "style-font-bold": "true",
	                "height": "20",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "txtAlign": "left,middle",
	                "style-color-foreground": "0x80FF00",
	                "border": "false"
	            }
	        }],
	        "celllist": []
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "document-section-p-background": "0x004080",
	            "settings-container-counters-score": "true",
	            "settings-window-size-height": "356",
	            "document-style-tabWidth": "16",
	            "document-section-p-text-background": "0x004080",
	            "document-style-bold": "true",
	            "type": "identifyChars",
	            "document-style-background": "0xFF0000",
	            "document-style-target": "true",
	            "document-section-p-text-foreground": "0xFFFF00",
	            "document-style-foreground": "0xFFFFFF",
	            "document-section-p-text-italic": "false",
	            "checkButton": "Ok?",
	            "document-style-base": "target",
	            "document-section-p-text-bold": "true",
	            "document-section-p-foreground": "0xFFFF00",
	            "document-section-p-text-family": "Arial",
	            "document-section-p-size": "18",
	            "name": "contverd.txa",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "document-section-p-family": "Arial",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF",
	            "document-style-size": "18",
	            "text": " miralls vells",
	            "document-style-italic": "false",
	            "classe": "@text.Identify",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "settings-window-size-width": "540",
	            "document-section-p-bold": "true",
	            "target": "",
	            "document-section-p-text-size": "18",
	            "document-style-family": "Arial",
	            "document-style-name": "targetError",
	            "document-section-p-italic": "false"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "comsolu.gif",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "ovacio.wav",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "style-font-family": "Arial",
	                "height": "80",
	                "imgAlign": "left,middle",
	                "p": "Marca la casella de tot allò que hem de llençar al contenidor verd:",
	                "width": "480",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "txtAlign": "left,middle",
	                "style-color-foreground": "0x80FF00",
	                "style-font-size": "20",
	                "border": "false",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": []
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "classe": "@puzzles.ExchangePuzzle",
	            "settings-helpWindow-showSolution": "true",
	            "settings-dragCells": "true",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "tevater1.puz",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Resol el puzzle"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "aquester.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "4",
	                "cols": "4",
	                "style-font-family": "Arial",
	                "shaper-cols": "4",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x8000FF",
	                "style-color-foreground": "0x004080",
	                "style-font-size": "20",
	                "image": "tevaterr.gif",
	                "border": "true",
	                "style-font-bold": "true",
	                "rows": "4"
	            },
	            "cell": []
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "classe": "@puzzles.ExchangePuzzle",
	            "settings-dragCells": "true",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "recbric.puz",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Com hem de reciclar els brics?"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "ovacio.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "1",
	                "cols": "4",
	                "style-font-family": "Arial",
	                "shaper-cols": "4",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "140.0",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "18",
	                "border": "true",
	                "style-font-bold": "true",
	                "cellWidth": "140.0",
	                "rows": "1"
	            },
	            "cell": [{
	                "atributs": {
	                    "image": "recbric1.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "recbric2.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "recbric3.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "recbric4.gif"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "classe": "@panels.Identify",
	            "scramble-primary": "true",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "deixalle.ass",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-inactive": "0xFF8040",
	                "style-font-family": "Arial",
	                "style-color-alternative": "0xFF8040",
	                "p": "Quins d\u0027aquest productes s\u0027han de dur obligatòriament a la deixalleria?",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "16",
	                "type": "initial",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-color-inactive": "0xFF8040",
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-alternative": "0xFF8040",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "16",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "ovacio.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "5",
	                "cols": "3",
	                "style-font-family": "Arial",
	                "shaper-cols": "3",
	                "cellHeight": "50.0",
	                "style-color-alternative": "0xFF8040",
	                "style-font-size": "15",
	                "style-font-bold": "true",
	                "cellWidth": "180.0",
	                "rows": "5",
	                "style-color-inactive": "0xFF8040",
	                "id": "primary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "id": "1",
	                    "p": "Fluorescents"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "p": "Pintura"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "p": "Electrodomèstics"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "p": "Fustes"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "p": "Roba i calçat vell"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "p": "Runes"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "p": "Ferralla"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "p": "Olis"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "p": "Productes tòxics"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "p": "Plàstics"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "p": "Ampolles de cava"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "p": "Cartrons"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "p": "Restes de menjar"
	                }
	            }, {
	                "atributs": {
	                    "id": "0",
	                    "p": "Diaris vells"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "p": "Tinta i tònner"
	                }
	            }]
	        }, {
	            "atributs": {
	                "id": "solvedPrimary",
	                "shaper-rows": "5",
	                "cols": "3",
	                "shaper-cols": "3",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "50.0",
	                "border": "true",
	                "cellWidth": "180.0",
	                "rows": "5"
	            },
	            "cell": [{
	                "atributs": {
	                    "p": "Fluorescents"
	                }
	            }, {
	                "atributs": {
	                    "p": "Pintura"
	                }
	            }, {
	                "atributs": {
	                    "p": "Electrodomèstics"
	                }
	            }, {
	                "atributs": {
	                    "p": "Fustes"
	                }
	            }, {
	                "atributs": {
	                    "p": "Roba i calçat vell"
	                }
	            }, {
	                "atributs": {
	                    "p": "Runes"
	                }
	            }, {
	                "atributs": {
	                    "p": "Ferralla"
	                }
	            }, {
	                "atributs": {
	                    "p": "Olis"
	                }
	            }, {
	                "atributs": {
	                    "p": "Productes tòxics"
	                }
	            }, {
	                "atributs": {
	                    "p": "Plàstics"
	                }
	            }, {
	                "atributs": {
	                    "p": "Ampolles de cava"
	                }
	            }, {
	                "atributs": {
	                    "p": "Cartrons"
	                }
	            }, {
	                "atributs": {
	                    "p": "Restes de menjar"
	                }
	            }, {
	                "atributs": {
	                    "p": "Diaris vells"
	                }
	            }, {
	                "atributs": {
	                    "p": "Tinta i tònner"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "document-section-p-background": "0x004080",
	            "settings-container-counters-score": "true",
	            "settings-window-size-height": "355",
	            "document-style-tabWidth": "16",
	            "document-section-p-text-background": "0x004080",
	            "document-style-bold": "true",
	            "type": "identifyChars",
	            "document-style-background": "0xFF0000",
	            "document-style-target": "true",
	            "document-section-p-text-foreground": "0xFFFF00",
	            "document-style-foreground": "0xFFFFFF",
	            "document-section-p-text-italic": "false",
	            "checkButton": "Ok?",
	            "document-style-base": "target",
	            "document-section-p-text-bold": "true",
	            "document-section-p-foreground": "0xFFFF00",
	            "document-section-p-text-family": "Arial",
	            "document-section-p-size": "18",
	            "name": "contgroc.txa",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "document-section-p-family": "Arial",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF",
	            "document-style-size": "18",
	            "text": " peles de patates",
	            "document-style-italic": "false",
	            "classe": "@text.Identify",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "settings-window-size-width": "540",
	            "document-section-p-bold": "true",
	            "target": "",
	            "document-section-p-text-size": "18",
	            "document-style-family": "Arial",
	            "document-style-name": "targetError",
	            "document-section-p-italic": "false"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "comsolu.gif",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "ovacio.wav",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "style-font-family": "Arial",
	                "height": "80",
	                "imgAlign": "left,middle",
	                "p": "Marca la casella de tot allò que hem de llençar al contenidor groc:",
	                "width": "480",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "txtAlign": "left,middle",
	                "style-color-foreground": "0x80FF00",
	                "style-font-size": "20",
	                "border": "false",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": []
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "document-section-p-background": "0x004080",
	            "settings-container-counters-score": "true",
	            "settings-window-size-height": "340",
	            "document-style-tabWidth": "16",
	            "document-section-p-target-response-length": "8",
	            "document-section-p-text-background": "0x004080",
	            "document-style-bold": "true",
	            "document-style-background": "0xFF0000",
	            "document-style-target": "true",
	            "document-section-p-text-foreground": "0xFFFF00",
	            "document-style-foreground": "0xFFFFFF",
	            "document-section-p-text-italic": "false",
	            "checkButton": "Ok?",
	            "document-style-base": "target",
	            "document-section-p-text-bold": "true",
	            "document-section-p-foreground": "0xFFFF00",
	            "document-section-p-text-family": "Arial",
	            "document-section-p-size": "18",
	            "name": "3erres2.txa",
	            "document-section-p-target-response-maxLength": "8",
	            "settings-container-counters-actions": "true",
	            "evaluator-class": "@ComplexEvaluator",
	            "settings-reportActions": "false",
	            "document-section-p-family": "Arial",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF",
	            "document-style-size": "18",
	            "text": "Reciclar",
	            "document-style-italic": "false",
	            "classe": "@text.FillInBlanks",
	            "answer": "Reciclar",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "settings-window-size-width": "560",
	            "document-section-p-bold": "true",
	            "document-section-p-target-response-fill": "_",
	            "document-section-p-text-size": "18",
	            "document-style-family": "Arial",
	            "document-style-name": "targetError",
	            "document-section-p-italic": "false"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "comsolu2.gif",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "palmes.wav",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "style-font-family": "Arial",
	                "height": "60",
	                "p": "Recordes les tres ERRES?",
	                "width": "440",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "style-color-foreground": "0x80FF00",
	                "style-font-size": "20",
	                "border": "false",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-font-family": "Arial",
	                "height": "50",
	                "imgAlign": "left,middle",
	                "p": "PISTA: quant menys gastem, millor.",
	                "width": "300",
	                "style-color-background": "0xDBD979",
	                "txtAlign": "left,middle",
	                "style-font-size": "15",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-font-family": "Arial",
	                "height": "50",
	                "imgAlign": "left,middle",
	                "p": "PISTA:  abans de llençar cal pensar si es pot tornar a fer servir.",
	                "width": "300",
	                "style-color-background": "0xDBD979",
	                "txtAlign": "left,middle",
	                "style-font-size": "15",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-font-family": "Arial",
	                "height": "50",
	                "imgAlign": "left,middle",
	                "p": "PISTA: si ho hem de llençar ho farem al contenidor corresponent.",
	                "width": "300",
	                "style-color-background": "0xDBD979",
	                "txtAlign": "left,middle",
	                "style-font-size": "15",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": []
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "document-section-p-background": "0x004080",
	            "settings-container-counters-score": "true",
	            "settings-window-size-height": "371",
	            "document-style-tabWidth": "16",
	            "document-section-p-text-background": "0x004080",
	            "document-style-bold": "true",
	            "settings-helpWindow-showSolution": "true",
	            "type": "orderWords",
	            "document-style-background": "0xFF0000",
	            "document-style-target": "true",
	            "document-section-p-text-foreground": "0xFFFF00",
	            "document-style-foreground": "0xFFFFFF",
	            "document-section-p-text-italic": "false",
	            "checkButton": "Ok?",
	            "document-style-base": "target",
	            "document-section-p-text-bold": "true",
	            "document-section-p-foreground": "0xFFFF00",
	            "document-section-p-text-family": "Arial",
	            "document-section-p-size": "15",
	            "name": "recicla0.txa",
	            "settings-container-counters-actions": "true",
	            "evaluator-class": "@BasicEvaluator",
	            "settings-reportActions": "false",
	            "amongParagraphs": "true",
	            "document-section-p-family": "Arial",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF",
	            "document-style-size": "15",
	            "text": "?",
	            "document-style-italic": "false",
	            "classe": "@text.Order",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "settings-window-size-width": "560",
	            "document-section-p-bold": "true",
	            "target": "energia",
	            "document-section-p-text-size": "15",
	            "document-style-family": "Arial",
	            "document-style-name": "targetError",
	            "document-section-p-italic": "false"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Col·loca cada paraula al seu lloc corresponent."
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "palmes.wav",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "style-font-family": "Arial",
	                "height": "70",
	                "p": "RECICLAR",
	                "width": "560",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "style-color-foreground": "0x80FF00",
	                "style-font-size": "20",
	                "border": "false",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": []
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "document-section-p-background": "0x004080",
	            "settings-container-counters-score": "true",
	            "settings-window-size-height": "361",
	            "document-style-tabWidth": "16",
	            "document-section-p-text-background": "0x004080",
	            "document-style-bold": "true",
	            "type": "identifyChars",
	            "document-style-background": "0xFF0000",
	            "document-style-target": "true",
	            "document-section-p-text-foreground": "0xFFFF00",
	            "document-style-foreground": "0xFFFFFF",
	            "document-section-p-text-italic": "false",
	            "checkButton": "Ok?",
	            "document-style-base": "target",
	            "document-section-p-text-bold": "true",
	            "document-section-p-foreground": "0xFFFF00",
	            "document-section-p-text-family": "Arial",
	            "document-section-p-size": "18",
	            "name": "conmarro.txa",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "document-section-p-family": "Arial",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF",
	            "document-style-size": "18",
	            "text": "paper de cuina i tovallons bruts",
	            "document-style-italic": "false",
	            "classe": "@text.Identify",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "settings-window-size-width": "540",
	            "document-section-p-bold": "true",
	            "target": "",
	            "document-section-p-text-size": "18",
	            "document-style-family": "Arial",
	            "document-style-name": "targetError",
	            "document-section-p-italic": "false"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "comsolu.gif",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "ovacio.wav",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "style-font-family": "Arial",
	                "height": "80",
	                "imgAlign": "left,middle",
	                "p": "Marca la casella de tot allò que hem de llençar al contenidor marró:",
	                "width": "480",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "txtAlign": "left,middle",
	                "style-color-foreground": "0x80FF00",
	                "style-font-size": "20",
	                "border": "false",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": []
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "document-section-p-background": "0x004080",
	            "settings-container-counters-score": "true",
	            "settings-window-size-height": "364",
	            "document-style-tabWidth": "16",
	            "document-section-p-text-background": "0x004080",
	            "document-style-bold": "true",
	            "settings-helpWindow-showSolution": "true",
	            "type": "orderWords",
	            "document-style-background": "0xFF0000",
	            "document-style-target": "true",
	            "document-section-p-text-foreground": "0xFFFF00",
	            "document-style-foreground": "0xFFFFFF",
	            "document-section-p-text-italic": "false",
	            "checkButton": "Ok?",
	            "document-style-base": "target",
	            "document-section-p-text-bold": "true",
	            "document-section-p-foreground": "0xFFFF00",
	            "document-section-p-text-family": "Arial",
	            "document-section-p-size": "15",
	            "name": "reduir0.txa",
	            "settings-container-counters-actions": "true",
	            "evaluator-class": "@BasicEvaluator",
	            "settings-reportActions": "false",
	            "amongParagraphs": "true",
	            "document-section-p-family": "Arial",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF",
	            "document-style-size": "15",
	            "text": "d\u0027electricitat i d\u0027aigua.",
	            "document-style-italic": "false",
	            "classe": "@text.Order",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "settings-window-size-width": "560",
	            "document-section-p-bold": "true",
	            "target": "consum",
	            "document-section-p-text-size": "15",
	            "document-style-family": "Arial",
	            "document-style-name": "targetError",
	            "document-section-p-italic": "false"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "18",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "p": "Coloca cada paraula al seu lloc."
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "18",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "palmes.wav"
	            }
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "style-font-family": "Arial",
	                "height": "70",
	                "p": "REDUIR",
	                "width": "440",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "style-color-foreground": "0x80FF00",
	                "style-font-size": "20",
	                "border": "false",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": []
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "document-section-p-background": "0x004080",
	            "settings-container-counters-score": "true",
	            "settings-window-size-height": "361",
	            "document-style-tabWidth": "16",
	            "document-section-p-text-background": "0x004080",
	            "document-style-bold": "true",
	            "type": "identifyChars",
	            "document-style-background": "0xFF0000",
	            "document-style-target": "true",
	            "document-section-p-text-foreground": "0xFFFF00",
	            "document-style-foreground": "0xFFFFFF",
	            "document-section-p-text-italic": "false",
	            "checkButton": "Ok?",
	            "document-style-base": "target",
	            "document-section-p-text-bold": "true",
	            "document-section-p-foreground": "0xFFFF00",
	            "document-section-p-text-family": "Arial",
	            "document-section-p-size": "18",
	            "name": "contblau.txa",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "document-section-p-family": "Arial",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF",
	            "document-style-size": "18",
	            "text": " piles",
	            "document-style-italic": "false",
	            "classe": "@text.Identify",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "settings-window-size-width": "540",
	            "document-section-p-bold": "true",
	            "target": "",
	            "document-section-p-text-size": "18",
	            "document-style-family": "Arial",
	            "document-style-name": "targetError",
	            "document-section-p-italic": "false"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "comsolu.gif",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "ovacio.wav",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "style-font-family": "Arial",
	                "height": "80",
	                "imgAlign": "left,middle",
	                "p": "Marca la casella de tot allò que hem de llençar al contenidor blau:",
	                "width": "480",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "txtAlign": "left,middle",
	                "style-color-foreground": "0x80FF00",
	                "style-font-size": "20",
	                "border": "false",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": []
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "document-section-p-background": "0x004080",
	            "settings-container-counters-score": "true",
	            "settings-window-size-height": "340",
	            "document-style-tabWidth": "16",
	            "document-section-p-text-background": "0x004080",
	            "document-style-bold": "true",
	            "settings-helpWindow-showSolution": "true",
	            "type": "orderWords",
	            "document-style-background": "0xFF0000",
	            "document-style-target": "true",
	            "document-section-p-text-foreground": "0xFFFF00",
	            "document-style-foreground": "0xFFFFFF",
	            "document-section-p-text-italic": "false",
	            "checkButton": "Ok?",
	            "document-style-base": "target",
	            "document-section-p-text-bold": "true",
	            "document-section-p-foreground": "0xFFFF00",
	            "document-section-p-text-family": "Arial",
	            "document-section-p-size": "15",
	            "name": "reutili0.txa",
	            "settings-container-counters-actions": "true",
	            "evaluator-class": "@BasicEvaluator",
	            "settings-reportActions": "false",
	            "amongParagraphs": "true",
	            "document-section-p-family": "Arial",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF",
	            "document-style-size": "15",
	            "text": ".",
	            "document-style-italic": "false",
	            "classe": "@text.Order",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "settings-window-size-width": "560",
	            "document-section-p-bold": "true",
	            "target": "Càrites",
	            "document-section-p-text-size": "15",
	            "document-style-family": "Arial",
	            "document-style-name": "targetError",
	            "document-section-p-italic": "false"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Omple els buis amb les paraules correctes"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "palmes.wav"
	            }
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "style-font-family": "Arial",
	                "height": "55",
	                "p": "REUTILITZAR",
	                "width": "550",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "style-color-foreground": "0x80FF00",
	                "style-font-size": "20",
	                "border": "false",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": []
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "classe": "@puzzles.ExchangePuzzle",
	            "settings-dragCells": "true",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "recampo.puz",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Com hem de reciclar els brics?"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "ovacio.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "1",
	                "cols": "4",
	                "style-font-family": "Arial",
	                "shaper-cols": "4",
	                "shaper-class": "@Rectangular",
	                "cellHeight": "130.0",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "18",
	                "border": "true",
	                "style-font-bold": "true",
	                "cellWidth": "110.0",
	                "rows": "1"
	            },
	            "cell": [{
	                "atributs": {
	                    "image": "ampolla1.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "ampolla2.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "ampolla3.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "ampolla4.gif"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "textGrid-style-font-size": "23",
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "clues-clue-id": "3",
	            "textGrid-style-color-foreground": "0xFFFF00",
	            "textGrid-cellHeight": "30.0",
	            "name": "groc.sop",
	            "textGrid-style-font-family": "Arial",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "textGrid-rows": "9",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF",
	            "textGrid-border": "true",
	            "layout-position": "AB",
	            "classe": "@textGrid.WordSearch",
	            "code": "",
	            "settings-report": "true",
	            "textGrid-style-font-bold": "true",
	            "row": "**L******",
	            "textGrid-cellWidth": "30.0",
	            "textGrid-style-color-background": "0x004080",
	            "settings-margin": "8",
	            "textGrid-columns": "7",
	            "clue": "ENVASOS"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Busca coses que podem llençar al contenidor d\u0027envasos."
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "ovacio.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "id": "secondary",
	                "shaper-rows": "2",
	                "cols": "2",
	                "style-font-family": "Arial",
	                "shaper-cols": "2",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "23",
	                "image": "congragr.gif",
	                "border": "false",
	                "style-font-bold": "true",
	                "rows": "2"
	            },
	            "cell": []
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "classe": "@puzzles.ExchangePuzzle",
	            "settings-helpWindow-showSolution": "true",
	            "settings-dragCells": "true",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "totscon.puz",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Resol el puzzle"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "ovacio.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "4",
	                "cols": "5",
	                "style-font-family": "Arial",
	                "shaper-cols": "5",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "15",
	                "image": "totscont.gif",
	                "border": "true",
	                "style-font-bold": "true",
	                "rows": "4"
	            },
	            "cell": []
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "document-section-p-background": "0x004080",
	            "settings-container-counters-score": "true",
	            "settings-window-size-height": "330",
	            "document-style-tabWidth": "2",
	            "document-section-p-text-background": "0x004080",
	            "document-style-bold": "true",
	            "type": "identifyChars",
	            "document-style-background": "0xFF0000",
	            "document-style-target": "true",
	            "document-section-p-text-foreground": "0xFFFF00",
	            "document-style-foreground": "0xFFFFFF",
	            "document-section-p-text-italic": "false",
	            "checkButton": "Ok?",
	            "document-style-base": "target",
	            "document-section-p-text-bold": "true",
	            "document-section-p-foreground": "0xFFFF00",
	            "document-section-p-text-family": "Arial",
	            "document-section-p-size": "12",
	            "name": "estalv_e.txa",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "document-section-p-family": "Arial",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF",
	            "document-style-size": "12",
	            "text": "allà on sigui possible, instal·lar bombetes de baix consum",
	            "document-style-italic": "false",
	            "classe": "@text.Identify",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "settings-window-size-width": "620",
	            "document-section-p-bold": "true",
	            "target": "",
	            "document-section-p-text-size": "12",
	            "document-style-family": "Arial",
	            "document-style-name": "targetError",
	            "document-section-p-italic": "false"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "comsolu.gif",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "ovacio.wav",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "style-font-family": "Arial",
	                "height": "80",
	                "imgAlign": "left,middle",
	                "p": "Marca la casella de totes aquelles accions que creguis positives pel medi ambient:",
	                "width": "480",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "txtAlign": "left,middle",
	                "style-color-foreground": "0x80FF00",
	                "style-font-size": "20",
	                "border": "false",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": []
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "document-section-p-background": "0x004080",
	            "settings-container-counters-score": "true",
	            "settings-window-size-height": "340",
	            "document-style-tabWidth": "9",
	            "document-section-p-target-response-length": "19",
	            "document-section-p-text-background": "0x004080",
	            "document-style-bold": "true",
	            "document-style-background": "0xFF0000",
	            "document-style-target": "true",
	            "document-section-p-text-foreground": "0xFFFF00",
	            "document-style-foreground": "0xFFFFFF",
	            "document-section-p-text-italic": "false",
	            "checkButton": "Ok?",
	            "document-style-base": "target",
	            "document-section-p-text-bold": "true",
	            "document-section-p-foreground": "0xFFFF00",
	            "document-section-p-text-family": "Arial",
	            "document-section-p-size": "18",
	            "name": "problem1.txa",
	            "document-section-p-target-response-maxLength": "19",
	            "settings-container-counters-actions": "true",
	            "evaluator-class": "@ComplexEvaluator",
	            "settings-reportActions": "false",
	            "document-section-p-family": "Arial",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF",
	            "document-style-size": "18",
	            "text": "3150 litres d\u0027aigua",
	            "document-style-italic": "false",
	            "classe": "@text.FillInBlanks",
	            "answer": "3150 litres d\u0027aigua",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "settings-window-size-width": "500",
	            "document-section-p-bold": "true",
	            "document-section-p-target-response-fill": "_",
	            "document-section-p-text-size": "18",
	            "document-style-family": "Arial",
	            "document-style-name": "targetError",
	            "document-section-p-italic": "false"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Resol el problema"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "moltbe.gif",
	                "style-font-family": "Arial",
	                "type": "final",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "style-font-family": "Arial",
	                "height": "60",
	                "p": "Gota a gota",
	                "width": "430",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "style-color-foreground": "0x80FF00",
	                "style-font-size": "20",
	                "border": "false",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "media-level": "1",
	                "style-font-family": "Arial",
	                "width": "32",
	                "style-font-size": "20",
	                "image": "calcico.gif",
	                "media-type": "RUN_EXTERNAL",
	                "media-params": "",
	                "media-file": "calc.exe",
	                "style-font-bold": "true",
	                "height": "21",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "style-color-foreground": "0x80FF00",
	                "border": "true"
	            }
	        }],
	        "celllist": []
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "document-section-p-background": "0x004080",
	            "settings-container-counters-score": "true",
	            "settings-window-size-height": "340",
	            "document-style-tabWidth": "16",
	            "evaluator-checkPunctuation": "false",
	            "evaluator-checkCase": "true",
	            "document-section-p-text-background": "0x004080",
	            "document-section-p-target-response-length": "1",
	            "document-style-bold": "true",
	            "document-style-background": "0xFF0000",
	            "document-style-target": "true",
	            "document-section-p-text-foreground": "0xFFFF00",
	            "document-style-foreground": "0xFFFFFF",
	            "document-section-p-text-italic": "false",
	            "checkButton": "Ok?",
	            "document-style-base": "target",
	            "document-section-p-text-bold": "true",
	            "document-section-p-foreground": "0xFFFF00",
	            "document-section-p-text-family": "Arial",
	            "document-section-p-size": "18",
	            "name": "dictat.txa",
	            "document-section-p-target-response-maxLength": "30",
	            "settings-container-counters-actions": "true",
	            "evaluator-class": "@ComplexEvaluator",
	            "settings-reportActions": "false",
	            "document-section-p-family": "Arial",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF",
	            "forceOkToAdvance": "true",
	            "document-style-size": "18",
	            "text": "!",
	            "document-style-italic": "false",
	            "evaluator-checkDoubleSpaces": "true",
	            "classe": "@text.FillInBlanks",
	            "answer": "tot això és nostre de veritat",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "settings-window-size-width": "467",
	            "document-section-p-bold": "true",
	            "document-section-p-target-response-fill": "_",
	            "document-section-p-text-size": "18",
	            "document-style-family": "Arial",
	            "document-style-name": "targetError",
	            "document-section-p-italic": "false"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Fes el dictat"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "ovacio.wav",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "style-font-family": "Arial",
	                "height": "90",
	                "p": "Dictat",
	                "width": "400",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "style-color-foreground": "0x80FF00",
	                "style-font-size": "20",
	                "border": "false",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "media-level": "1",
	                "style-font-family": "Arial",
	                "width": "20",
	                "style-font-size": "20",
	                "image": "soico.gif",
	                "media-type": "PLAY_AUDIO",
	                "media-file": "aquester.wav",
	                "style-font-bold": "true",
	                "height": "20",
	                "media-to": "3340",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "style-color-foreground": "0x80FF00",
	                "border": "false"
	            }
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "media-level": "1",
	                "media-from": "3340",
	                "style-font-family": "Arial",
	                "width": "20",
	                "style-font-size": "20",
	                "image": "soico.gif",
	                "media-type": "PLAY_AUDIO",
	                "media-file": "aquester.wav",
	                "style-font-bold": "true",
	                "height": "20",
	                "media-to": "7050",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "style-color-foreground": "0x80FF00",
	                "border": "false"
	            }
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "media-level": "1",
	                "media-from": "7051",
	                "style-font-family": "Arial",
	                "width": "20",
	                "style-font-size": "20",
	                "image": "soico.gif",
	                "media-type": "PLAY_AUDIO",
	                "media-file": "aquester.wav",
	                "style-font-bold": "true",
	                "height": "20",
	                "media-to": "10935",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "style-color-foreground": "0x80FF00",
	                "border": "false"
	            }
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "media-level": "1",
	                "media-from": "10936",
	                "style-font-family": "Arial",
	                "width": "20",
	                "style-font-size": "20",
	                "image": "soico.gif",
	                "media-type": "PLAY_AUDIO",
	                "media-file": "aquester.wav",
	                "style-font-bold": "true",
	                "height": "20",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "style-color-foreground": "0x80FF00",
	                "border": "false"
	            }
	        }],
	        "celllist": []
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "document-section-p-background": "0x004080",
	            "settings-container-counters-score": "true",
	            "settings-window-size-height": "340",
	            "document-style-tabWidth": "9",
	            "document-section-p-target-response-length": "8",
	            "document-section-p-text-background": "0x004080",
	            "document-style-bold": "true",
	            "document-style-background": "0xFF0000",
	            "document-style-target": "true",
	            "document-section-p-text-foreground": "0xFFFF00",
	            "document-style-foreground": "0xFFFFFF",
	            "document-section-p-text-italic": "false",
	            "checkButton": "Ok?",
	            "document-style-base": "target",
	            "document-section-p-text-bold": "true",
	            "document-section-p-foreground": "0xFFFF00",
	            "document-section-p-text-family": "Arial",
	            "document-section-p-size": "16",
	            "name": "problem2.txa",
	            "document-section-p-target-response-maxLength": "8",
	            "settings-container-counters-actions": "true",
	            "evaluator-class": "@ComplexEvaluator",
	            "settings-reportActions": "false",
	            "document-section-p-family": "Arial",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF",
	            "document-style-size": "16",
	            "text": "3 quilos",
	            "document-style-italic": "false",
	            "evaluator-checkDoubleSpaces": "true",
	            "classe": "@text.FillInBlanks",
	            "answer": "3 quilos",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "settings-window-size-width": "500",
	            "document-section-p-bold": "true",
	            "document-section-p-target-response-fill": "_",
	            "document-section-p-text-size": "16",
	            "document-style-family": "Arial",
	            "document-style-name": "targetError",
	            "document-section-p-italic": "false"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Resol el problema"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "style-font-family": "Arial",
	                "type": "final",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "style-font-family": "Arial",
	                "height": "60",
	                "p": "Quantes deixalles!",
	                "width": "430",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "style-color-foreground": "0x80FF00",
	                "style-font-size": "20",
	                "border": "false",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "media-level": "1",
	                "style-font-family": "Arial",
	                "width": "32",
	                "style-font-size": "20",
	                "image": "calcico.gif",
	                "media-type": "RUN_EXTERNAL",
	                "media-params": "",
	                "media-file": "calc.exe",
	                "style-font-bold": "true",
	                "height": "21",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "style-color-foreground": "0x80FF00",
	                "border": "true"
	            }
	        }],
	        "celllist": []
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "document-section-p-background": "0x004080",
	            "settings-container-counters-score": "true",
	            "settings-window-size-height": "340",
	            "document-style-tabWidth": "16",
	            "document-section-p-target-response-length": "1",
	            "document-section-p-text-background": "0x004080",
	            "document-style-bold": "true",
	            "document-style-background": "0xFF0000",
	            "document-style-target": "true",
	            "document-section-p-text-foreground": "0xFFFF00",
	            "document-style-foreground": "0xFFFFFF",
	            "document-section-p-text-italic": "false",
	            "document-style-base": "target",
	            "document-section-p-text-bold": "true",
	            "document-section-p-foreground": "0xFFFF00",
	            "document-section-p-text-family": "Arial",
	            "document-section-p-size": "18",
	            "name": "vocals.txa",
	            "document-section-p-target-response-maxLength": "1",
	            "settings-container-counters-actions": "true",
	            "evaluator-class": "@ComplexEvaluator",
	            "settings-reportActions": "false",
	            "document-section-p-family": "Arial",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF",
	            "forceOkToAdvance": "true",
	            "document-style-size": "18",
	            "text": "nts...",
	            "document-style-italic": "false",
	            "classe": "@text.FillInBlanks",
	            "answer": "e",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "settings-window-size-width": "500",
	            "document-section-p-bold": "true",
	            "document-section-p-target-response-fill": "_",
	            "document-section-p-text-size": "18",
	            "document-style-family": "Arial",
	            "document-style-name": "targetError",
	            "document-section-p-italic": "false"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Completa les vocals que falten"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "ovacio.wav",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "style-font-family": "Arial",
	                "height": "60",
	                "p": "Les deixalleries",
	                "width": "500",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "style-color-foreground": "0x80FF00",
	                "style-font-size": "20",
	                "border": "false",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": []
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "document-section-p-background": "0x004080",
	            "settings-container-counters-score": "true",
	            "settings-window-size-height": "340",
	            "document-style-tabWidth": "9",
	            "document-section-p-target-response-length": "9",
	            "document-section-p-text-background": "0x004080",
	            "document-style-bold": "true",
	            "document-style-background": "0xFF0000",
	            "document-style-target": "true",
	            "document-section-p-text-foreground": "0xFFFF00",
	            "document-style-foreground": "0xFFFFFF",
	            "document-section-p-text-italic": "false",
	            "checkButton": "Ok?",
	            "document-style-base": "target",
	            "document-section-p-text-bold": "true",
	            "document-section-p-foreground": "0xFFFF00",
	            "document-section-p-text-family": "Arial",
	            "document-section-p-size": "16",
	            "name": "problem3.txa",
	            "document-section-p-target-response-maxLength": "9",
	            "settings-container-counters-actions": "true",
	            "evaluator-class": "@ComplexEvaluator",
	            "settings-reportActions": "false",
	            "document-section-p-family": "Arial",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF",
	            "document-style-size": "16",
	            "text": "5 quilos",
	            "document-style-italic": "false",
	            "classe": "@text.FillInBlanks",
	            "answer": "5 quilos",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "settings-window-size-width": "500",
	            "document-section-p-bold": "true",
	            "document-section-p-target-response-fill": "_",
	            "document-section-p-text-size": "16",
	            "document-style-family": "Arial",
	            "document-style-name": "targetError",
	            "document-section-p-italic": "false"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Resol el problema"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "style-font-family": "Arial",
	                "type": "final",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "style-font-family": "Arial",
	                "height": "60",
	                "p": "Reciclar els brics",
	                "width": "430",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "style-color-foreground": "0x80FF00",
	                "style-font-size": "20",
	                "border": "false",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "media-level": "1",
	                "style-font-family": "Arial",
	                "width": "32",
	                "style-font-size": "20",
	                "image": "calcico.gif",
	                "media-type": "RUN_EXTERNAL",
	                "media-params": "",
	                "media-file": "calc.exe",
	                "style-font-bold": "true",
	                "height": "21",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "style-color-foreground": "0x80FF00",
	                "border": "true"
	            }
	        }],
	        "celllist": []
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "document-section-p-background": "0x004080",
	            "settings-container-counters-score": "true",
	            "settings-window-size-height": "340",
	            "document-style-tabWidth": "5",
	            "document-section-p-target-response-length": "12",
	            "document-section-p-text-background": "0x004080",
	            "document-style-bold": "true",
	            "document-style-background": "0xFF0000",
	            "document-style-target": "true",
	            "document-section-p-text-foreground": "0xFFFF00",
	            "document-style-foreground": "0xFFFFFF",
	            "document-section-p-text-italic": "false",
	            "checkButton": "Ok?",
	            "document-style-base": "target",
	            "document-section-p-text-bold": "true",
	            "document-section-p-foreground": "0xFFFF00",
	            "document-section-p-text-family": "Arial",
	            "document-section-p-size": "15",
	            "name": "problem4.txa",
	            "document-section-p-target-response-maxLength": "12",
	            "settings-container-counters-actions": "true",
	            "evaluator-class": "@ComplexEvaluator",
	            "settings-reportActions": "false",
	            "document-section-p-family": "Arial",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF",
	            "document-style-size": "15",
	            "text": "(*Un tona són 1.000 quilos)",
	            "document-style-italic": "false",
	            "classe": "@text.FillInBlanks",
	            "answer": "64.126 tones",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "settings-window-size-width": "500",
	            "document-section-p-bold": "true",
	            "document-section-p-target-response-fill": "_",
	            "document-section-p-text-size": "15",
	            "document-style-family": "Arial",
	            "document-style-name": "targetError",
	            "document-section-p-italic": "false"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Resol el problema"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "ovacio.wav",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "style-font-family": "Arial",
	                "height": "50",
	                "p": "El reciclatge del vidre",
	                "width": "430",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "style-color-foreground": "0x80FF00",
	                "style-font-size": "20",
	                "border": "false",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "media-level": "1",
	                "style-font-family": "Arial",
	                "width": "32",
	                "style-font-size": "20",
	                "image": "calcico.gif",
	                "media-type": "RUN_EXTERNAL",
	                "media-params": "",
	                "media-file": "calc.exe",
	                "style-font-bold": "true",
	                "height": "21",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "style-color-foreground": "0x80FF00",
	                "border": "true"
	            }
	        }],
	        "celllist": []
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "document-section-p-background": "0x004080",
	            "settings-container-counters-score": "true",
	            "settings-window-size-height": "340",
	            "document-style-tabWidth": "16",
	            "document-section-p-text-background": "0x004080",
	            "document-style-bold": "true",
	            "type": "identifyWords",
	            "document-style-background": "0xFF0000",
	            "document-style-target": "true",
	            "document-section-p-text-foreground": "0xFFFF00",
	            "document-style-foreground": "0xFFFFFF",
	            "document-section-p-text-italic": "false",
	            "checkButton": "Ok?",
	            "document-style-base": "target",
	            "document-section-p-text-bold": "true",
	            "document-section-p-foreground": "0xFFFF00",
	            "document-section-p-text-family": "Arial",
	            "document-section-p-size": "16",
	            "name": "text2.txa",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "document-section-p-family": "Arial",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF",
	            "document-style-size": "16",
	            "text": "d\u0027energia",
	            "document-style-italic": "false",
	            "classe": "@text.Identify",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "settings-window-size-width": "560",
	            "document-section-p-bold": "true",
	            "target": "d\u0027estalvi",
	            "document-section-p-text-size": "16",
	            "document-style-family": "Arial",
	            "document-style-name": "targetError",
	            "document-section-p-italic": "false"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Clica tots els noms del text"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "palmes.wav",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "style-font-family": "Arial",
	                "height": "60",
	                "p": "Estalviar energia i aigua",
	                "width": "550",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "style-color-foreground": "0x80FF00",
	                "style-font-size": "20",
	                "border": "false",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": []
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "classe": "@associations.SimpleAssociation",
	            "scramble-primary": "true",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "partit1.ass",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "scramble-secondary": "true",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Relaciona cada fragment amb la seva partitura"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "aquester.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "4",
	                "cols": "1",
	                "style-font-family": "Arial",
	                "shaper-cols": "1",
	                "cellHeight": "40.0",
	                "style-font-size": "18",
	                "style-font-bold": "true",
	                "cellWidth": "60.0",
	                "rows": "4",
	                "id": "primary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "media-level": "1",
	                    "media-from": "1",
	                    "media-type": "PLAY_AUDIO",
	                    "media-file": "aquester.wav",
	                    "media-to": "3340"
	                }
	            }, {
	                "atributs": {
	                    "media-level": "1",
	                    "media-from": "3341",
	                    "media-type": "PLAY_AUDIO",
	                    "media-file": "aquester.wav",
	                    "media-to": "7050"
	                }
	            }, {
	                "atributs": {
	                    "media-level": "1",
	                    "media-from": "7051",
	                    "media-type": "PLAY_AUDIO",
	                    "media-file": "aquester.wav",
	                    "media-to": "10935"
	                }
	            }, {
	                "atributs": {
	                    "media-file": "aquester.wav",
	                    "media-level": "1",
	                    "media-from": "10936",
	                    "media-type": "PLAY_AUDIO"
	                }
	            }]
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "shaper-rows": "4",
	                "cols": "1",
	                "style-font-family": "Arial",
	                "shaper-cols": "1",
	                "cellHeight": "70.0",
	                "style-font-size": "20",
	                "style-font-bold": "true",
	                "cellWidth": "358.0",
	                "rows": "4",
	                "id": "secondary",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "style-color-foreground": "0x80FF00",
	                "border": "true"
	            },
	            "cell": [{
	                "atributs": {
	                    "image": "partitu1.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "partitu2.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "partitu3.gif"
	                }
	            }, {
	                "atributs": {
	                    "image": "partitu4.gif"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "textGrid-style-font-size": "15",
	            "textGrid-border": "true",
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "classe": "@textGrid.CrossWord",
	            "textGrid-style-color-foreground": "0xFFFF00",
	            "code": "",
	            "settings-report": "true",
	            "textGrid-style-font-bold": "true",
	            "row": "*VERD*",
	            "textGrid-cellWidth": "25.0",
	            "textGrid-style-color-background": "0x004080",
	            "settings-margin": "8",
	            "textGrid-cellHeight": "25.0",
	            "textGrid-columns": "8",
	            "name": "motscreu.crw",
	            "textGrid-style-font-family": "Arial",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "textGrid-rows": "6",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Resol els mots encreuats"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "ovacio.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "8",
	                "cols": "1",
	                "style-font-family": "Arial",
	                "shaper-cols": "1",
	                "cellHeight": "75.0",
	                "style-color-alternative": "0x8000FF",
	                "style-font-size": "16",
	                "style-font-bold": "true",
	                "cellWidth": "200.0",
	                "rows": "8",
	                "style-color-inactive": "0x8000FF",
	                "id": "acrossClues",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "border": "false"
	            },
	            "cell": [{
	                "atributs": {
	                    "id": "0",
	                    "p": "Contenidor de matèria orgànica",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "p": "Est",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "2",
	                    "p": "Contenidor d\u0027envasos",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "3",
	                    "p": "Els romans començaven a comptar així",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "4",
	                    "p": "Així començen els \"C\"ontes",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "5",
	                    "p": "Contenidor de paper i cartró",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "6",
	                    "p": "Primera lletra",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "7",
	                    "p": "Contenidor de vidre",
	                    "item": "0"
	                }
	            }]
	        }, {
	            "atributs": {
	                "style-color-inactive": "0x8000FF",
	                "id": "downClues",
	                "cols": "1",
	                "style-font-family": "Arial",
	                "cellHeight": "75.0",
	                "style-color-alternative": "0x8000FF",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "16",
	                "border": "false",
	                "style-font-bold": "true",
	                "cellWidth": "200.0",
	                "rows": "6"
	            },
	            "cell": [{
	                "atributs": {
	                    "id": "0",
	                    "p": "Lletra que fa \"M\"untanyes",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "p": "Primera lletra",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "1",
	                    "p": "lletRa RaRa",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "2",
	                    "p": "Una \"R\"",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "2",
	                    "p": "Oest",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "3",
	                    "p": "Classificar les deixalles abans de llençar-les",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "4",
	                    "p": "Oest",
	                    "item": "0"
	                }
	            }, {
	                "atributs": {
	                    "id": "4",
	                    "p": "Primera lletra",
	                    "item": "1"
	                }
	            }, {
	                "atributs": {
	                    "id": "4",
	                    "p": "Lletra amb forma D\u0027arc",
	                    "item": "2"
	                }
	            }, {
	                "atributs": {
	                    "id": "5",
	                    "p": "Lletra i número",
	                    "item": "0"
	                }
	            }]
	        }]
	    }, {
	        "atributsActivitat": {
	            "textGrid-style-font-size": "15",
	            "textGrid-border": "true",
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "classe": "@textGrid.WordSearch",
	            "clues-clue-id": "10",
	            "textGrid-style-color-foreground": "0xFFFF00",
	            "settings-helpWindow-showSolution": "true",
	            "settings-report": "true",
	            "textGrid-style-font-bold": "true",
	            "row": "ALLARREF*****",
	            "textGrid-cellWidth": "25.0",
	            "textGrid-style-color-background": "0x004080",
	            "settings-margin": "8",
	            "textGrid-cellHeight": "25.0",
	            "textGrid-columns": "10",
	            "name": "deixleri.sop",
	            "clue": "OLIS",
	            "textGrid-style-font-family": "Arial",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "textGrid-rows": "13",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Busca a la sopa coses que podem dur a la deixalleria (consulta l\u0027ajuda)"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "style-font-family": "Arial",
	                "type": "final",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": []
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "document-section-p-background": "0x004080",
	            "settings-container-counters-score": "true",
	            "settings-window-size-height": "393",
	            "document-style-tabWidth": "16",
	            "document-section-p-target-response-length": "5",
	            "document-section-p-text-background": "0x004080",
	            "document-style-bold": "true",
	            "document-style-background": "0xFF0000",
	            "document-style-target": "true",
	            "document-section-p-text-foreground": "0xFFFF00",
	            "document-style-foreground": "0xFFFFFF",
	            "document-section-p-text-italic": "false",
	            "document-style-base": "target",
	            "document-section-p-text-bold": "true",
	            "document-section-p-foreground": "0xFFFF00",
	            "document-section-p-text-family": "Arial",
	            "document-section-p-size": "15",
	            "name": "reduir.txa",
	            "document-section-p-target-response-maxLength": "5",
	            "settings-container-counters-actions": "true",
	            "evaluator-class": "@ComplexEvaluator",
	            "settings-reportActions": "false",
	            "document-section-p-family": "Arial",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF",
	            "forceOkToAdvance": "true",
	            "document-section-p-target-info-maxTime": "8",
	            "document-style-size": "15",
	            "text": ".",
	            "document-style-italic": "false",
	            "classe": "@text.FillInBlanks",
	            "answer": "aigua",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "settings-window-size-width": "560",
	            "document-section-p-bold": "true",
	            "document-section-p-target-response-fill": "_",
	            "document-section-p-text-size": "15",
	            "document-style-family": "Arial",
	            "document-style-name": "targetError",
	            "document-section-p-italic": "false"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "18",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "p": "Omple els buis amb les paraules correctes"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "18",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "palmes.wav",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "style-font-family": "Arial",
	                "height": "70",
	                "p": "REDUIR",
	                "width": "440",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "style-color-foreground": "0x80FF00",
	                "style-font-size": "20",
	                "border": "false",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xDBD979",
	                "style-font-size": "15",
	                "style-font-family": "Arial",
	                "height": "30",
	                "style-font-bold": "true",
	                "p": "Pista: no gastar diners",
	                "width": "250"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xDBD979",
	                "style-font-size": "15",
	                "style-font-family": "Arial",
	                "height": "30",
	                "style-font-bold": "true",
	                "p": "Pista: els llibres n\u0027estan fets",
	                "width": "250"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xDBD979",
	                "style-font-size": "15",
	                "style-font-family": "Arial",
	                "height": "50",
	                "style-font-bold": "true",
	                "p": "Pista: bossa d\u0027anar a comprar, moltes vegades de vímet",
	                "width": "250"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xDBD979",
	                "style-font-size": "15",
	                "style-font-family": "Arial",
	                "height": "50",
	                "style-font-bold": "true",
	                "p": "Pista: massa de farina, aigua, sal i llevat",
	                "width": "250"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xDBD979",
	                "style-font-size": "15",
	                "style-font-family": "Arial",
	                "height": "50",
	                "style-font-bold": "true",
	                "p": "Pista: que es poden tornar a carregar diverses vegades",
	                "width": "250"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xDBD979",
	                "style-font-size": "15",
	                "style-font-family": "Arial",
	                "height": "50",
	                "style-font-bold": "true",
	                "p": "Pista: que no tenen",
	                "width": "250"
	            }
	        }, {
	            "atributs": {
	                "style-font-family": "Arial",
	                "height": "30",
	                "imgAlign": "left,middle",
	                "p": "Pista: corre pels cables",
	                "width": "250",
	                "style-color-background": "0xDBD979",
	                "txtAlign": "left,middle",
	                "style-font-size": "15",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-font-family": "Arial",
	                "height": "50",
	                "imgAlign": "left,middle",
	                "p": "Pista: n\u0027hi ha de líquida, de sòlida i en forma de gas",
	                "width": "250",
	                "style-color-background": "0xDBD979",
	                "txtAlign": "left,middle",
	                "style-font-size": "15",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": []
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "document-section-p-background": "0x004080",
	            "settings-container-counters-score": "true",
	            "settings-window-size-height": "400",
	            "document-style-tabWidth": "16",
	            "document-section-p-target-response-length": "8",
	            "document-section-p-text-background": "0x004080",
	            "document-style-bold": "true",
	            "document-style-background": "0xFF0000",
	            "document-style-target": "true",
	            "document-section-p-text-foreground": "0xFFFF00",
	            "document-style-foreground": "0xFFFFFF",
	            "document-section-p-text-italic": "false",
	            "document-style-base": "target",
	            "document-section-p-text-bold": "true",
	            "document-section-p-foreground": "0xFFFF00",
	            "document-section-p-text-family": "Arial",
	            "document-section-p-size": "14",
	            "name": "reutilit.txa",
	            "document-section-p-target-response-maxLength": "8",
	            "settings-container-counters-actions": "true",
	            "evaluator-class": "@ComplexEvaluator",
	            "settings-reportActions": "false",
	            "document-section-p-family": "Arial",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF",
	            "forceOkToAdvance": "true",
	            "document-section-p-target-info-maxTime": "8",
	            "document-style-size": "14",
	            "text": "semblants.",
	            "document-style-italic": "false",
	            "classe": "@text.FillInBlanks",
	            "answer": "entitats",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "settings-window-size-width": "560",
	            "document-section-p-bold": "true",
	            "document-section-p-target-response-fill": "_",
	            "document-section-p-text-size": "14",
	            "document-style-family": "Arial",
	            "document-style-name": "targetError",
	            "document-section-p-italic": "false"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Omple els buis amb les paraules correctes"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "palmes.wav",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "style-font-family": "Arial",
	                "height": "60",
	                "p": "REUTILITZAR",
	                "width": "520",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "style-color-foreground": "0x80FF00",
	                "style-font-size": "20",
	                "border": "false",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xDBD979",
	                "style-font-size": "14",
	                "style-font-family": "Arial",
	                "height": "30",
	                "style-font-bold": "true",
	                "p": "Pista: relatiu als diners",
	                "width": "250"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xDBD979",
	                "style-font-size": "14",
	                "style-font-family": "Arial",
	                "height": "50",
	                "style-font-bold": "true",
	                "p": "Pista: en plural, allà on tenim els ulls, el nas, la boca...",
	                "width": "250"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xDBD979",
	                "style-font-size": "14",
	                "style-font-family": "Arial",
	                "height": "50",
	                "style-font-bold": "true",
	                "p": "Pista: sac, normalment de plàstic",
	                "width": "250"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xDBD979",
	                "style-font-size": "14",
	                "style-font-family": "Arial",
	                "height": "50",
	                "style-font-bold": "true",
	                "p": "Pista: part de la casa on dormim",
	                "width": "250"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xDBD979",
	                "style-font-size": "14",
	                "style-font-family": "Arial",
	                "height": "30",
	                "style-font-bold": "true",
	                "p": "Pista: aula, part de l\u0027escola",
	                "width": "250"
	            }
	        }, {
	            "atributs": {
	                "style-font-family": "Arial",
	                "height": "50",
	                "imgAlign": "left,middle",
	                "p": "Pista: el que es possa en lloc d\u0027una altre cosa",
	                "width": "250",
	                "style-color-background": "0xDBD979",
	                "txtAlign": "left,middle",
	                "style-font-size": "14",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-font-family": "Arial",
	                "height": "30",
	                "imgAlign": "left,middle",
	                "p": "Pista: en abundància, plural",
	                "width": "250",
	                "style-color-background": "0xDBD979",
	                "txtAlign": "left,middle",
	                "style-font-size": "14",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xDBD979",
	                "style-font-size": "14",
	                "style-font-family": "Arial",
	                "height": "30",
	                "style-font-bold": "true",
	                "p": "Pista: en portem als peus",
	                "width": "250"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0xDBD979",
	                "style-font-size": "14",
	                "style-font-family": "Arial",
	                "height": "50",
	                "style-font-bold": "true",
	                "p": "Pista: col·lectiu, agrupació de gent",
	                "width": "250"
	            }
	        }],
	        "celllist": []
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "document-section-p-background": "0x004080",
	            "settings-container-counters-score": "true",
	            "settings-window-size-height": "378",
	            "document-style-tabWidth": "16",
	            "document-section-p-target-response-length": "7",
	            "document-section-p-text-background": "0x004080",
	            "document-style-bold": "true",
	            "document-style-background": "0xFF0000",
	            "document-style-target": "true",
	            "document-section-p-text-foreground": "0xFFFF00",
	            "document-style-foreground": "0xFFFFFF",
	            "document-section-p-text-italic": "false",
	            "document-style-base": "target",
	            "document-section-p-text-bold": "true",
	            "document-section-p-foreground": "0xFFFF00",
	            "document-section-p-text-family": "Arial",
	            "document-section-p-size": "12",
	            "name": "reciclar.txa",
	            "document-section-p-target-response-maxLength": "7",
	            "settings-container-counters-actions": "true",
	            "evaluator-class": "@ComplexEvaluator",
	            "settings-reportActions": "false",
	            "document-section-p-family": "Arial",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF",
	            "forceOkToAdvance": "true",
	            "document-style-size": "12",
	            "text": "?",
	            "document-style-italic": "false",
	            "classe": "@text.FillInBlanks",
	            "answer": "energia",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "settings-window-size-width": "560",
	            "document-section-p-bold": "true",
	            "document-section-p-target-response-fill": "_",
	            "document-section-p-text-size": "12",
	            "document-style-family": "Arial",
	            "document-style-name": "targetError",
	            "document-section-p-italic": "false"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Omple els buis amb les paraules correctes"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "palmes.wav",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "style-font-family": "Arial",
	                "height": "70",
	                "p": "RECICLAR",
	                "width": "440",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "style-color-foreground": "0x80FF00",
	                "style-font-size": "20",
	                "border": "false",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": []
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "settings-container-counters-score": "true",
	            "layout-position": "AB",
	            "classe": "@puzzles.HolePuzzle",
	            "settings-helpWindow-showSolution": "true",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "scramble-times": "31",
	            "name": "totsco2.puz",
	            "settings-container-counters-actions": "true",
	            "settings-reportActions": "false",
	            "settings-container-counters-time": "true",
	            "settings-container-bgColor": "0x8000FF"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Resol el puzzle"
	            }
	        }, {
	            "atributs": {
	                "media-level": "2",
	                "style-font-family": "Arial",
	                "style-color-background": "0xFFFF66",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "image": "moltbe.gif",
	                "media-type": "PLAY_AUDIO",
	                "type": "final",
	                "media-file": "ovacio.wav",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": [{
	            "atributs": {
	                "shaper-rows": "3",
	                "cols": "4",
	                "style-font-family": "Arial",
	                "shaper-cols": "4",
	                "shaper-class": "@Rectangular",
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "15",
	                "image": "totscont.gif",
	                "border": "true",
	                "style-font-bold": "true",
	                "rows": "3"
	            },
	            "cell": []
	        }]
	    }, {
	        "atributsActivitat": {
	            "settings-window-border": "true",
	            "settings-window-bgColor": "0x8000FF",
	            "document-section-p-background": "0x004080",
	            "settings-container-counters-score": "false",
	            "settings-window-size-height": "340",
	            "document-style-tabWidth": "8",
	            "document-section-p-text-background": "0x004080",
	            "document-style-bold": "true",
	            "document-style-background": "0xFF0000",
	            "document-style-target": "true",
	            "document-section-p-text-foreground": "0xFFFF00",
	            "document-style-foreground": "0xFFFFFF",
	            "document-section-p-text-italic": "false",
	            "document-style-base": "target",
	            "document-section-p-text-bold": "true",
	            "document-section-p-foreground": "0xFFFF00",
	            "document-section-p-text-family": "Arial",
	            "document-section-p-size": "15",
	            "name": "internet.txa",
	            "settings-container-counters-actions": "false",
	            "evaluator-class": "@ComplexEvaluator",
	            "settings-reportActions": "false",
	            "document-section-p-family": "Arial",
	            "settings-container-counters-time": "false",
	            "settings-container-bgColor": "0x8000FF",
	            "document-style-size": "15",
	            "text": "http://www.aqualia.es/infantil/casa.htm",
	            "document-style-italic": "false",
	            "classe": "@text.FillInBlanks",
	            "code": "",
	            "settings-report": "true",
	            "settings-margin": "8",
	            "settings-window-size-width": "560",
	            "document-section-p-bold": "true",
	            "document-section-p-text-size": "15",
	            "document-style-family": "Arial",
	            "document-style-name": "targetError",
	            "document-section-p-italic": "false"
	        },
	        "cell": [{
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "style-font-family": "Arial",
	                "type": "initial",
	                "style-font-bold": "true",
	                "p": "Si tens conexió a Internet, prova aquestes adreces... Clica l\u0027icona del teu navegador"
	            }
	        }, {
	            "atributs": {
	                "style-color-background": "0x004080",
	                "style-color-foreground": "0xFFFF00",
	                "style-font-size": "20",
	                "style-font-family": "Arial",
	                "type": "final",
	                "style-font-bold": "true"
	            }
	        }, {
	            "atributs": {
	                "style-shadow": "true",
	                "style-font-family": "Arial",
	                "height": "50",
	                "p": "Per saber més... l\u0027Internet!",
	                "width": "480",
	                "style-color-background": "0x004080",
	                "style-font-italic": "true",
	                "style-color-foreground": "0x80FF00",
	                "style-font-size": "20",
	                "border": "false",
	                "style-font-bold": "true"
	            }
	        }],
	        "celllist": []
	    }]
	};