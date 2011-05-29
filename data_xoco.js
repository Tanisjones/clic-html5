var maxActivitats = 16;
var dadesActivitat = {
    "settings": {
        "atributsActivitat": {
            "skin-file": "@orange.xml",
            "organization-state": "Catalunya",
            "title": "La xocolata",
            "descriptors-level": "Infantil (3-6)",
            "organization-name": "CEIP La Florida",
            "language": "català",
            "organization-mail": "a8028436@centres.xtec.es",
            "author-name": "Maite Álvarez Leo",
            "descriptors-area": "Diversos",
            "organization-city": "Santa Perpètua de Mogoda",
            "organization-url": "http://www.xtec.es/centres/a8028436",
            "author-mail": "malva232@xtec.cat"
        },

        "descripcio": ["Projecte d\u0027activitats per a educació infantil sobre la xocolata. A partir 		d\u0027aquest centre d\u0027interès trobem activitats de matemàtiques, com ordenar 		sèries; 	de llegües, com ordenar lletres, relacionar sons amb paraules escrites, etc..."],
        "index": 1
    },
    "activitats": [{
        "atributsActivitat": {
            "settings-window-border": "true",
            "settings-window-bgColor": "0xFFFFFF",
            "settings-container-gradient-dest": "0xFFFFFF",
            "settings-container-counters-score": "true",
            "settings-container-gradient-angle": "108",
            "class": "@panels.InformationScreen",
            "code": "",
            "settings-report": "false",
            "settings-margin": "8",
            "settings-container-gradient-source": "0x993300",
            "name": "inici",
            "settings-container-counters-actions": "true",
            "settings-container-counters-time": "true",
            "settings-container-bgColor": "0xC0C0C0"
        },

        "cell": [{
            "atributs": {
                "media-level": "1",
                "style-font-family": "Astigma",
                "p": "LA XOCOLATA",
                "style-color-background": "0x993300",
                "style-color-foreground": "0xFFFFFF",
                "style-font-size": "50",
                "media-type": "PLAY_AUDIO",
                "type": "initial",
                "media-file": "la xocolata.mp3"
            }
        }],

        "celllist": [{
            "atributs": {
                "shaper-rows": "1",
                "cols": "1",
                "shaper-cols": "1",
                "shaper-class": "@Rectangular",
                "cellHeight": "312.0",
                "border": "true",
                "cellWidth": "336.0",
                "rows": "1"
            },
            "cell": [{
                "atributs": {
                    "image": "FOTO CACAU copia [640x480].jpg"
                }
            }]
        }]
    }, {
        "atributsActivitat": {
            "settings-window-border": "true",
            "settings-window-bgColor": "0xFF0033",
            "settings-container-gradient-dest": "0xFF9933",
            "settings-container-counters-score": "true",
            "layout-position": "AUB",
            "settings-container-gradient-angle": "110",
            "settings-skin-file": "@orange.xml",
            "class": "@memory.MemoryGame",
            "code": "",
            "settings-report": "true",
            "settings-margin": "8",
            "scramble-times": "31",
            "settings-container-gradient-source": "0xFF6600",
            "name": "memori 1",
            "settings-container-counters-actions": "true",
            "settings-reportActions": "false",
            "settings-container-counters-time": "true",
            "settings-container-bgColor": "0xC0C0C0"
        },

        "cell": [{
            "atributs": {
                "style-color-background": "0x00CC33",
                "style-font-size": "48",
                "style-font-family": "Arial Black",
                "type": "initial",
                "p": "BUSCA LES PARELLES"
            }
        }, {
            "atributs": {
                "media-level": "1",
                "style-font-family": "Arial Black",
                "p": "GENIAL!",
                "style-color-background": "0x33FF00",
                "style-font-size": "48",
                "media-type": "PLAY_AUDIO",
                "type": "final",
                "media-file": "genial.mp3"
            }
        }],

        "celllist": [{
            "atributs": {
                "style-color-inactive": "0xFF6666",
                "id": "primary",
                "shaper-rows": "1",
                "cols": "6",
                "shaper-cols": "6",
                "shaper-class": "@Rectangular",
                "cellHeight": "139.0",
                "style-color-background": "0xFF0000",
                "style-borderStroke": "0.7",
                "border": "true",
                "style-markerStroke": "5.0",
                "cellWidth": "128.0",
                "rows": "1"
            },
            "cell": [{
                "atributs": {
                    "image": "bombons [320x200].jpg"
                }
            }, {
                "atributs": {
                    "image": "IMG_8303 [320x200].JPG"
                }
            }, {
                "atributs": {
                    "image": "tarta xoco [320x200].jpg"
                }
            }, {
                "atributs": {
                    "image": "IMG_8385 [320x200].JPG"
                }
            }, {
                "atributs": {
                    "image": "IMG_8360 [320x200].JPG"
                }
            }, {
                "atributs": {
                    "image": "xocolate [320x200].jpg"
                }
            }]
        }]
    },

    {
        "atributsActivitat": {
            "settings-window-border": "true",
            "settings-window-bgColor": "0x0000FF",
            "settings-container-gradient-dest": "0x6666FF",
            "settings-container-counters-score": "true",
            "layout-position": "AB",
            "settings-container-gradient-angle": "110",
            "settings-skin-file": "@orange.xml",
            "class": "@puzzles.DoublePuzzle",
            "settings-dragCells": "true",
            "code": "",
            "settings-report": "true",
            "settings-margin": "8",
            "scramble-times": "31",
            "settings-container-gradient-source": "0x0000CC",
            "name": "puzzle campana",
            "settings-container-counters-actions": "true",
            "settings-reportActions": "false",
            "settings-container-counters-time": "true",
            "settings-container-bgColor": "0xC0C0C0"
        },
        "cell": [{
            "atributs": {
                "media-level": "1",
                "style-font-family": "Arial Black",
                "p": "QUÈ ÉS?",
                "style-color-background": "0x6633FF",
                "style-font-size": "48",
                "media-type": "PLAY_AUDIO",
                "type": "initial",
                "media-file": "que es.mp3"
            }
        }, {
            "atributs": {
                "media-level": "1",
                "style-font-family": "Arial Black",
                "p": "UNA CAMPANA DE XOCOLATA!!",
                "style-color-background": "0x0099FF",
                "style-font-size": "48",
                "media-type": "PLAY_AUDIO",
                "type": "final",
                "media-file": "una campana de xocolata.mp3"
            }
        }],
        "celllist": [{
            "atributs": {
                "style-color-inactive": "0x66CCFF",
                "shaper-rows": "3",
                "style-color-border": "0xFFFF00",
                "cols": "3",
                "shaper-cols": "3",
                "shaper-class": "@ClassicJigSaw",
                "image": "IMG_8303 [640x480].JPG",
                "style-borderStroke": "0.7",
                "border": "true",
                "style-markerStroke": "2.7",
                "rows": "3"
            },
            "cell": []
        }]
    },


    {
        "atributsActivitat": {
            "settings-window-border": "true",
            "settings-window-bgColor": "0xFFFF66",
            "settings-container-gradient-dest": "0xFFFF00",
            "settings-container-counters-score": "true",
            "layout-position": "AUB",
            "scramble-primary": "true",
            "settings-container-gradient-angle": "215",
            "class": "@associations.SimpleAssociation",
            "code": "",
            "settings-report": "true",
            "settings-margin": "8",
            "scramble-times": "31",
            "settings-container-gradient-source": "0xFFFFFF",
            "name": "associació 1",
            "settings-container-counters-actions": "true",
            "settings-reportActions": "false",
            "scramble-secondary": "true",
            "settings-container-counters-time": "true",
            "settings-container-bgColor": "0xC0C0C0"
        },
        "cell": [{
            "atributs": {
                "style-color-background": "0xFF6600",
                "style-font-size": "28",
                "style-font-family": "Arial Black",
                "type": "initial",
                "p": "RELACIONA"
            }
        }, {
            "atributs": {
                "media-level": "1",
                "style-font-family": "Arial Black",
                "p": "GENIAL!",
                "style-color-background": "0xFFFF00",
                "style-font-size": "28",
                "media-type": "PLAY_AUDIO",
                "type": "final",
                "media-file": "genial.mp3"
            }
        }],
        "celllist": [{
            "atributs": {
                "id": "primary",
                "shaper-rows": "1",
                "cols": "3",
                "shaper-cols": "3",
                "shaper-class": "@Rectangular",
                "cellHeight": "141.0",
                "border": "true",
                "cellWidth": "169.0",
                "rows": "1"
            },
            "cell": [{
                "atributs": {
                    "style-color-inactive": "0xFF99CC",
                    "media-level": "1",
                    "style-font-family": "Arial Black",
                    "style-color-background": "0xFF33CC",
                    "style-font-size": "28",
                    "image": "altofa2.gif",
                    "media-type": "PLAY_AUDIO",
                    "style-borderStroke": "0.7",
                    "media-file": "xocolata amb llet r.mp3",
                    "style-markerStroke": "5.0"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0x99FF99",
                    "media-level": "1",
                    "style-font-family": "Arial Black",
                    "style-color-background": "0x66FF00",
                    "style-font-size": "28",
                    "image": "altofa2.gif",
                    "media-type": "PLAY_AUDIO",
                    "style-borderStroke": "0.7",
                    "media-file": "xocolata negra e.mp3",
                    "style-markerStroke": "5.0"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0x66CCFF",
                    "media-level": "1",
                    "style-font-family": "Arial Black",
                    "style-color-background": "0x0066FF",
                    "style-font-size": "28",
                    "image": "altofa2.gif",
                    "media-type": "PLAY_AUDIO",
                    "style-borderStroke": "0.7",
                    "media-file": "xocolata blanca r.mp3",
                    "style-markerStroke": "5.0"
                }
            }]
        }, {
            "atributs": {
                "id": "secondary",
                "shaper-rows": "1",
                "cols": "3",
                "shaper-cols": "3",
                "shaper-class": "@Rectangular",
                "cellHeight": "141.0",
                "border": "true",
                "cellWidth": "169.0",
                "rows": "1"
            },
            "cell": [{
                "atributs": {
                    "style-color-inactive": "0xFF99CC",
                    "style-color-background": "0xFF33CC",
                    "style-font-size": "28",
                    "image": "IMG_8384 [320x200].JPG",
                    "style-font-family": "Arial Black",
                    "style-borderStroke": "0.7",
                    "style-markerStroke": "5.0"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0x99FF99",
                    "style-color-background": "0x66FF00",
                    "style-font-size": "28",
                    "image": "IMG_8363 [320x200].JPG",
                    "style-font-family": "Arial Black",
                    "style-borderStroke": "0.7",
                    "style-markerStroke": "5.0"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0x66CCFF",
                    "style-color-background": "0x0066FF",
                    "style-font-size": "28",
                    "image": "IMG_8360 [320x200].JPG",
                    "style-font-family": "Arial Black",
                    "style-borderStroke": "0.7",
                    "style-markerStroke": "5.0"
                }
            }]
        }]
    },


    {
        "atributsActivitat": {
            "settings-window-border": "true",
            "settings-window-bgColor": "0xFF9900",
            "settings-container-gradient-dest": "0xFFFF00",
            "settings-container-counters-score": "true",
            "layout-position": "AUB",
            "settings-container-gradient-angle": "250",
            "settings-skin-file": "@orange.xml",
            "class": "@puzzles.DoublePuzzle",
            "settings-dragCells": "true",
            "code": "",
            "settings-report": "true",
            "settings-margin": "8",
            "scramble-times": "31",
            "settings-container-gradient-source": "0xFFFFFF",
            "name": "sèrie 2",
            "settings-container-counters-actions": "true",
            "settings-reportActions": "false",
            "settings-container-counters-time": "true",
            "settings-container-bgColor": "0xC0C0C0"
        },
        "cell": [{
            "atributs": {
                "style-color-background": "0xFFFFFF",
                "type": "initial",
                "image": "receptes i tast/braç de galetes/serie 2 [320x200].jpg"
            }
        }, {
            "atributs": {
                "media-level": "1",
                "style-font-family": "Arial Black",
                "p": "GENIAL!",
                "style-color-background": "0x000000",
                "style-color-foreground": "0xFFFF00",
                "style-font-size": "28",
                "media-type": "PLAY_AUDIO",
                "type": "final",
                "media-file": "genial.mp3"
            }
        }],
        "celllist": [{
            "atributs": {
                "style-color-inactive": "0xFFFFFF",
                "shaper-rows": "1",
                "cols": "10",
                "shaper-cols": "10",
                "shaper-class": "@Rectangular",
                "cellHeight": "86.0",
                "style-color-background": "0xFFFFFF",
                "border": "true",
                "cellWidth": "88.0",
                "rows": "1"
            },
            "cell": [{
                "atributs": {
                    "style-color-inactive": "0xFFFFFF",
                    "style-color-background": "0x666666",
                    "style-color-foreground": "0xFFFF00",
                    "style-font-size": "28",
                    "image": "azul [320x200].jpg",
                    "style-color-border": "0xFF3300",
                    "style-font-family": "Arial Black"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFFFFFF",
                    "style-color-background": "0x666666",
                    "style-color-foreground": "0xFFFF00",
                    "style-font-size": "28",
                    "image": "amarillo [320x200].jpg",
                    "style-color-border": "0x66CC00",
                    "style-font-family": "Arial Black"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFFFFFF",
                    "style-color-background": "0x666666",
                    "style-color-foreground": "0xFFFF00",
                    "style-font-size": "28",
                    "image": "azul [320x200].jpg",
                    "style-color-border": "0x3300CC",
                    "style-font-family": "Arial Black"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFFFFFF",
                    "style-color-background": "0x666666",
                    "style-color-foreground": "0xFFFF00",
                    "style-font-size": "28",
                    "image": "amarillo[320x200].jpg",
                    "style-color-border": "0xFF0099",
                    "style-font-family": "Arial Black"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFFFFFF",
                    "style-color-background": "0x666666",
                    "style-color-foreground": "0xFFFF00",
                    "style-font-size": "28",
                    "image": "azul [320x200].jpg",
                    "style-color-border": "0xFFFF00",
                    "style-font-family": "Arial Black"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFFFFFF",
                    "style-color-background": "0x666666",
                    "style-color-foreground": "0xFFFF00",
                    "style-font-size": "28",
                    "image": "amarillo [320x200].jpg",
                    "style-color-border": "0xFF0000",
                    "style-font-family": "Arial Black"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFFFFFF",
                    "style-color-background": "0x3366FF",
                    "style-color-foreground": "0xFFFF00",
                    "style-font-size": "28",
                    "image": "azul [320x200].jpg",
                    "style-font-family": "Arial Black"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFFFFFF",
                    "style-color-background": "0x666666",
                    "style-color-foreground": "0xFFFF00",
                    "style-font-size": "28",
                    "image": "amarillo [320x200].jpg",
                    "style-color-border": "0x006666",
                    "style-font-family": "Arial Black"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFFFFFF",
                    "style-color-background": "0x666666",
                    "style-color-foreground": "0xFFFF00",
                    "style-font-size": "28",
                    "image": "azul [320x200].jpg",
                    "style-color-border": "0xFF6600",
                    "style-font-family": "Arial Black"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFFFFFF",
                    "style-color-background": "0x666666",
                    "style-color-foreground": "0xFFFF00",
                    "style-font-size": "28",
                    "image": "amarillo [320x200].jpg",
                    "style-color-border": "0xCC0099",
                    "style-font-family": "Arial Black"
                }
            }]
        }]
    },


    {
        "atributsActivitat": {
            "settings-window-border": "true",
            "settings-window-bgColor": "0xFF3300",
            "settings-container-gradient-dest": "0xFF3333",
            "settings-container-counters-score": "true",
            "layout-position": "AUB",
            "settings-container-gradient-angle": "215",
            "settings-skin-file": "@orange.xml",
            "class": "@puzzles.DoublePuzzle",
            "settings-dragCells": "true",
            "code": "",
            "settings-report": "true",
            "settings-margin": "8",
            "scramble-times": "31",
            "settings-window-transparent": "true",
            "settings-container-gradient-source": "0xFFFF33",
            "name": "xocolata",
            "settings-container-counters-actions": "true",
            "settings-reportActions": "false",
            "settings-container-counters-time": "true",
            "settings-container-bgColor": "0xC0C0C0"
        },
        "cell": [{
            "atributs": {
                "media-level": "1",
                "style-font-family": "Arial Black",
                "imgAlign": "right,middle",
                "p": "XOCOLATA",
                "avoidOverlapping": "true",
                "style-color-background": "0xFFFF33",
                "style-font-size": "28",
                "image": "xocolate [320x200].jpg",
                "media-type": "PLAY_AUDIO",
                "type": "initial",
                "media-file": "xocolata.mp3"
            }
        }, {
            "atributs": {
                "media-level": "1",
                "style-font-family": "Arial Black",
                "imgAlign": "right,middle",
                "p": "OHH QUE BÉ!",
                "avoidOverlapping": "true",
                "style-color-background": "0xFFFF66",
                "style-font-size": "28",
                "media-type": "PLAY_AUDIO",
                "style-borderStroke": "0.7",
                "type": "final",
                "media-file": "ohh q be.mp3",
                "style-markerStroke": "5.0"
            }
        }],
        "celllist": [{
            "atributs": {
                "style-color-inactive": "0xFFFF66",
                "shaper-rows": "1",
                "cols": "8",
                "shaper-cols": "8",
                "shaper-class": "@Rectangular",
                "cellHeight": "117.0",
                "border": "true",
                "cellWidth": "99.0",
                "rows": "1"
            },
            "cell": [{
                "atributs": {
                    "style-color-background": "0x996600",
                    "style-font-size": "72",
                    "style-font-family": "Arial Black",
                    "style-borderStroke": "0.7",
                    "style-markerStroke": "5.0",
                    "p": "X"
                }
            }, {
                "atributs": {
                    "style-color-background": "0x996600",
                    "style-font-size": "72",
                    "style-font-family": "Arial Black",
                    "style-borderStroke": "0.7",
                    "style-markerStroke": "5.0",
                    "p": "O"
                }
            }, {
                "atributs": {
                    "style-color-background": "0x996600",
                    "style-font-size": "72",
                    "style-font-family": "Arial Black",
                    "style-borderStroke": "0.7",
                    "style-markerStroke": "5.0",
                    "p": "C"
                }
            }, {
                "atributs": {
                    "style-color-background": "0x996600",
                    "style-font-size": "72",
                    "style-font-family": "Arial Black",
                    "style-borderStroke": "0.7",
                    "style-markerStroke": "5.0",
                    "p": "O"
                }
            }, {
                "atributs": {
                    "style-color-background": "0x996600",
                    "style-font-size": "72",
                    "style-font-family": "Arial Black",
                    "style-borderStroke": "0.7",
                    "style-markerStroke": "5.0",
                    "p": "L"
                }
            }, {
                "atributs": {
                    "style-color-background": "0x996600",
                    "style-font-size": "72",
                    "style-font-family": "Arial Black",
                    "style-borderStroke": "0.7",
                    "style-markerStroke": "5.0",
                    "p": "A"
                }
            }, {
                "atributs": {
                    "style-color-background": "0x996600",
                    "style-font-size": "72",
                    "style-font-family": "Arial Black",
                    "style-borderStroke": "0.7",
                    "style-markerStroke": "5.0",
                    "p": "T"
                }
            }, {
                "atributs": {
                    "style-color-background": "0x996600",
                    "style-font-size": "72",
                    "style-font-family": "Arial Black",
                    "style-borderStroke": "0.7",
                    "style-markerStroke": "5.0",
                    "p": "A"
                }
            }]
        }]
    },


    {
        "atributsActivitat": {
            "settings-window-border": "true",
            "settings-window-bgColor": "0x33FF33",
            "settings-container-gradient-dest": "0xFF9933",
            "settings-container-counters-score": "true",
            "layout-position": "AUB",
            "settings-container-gradient-angle": "110",
            "settings-skin-file": "@orange.xml",
            "class": "@memory.MemoryGame",
            "code": "",
            "settings-report": "true",
            "settings-margin": "8",
            "scramble-times": "31",
            "settings-container-gradient-source": "0xFF6600",
            "name": "memori 2",
            "settings-container-counters-actions": "true",
            "settings-reportActions": "false",
            "settings-container-counters-time": "true",
            "settings-container-bgColor": "0xC0C0C0"
        },
        "cell": [{
            "atributs": {
                "style-color-background": "0x00CC33",
                "style-font-size": "48",
                "style-font-family": "Arial Black",
                "type": "initial",
                "p": "BUSCA LES PARELLES"
            }
        }, {
            "atributs": {
                "media-level": "1",
                "style-font-family": "Arial Black",
                "p": "MOLT BÉ!!",
                "style-color-background": "0x33FF00",
                "style-font-size": "48",
                "media-type": "PLAY_AUDIO",
                "type": "final",
                "media-file": "moltbe.mp3"
            }
        }],
        "celllist": [{
            "atributs": {
                "style-color-inactive": "0x66FF66",
                "id": "primary",
                "shaper-rows": "1",
                "cols": "5",
                "shaper-cols": "5",
                "shaper-class": "@Rectangular",
                "cellHeight": "139.0",
                "style-color-background": "0x009933",
                "style-borderStroke": "0.7",
                "border": "true",
                "style-markerStroke": "2.7",
                "cellWidth": "128.0",
                "rows": "1"
            },
            "cell": [{
                "atributs": {
                    "image": "cacao02 [320x200].gif"
                }
            }, {
                "atributs": {
                    "image": "fruit [320x200].jpg"
                }
            }, {
                "atributs": {
                    "image": "plantacacao [320x200].jpg"
                }
            }, {
                "atributs": {
                    "image": "cacao [320x200].jpg"
                }
            }, {
                "atributs": {
                    "image": "pasaje_cacao1 [320x200].jpg"
                }
            }]
        }]
    },


    {
        "atributsActivitat": {
            "settings-window-border": "true",
            "settings-window-bgColor": "0xFF3300",
            "settings-container-gradient-dest": "0xFF3333",
            "settings-container-counters-score": "true",
            "layout-position": "AUB",
            "settings-container-gradient-angle": "215",
            "settings-skin-file": "@orange.xml",
            "class": "@puzzles.DoublePuzzle",
            "settings-dragCells": "true",
            "code": "",
            "settings-report": "true",
            "settings-margin": "8",
            "scramble-times": "31",
            "settings-window-transparent": "true",
            "settings-container-gradient-source": "0xFFFF33",
            "name": "cacau",
            "settings-container-counters-actions": "true",
            "settings-reportActions": "false",
            "settings-container-counters-time": "true",
            "settings-container-bgColor": "0xC0C0C0"
        },
        "cell": [{
            "atributs": {
                "media-level": "1",
                "style-font-family": "Arial Black",
                "p": "CACAU",
                "style-color-background": "0xFFFF00",
                "style-font-size": "28",
                "media-type": "PLAY_AUDIO",
                "type": "initial",
                "media-file": "cacau.mp3"
            }
        }, {
            "atributs": {
                "media-level": "1",
                "style-font-family": "Arial Black",
                "p": "SUPER BÉ!!",
                "style-color-background": "0xFFFF66",
                "style-font-size": "28",
                "media-type": "PLAY_AUDIO",
                "type": "final",
                "media-file": "super be.mp3"
            }
        }],
        "celllist": [{
            "atributs": {
                "style-color-inactive": "0xFF6600",
                "shaper-rows": "1",
                "cols": "5",
                "style-font-family": "Arial Black",
                "shaper-cols": "5",
                "shaper-class": "@Rectangular",
                "cellHeight": "117.0",
                "style-color-background": "0xFF3300",
                "style-font-size": "72",
                "border": "true",
                "cellWidth": "99.0",
                "rows": "1"
            },
            "cell": [{
                "atributs": {
                    "style-color-inactive": "0xFF6600",
                    "style-color-background": "0xFF3300",
                    "style-font-size": "72",
                    "style-font-family": "Arial Black",
                    "style-borderStroke": "0.7",
                    "style-markerStroke": "5.0",
                    "p": "C"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFF6600",
                    "style-color-background": "0xFF3300",
                    "style-font-size": "72",
                    "style-font-family": "Arial Black",
                    "style-borderStroke": "0.7",
                    "style-markerStroke": "5.0",
                    "p": "A"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFF6600",
                    "style-color-background": "0xFF3300",
                    "style-font-size": "72",
                    "style-font-family": "Arial Black",
                    "style-borderStroke": "0.7",
                    "style-markerStroke": "5.0",
                    "p": "C"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFF6600",
                    "style-color-background": "0xFF3300",
                    "style-font-size": "72",
                    "style-font-family": "Arial Black",
                    "style-borderStroke": "0.7",
                    "style-markerStroke": "5.0",
                    "p": "A"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFF6600",
                    "style-color-background": "0xFF3300",
                    "style-font-size": "72",
                    "style-font-family": "Arial Black",
                    "style-borderStroke": "0.7",
                    "style-markerStroke": "5.0",
                    "p": "U"
                }
            }]
        }]
    },


    {
        "atributsActivitat": {
            "settings-window-border": "true",
            "settings-window-bgColor": "0x0000FF",
            "settings-container-gradient-dest": "0x6666FF",
            "settings-container-counters-score": "true",
            "layout-position": "AB",
            "settings-container-gradient-angle": "110",
            "settings-skin-file": "@orange.xml",
            "class": "@puzzles.DoublePuzzle",
            "settings-dragCells": "true",
            "code": "",
            "settings-report": "true",
            "settings-margin": "8",
            "scramble-times": "31",
            "settings-container-gradient-source": "0x0000CC",
            "name": "puzzle  lacasitos",
            "settings-container-counters-actions": "true",
            "settings-reportActions": "false",
            "settings-container-counters-time": "true",
            "settings-container-bgColor": "0xC0C0C0"
        },
        "cell": [{
            "atributs": {
                "media-level": "1",
                "style-font-family": "Arial Black",
                "p": "QUÈ ÉS?",
                "style-color-background": "0x6633FF",
                "style-font-size": "48",
                "media-type": "PLAY_AUDIO",
                "type": "initial",
                "media-file": "que es.mp3"
            }
        }, {
            "atributs": {
                "media-level": "1",
                "style-font-family": "Arial Black",
                "p": "LACASITOS",
                "style-color-background": "0x0099FF",
                "style-font-size": "36",
                "media-type": "PLAY_AUDIO",
                "type": "final",
                "media-file": "lacasitos.mp3"
            }
        }],
        "celllist": [{
            "atributs": {
                "style-color-inactive": "0xFF99FF",
                "shaper-rows": "3",
                "style-color-border": "0xFF3399",
                "cols": "3",
                "shaper-cols": "3",
                "shaper-class": "@ClassicJigSaw",
                "image": "IMG_8385 [640x480].JPG",
                "style-borderStroke": "1.4",
                "border": "true",
                "style-markerStroke": "2.7",
                "rows": "3"
            },
            "cell": []
        }]
    },


    {
        "atributsActivitat": {
            "settings-window-border": "true",
            "settings-window-bgColor": "0xC0C0C0",
            "settings-container-gradient-dest": "0xFF3333",
            "settings-container-counters-score": "true",
            "layout-position": "AUB",
            "settings-container-gradient-angle": "215",
            "settings-skin-file": "@orange.xml",
            "class": "@puzzles.DoublePuzzle",
            "settings-dragCells": "true",
            "code": "",
            "settings-report": "true",
            "settings-margin": "8",
            "scramble-times": "31",
            "settings-window-transparent": "true",
            "settings-container-gradient-source": "0xFFFF33",
            "name": "CACAUER",
            "settings-container-counters-actions": "true",
            "settings-reportActions": "false",
            "settings-container-counters-time": "true",
            "settings-container-bgColor": "0xC0C0C0"
        },
        "cell": [{
            "atributs": {
                "media-level": "1",
                "style-font-family": "Arial Black",
                "imgAlign": "right,middle",
                "p": "CACAUER",
                "avoidOverlapping": "true",
                "style-color-background": "0xFFFF33",
                "style-font-size": "28",
                "image": "plantacacao [320x200].jpg",
                "media-type": "PLAY_AUDIO",
                "type": "initial",
                "media-file": "cacauer.mp3"
            }
        }, {
            "atributs": {
                "media-level": "1",
                "style-font-family": "Arial Black",
                "p": "MOLT BÉ!!",
                "style-color-background": "0xFFFF66",
                "style-font-size": "28",
                "media-type": "PLAY_AUDIO",
                "type": "final",
                "media-file": "moltbe.mp3"
            }
        }],
        "celllist": [{
            "atributs": {
                "style-color-inactive": "0xFF3333",
                "shaper-rows": "1",
                "cols": "7",
                "shaper-cols": "7",
                "shaper-class": "@Rectangular",
                "cellHeight": "117.0",
                "style-color-background": "0xFF0000",
                "border": "true",
                "cellWidth": "99.0",
                "rows": "1"
            },
            "cell": [{
                "atributs": {
                    "style-color-inactive": "0xFF3333",
                    "style-color-background": "0xFF0000",
                    "style-font-size": "72",
                    "style-font-family": "Arial Black",
                    "p": "C"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFF3333",
                    "style-color-background": "0xFF0000",
                    "style-font-size": "72",
                    "style-font-family": "Arial Black",
                    "p": "A"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFF3333",
                    "style-color-background": "0xFF0000",
                    "style-font-size": "72",
                    "style-font-family": "Arial Black",
                    "p": "C"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFF3333",
                    "style-color-background": "0xFF0000",
                    "style-font-size": "72",
                    "style-font-family": "Arial Black",
                    "p": "A"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFF3333",
                    "style-color-background": "0xFF0000",
                    "style-font-size": "72",
                    "style-font-family": "Arial Black",
                    "p": "U"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFF3333",
                    "style-color-background": "0xFF0000",
                    "style-font-size": "72",
                    "style-font-family": "Arial Black",
                    "p": "E"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFF3333",
                    "style-color-background": "0xFF0000",
                    "style-font-size": "72",
                    "style-font-family": "Arial Black",
                    "p": "R"
                }
            }]
        }]
    },


    {
        "atributsActivitat": {
            "settings-window-border": "true",
            "settings-window-bgColor": "0xFFFF66",
            "settings-container-gradient-dest": "0xFFFF00",
            "settings-container-counters-score": "true",
            "layout-position": "AUB",
            "scramble-primary": "true",
            "settings-container-gradient-angle": "215",
            "class": "@associations.SimpleAssociation",
            "code": "",
            "settings-report": "true",
            "settings-margin": "8",
            "scramble-times": "31",
            "settings-container-gradient-source": "0xFFFFFF",
            "name": "associacio 2",
            "settings-container-counters-actions": "true",
            "settings-reportActions": "false",
            "scramble-secondary": "true",
            "settings-container-counters-time": "true",
            "settings-container-bgColor": "0xC0C0C0"
        },
        "cell": [{
            "atributs": {
                "style-color-background": "0xFF6600",
                "style-font-size": "28",
                "style-font-family": "Arial Black",
                "type": "initial",
                "p": "RELACIONA"
            }
        }, {
            "atributs": {
                "media-level": "1",
                "style-font-family": "Arial Black",
                "p": "MOLT BÉ!",
                "style-color-background": "0xFFFF00",
                "style-font-size": "28",
                "media-type": "PLAY_AUDIO",
                "type": "final",
                "media-file": "moltbe.mp3"
            }
        }],
        "celllist": [{
            "atributs": {
                "id": "primary",
                "shaper-rows": "1",
                "cols": "3",
                "shaper-cols": "3",
                "shaper-class": "@Rectangular",
                "cellHeight": "141.0",
                "border": "true",
                "cellWidth": "169.0",
                "rows": "1"
            },
            "cell": [{
                "atributs": {
                    "style-color-inactive": "0xFF6666",
                    "media-level": "1",
                    "style-font-family": "Arial Black",
                    "style-color-background": "0xFF0000",
                    "style-font-size": "28",
                    "image": "altofa2.gif",
                    "media-type": "PLAY_AUDIO",
                    "style-borderStroke": "0.7",
                    "media-file": "gelat r.mp3",
                    "style-markerStroke": "5.0"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFFCC66",
                    "media-level": "1",
                    "style-font-family": "Arial Black",
                    "style-color-background": "0xFFFF33",
                    "style-font-size": "28",
                    "image": "altofa2.gif",
                    "media-type": "PLAY_AUDIO",
                    "style-borderStroke": "0.7",
                    "media-file": "bombons r.mp3",
                    "style-markerStroke": "5.0"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFF9933",
                    "media-level": "1",
                    "style-font-family": "Arial Black",
                    "style-color-background": "0xFF6600",
                    "style-font-size": "28",
                    "image": "altofa2.gif",
                    "media-type": "PLAY_AUDIO",
                    "style-borderStroke": "0.7",
                    "media-file": "lacasitos r.mp3",
                    "style-markerStroke": "5.0"
                }
            }]
        }, {
            "atributs": {
                "id": "secondary",
                "shaper-rows": "1",
                "cols": "3",
                "shaper-cols": "3",
                "shaper-class": "@Rectangular",
                "cellHeight": "141.0",
                "border": "true",
                "cellWidth": "169.0",
                "rows": "1"
            },
            "cell": [{
                "atributs": {
                    "style-color-inactive": "0xFF6666",
                    "id": "0",
                    "style-font-family": "Arial Black",
                    "style-color-background": "0xFF0000",
                    "style-font-size": "28",
                    "image": "fotos xoco/helado xoco [320x200].jpg",
                    "style-borderStroke": "0.7",
                    "style-markerStroke": "5.0"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFFCC66",
                    "id": "1",
                    "style-font-family": "Arial Black",
                    "style-color-background": "0xFFFF33",
                    "style-font-size": "28",
                    "image": "bombons [320x200].jpg",
                    "style-borderStroke": "0.7",
                    "style-markerStroke": "5.0"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFF9933",
                    "id": "2",
                    "style-font-family": "Arial Black",
                    "style-color-background": "0xFF6600",
                    "style-font-size": "28",
                    "image": "IMG_8385 [320x200].JPG",
                    "style-borderStroke": "0.7",
                    "style-markerStroke": "5.0"
                }
            }]
        }]
    },


    {
        "atributsActivitat": {
            "settings-window-border": "true",
            "settings-window-bgColor": "0xC0C0C0",
            "settings-container-counters-score": "true",
            "layout-position": "AUB",
            "scramble-primary": "false",
            "settings-skin-file": "@orange.xml",
            "class": "@text.WrittenAnswer",
            "code": "",
            "settings-report": "true",
            "settings-margin": "8",
            "scramble-times": "31",
            "settings-window-transparent": "true",
            "name": "que es?",
            "settings-container-counters-actions": "true",
            "settings-reportActions": "false",
            "settings-container-counters-time": "true",
            "settings-container-bgColor": "0x00CCFF"
        },
        "cell": [{
            "atributs": {
                "style-color-background": "0xCC0000",
                "style-font-size": "28",
                "style-font-family": "Arial Black",
                "type": "initial",
                "p": "ESCRIU: XOCOLATA"
            }
        }, {
            "atributs": {
                "media-level": "1",
                "style-font-family": "Arial Black",
                "p": "GENIAL!!",
                "style-color-background": "0xFF0000",
                "style-font-size": "28",
                "media-type": "PLAY_AUDIO",
                "type": "final",
                "media-file": "genial.mp3"
            }
        }],
        "celllist": [{
            "atributs": {
                "id": "primary",
                "shaper-rows": "1",
                "cols": "1",
                "shaper-cols": "1",
                "shaper-class": "@Rectangular",
                "cellHeight": "148.0",
                "border": "true",
                "cellWidth": "198.0",
                "rows": "1"
            },
            "cell": [{
                "atributs": {
                    "style-color-inactive": "0xFF3333",
                    "id": "0",
                    "media-level": "1",
                    "style-color-background": "0xFF0000",
                    "image": "xoco [320x200].jpg",
                    "media-type": "PLAY_AUDIO",
                    "style-borderStroke": "0.7",
                    "media-file": "xocolata.mp3",
                    "style-markerStroke": "5.0"
                }
            }]
        }, {
            "atributs": {
                "id": "answers",
                "shaper-rows": "1",
                "cols": "1",
                "shaper-cols": "1",
                "shaper-class": "@Rectangular",
                "cellHeight": "148.0",
                "border": "true",
                "cellWidth": "240.0",
                "rows": "1"
            },
            "cell": [{
                "atributs": {
                    "style-color-inactive": "0x0066FF",
                    "style-color-background": "0xFF0000",
                    "style-font-size": "24",
                    "style-font-family": "Arial Black",
                    "style-borderStroke": "0.7",
                    "style-markerStroke": "5.0",
                    "p": "XOCOLATA"
                }
            }]
        }]
    },


    {
        "atributsActivitat": {
            "settings-window-border": "true",
            "settings-window-bgColor": "0xFFFF66",
            "settings-container-gradient-dest": "0xFFFF00",
            "settings-container-counters-score": "true",
            "layout-position": "AUB",
            "scramble-primary": "true",
            "settings-container-gradient-angle": "215",
            "class": "@associations.SimpleAssociation",
            "code": "",
            "settings-report": "true",
            "settings-margin": "8",
            "scramble-times": "31",
            "settings-container-gradient-source": "0xFFFFFF",
            "name": "associacio 3",
            "settings-container-counters-actions": "true",
            "settings-reportActions": "false",
            "scramble-secondary": "true",
            "settings-container-counters-time": "true",
            "settings-container-bgColor": "0xC0C0C0"
        },
        "cell": [{
            "atributs": {
                "style-color-background": "0xFF6600",
                "style-font-size": "28",
                "style-font-family": "Arial Black",
                "type": "initial",
                "p": "RELACIONA"
            }
        }, {
            "atributs": {
                "media-level": "1",
                "style-font-family": "Arial Black",
                "p": "SUPER BÉ!",
                "style-color-background": "0xFFFF00",
                "style-font-size": "28",
                "media-type": "PLAY_AUDIO",
                "type": "final",
                "media-file": "super be.mp3"
            }
        }],
        "celllist": [{
            "atributs": {
                "id": "primary",
                "shaper-rows": "1",
                "cols": "5",
                "shaper-cols": "5",
                "shaper-class": "@Rectangular",
                "cellHeight": "141.0",
                "border": "true",
                "cellWidth": "169.0",
                "rows": "1"
            },
            "cell": [{
                "atributs": {
                    "style-color-inactive": "0x33CCFF",
                    "style-color-background": "0x3333FF",
                    "style-font-size": "28",
                    "image": "azul [320x200].jpg",
                    "style-font-family": "Arial Black",
                    "style-borderStroke": "0.7",
                    "style-markerStroke": "5.0"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFFFF66",
                    "style-color-background": "0xFFFF00",
                    "style-font-size": "28",
                    "image": "amarillo [320x200].jpg",
                    "style-font-family": "Arial Black",
                    "style-borderStroke": "0.7",
                    "style-markerStroke": "5.0"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFF3333",
                    "style-color-background": "0xFF0000",
                    "style-font-size": "28",
                    "image": "rojo [320x200].jpg",
                    "style-font-family": "Arial Black",
                    "style-borderStroke": "0.7",
                    "style-markerStroke": "5.0"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0x66FF66",
                    "style-color-background": "0x00CC00",
                    "style-font-size": "28",
                    "image": "verde [320x200].jpg",
                    "style-font-family": "Arial Black",
                    "style-borderStroke": "0.7",
                    "style-markerStroke": "5.0"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFF9933",
                    "style-color-background": "0xFF6600",
                    "style-font-size": "28",
                    "image": "naranja [320x200].jpg",
                    "style-font-family": "Arial Black",
                    "style-borderStroke": "0.7",
                    "style-markerStroke": "5.0"
                }
            }]
        }, {
            "atributs": {
                "id": "secondary",
                "shaper-rows": "1",
                "cols": "5",
                "shaper-cols": "5",
                "shaper-class": "@Rectangular",
                "cellHeight": "141.0",
                "border": "true",
                "cellWidth": "169.0",
                "rows": "1"
            },
            "cell": [{
                "atributs": {
                    "style-color-inactive": "0x33CCFF",
                    "media-level": "1",
                    "style-font-family": "Arial Black",
                    "p": "BLAU",
                    "style-color-background": "0x3333FF",
                    "style-font-size": "28",
                    "media-type": "PLAY_AUDIO",
                    "style-borderStroke": "0.7",
                    "media-file": "blau r.mp3",
                    "style-markerStroke": "5.0"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFFFF66",
                    "media-level": "1",
                    "style-font-family": "Arial Black",
                    "p": "GROC",
                    "style-color-background": "0xFFFF00",
                    "style-font-size": "28",
                    "media-type": "PLAY_AUDIO",
                    "style-borderStroke": "0.7",
                    "media-file": "groc r.mp3",
                    "style-markerStroke": "5.0"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFF3333",
                    "media-level": "1",
                    "style-font-family": "Arial Black",
                    "p": "VERMELL",
                    "style-color-background": "0xFF0000",
                    "style-font-size": "28",
                    "media-type": "PLAY_AUDIO",
                    "style-borderStroke": "0.7",
                    "media-file": "vermell r.mp3",
                    "style-markerStroke": "5.0"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0x66FF66",
                    "media-level": "1",
                    "style-font-family": "Arial Black",
                    "p": "VERD",
                    "style-color-background": "0x00CC00",
                    "style-font-size": "28",
                    "media-type": "PLAY_AUDIO",
                    "style-borderStroke": "0.7",
                    "media-file": "verd r.mp3",
                    "style-markerStroke": "5.0"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFF9933",
                    "media-level": "1",
                    "style-font-family": "Arial Black",
                    "p": "TARONJA",
                    "style-color-background": "0xFF6600",
                    "style-font-size": "28",
                    "media-type": "PLAY_AUDIO",
                    "style-borderStroke": "0.7",
                    "media-file": "taronja r.mp3",
                    "style-markerStroke": "5.0"
                }
            }]
        }]
    },


    {
        "atributsActivitat": {
            "settings-window-border": "true",
            "settings-window-bgColor": "0xC0C0C0",
            "settings-container-counters-score": "true",
            "layout-position": "AUB",
            "scramble-primary": "false",
            "settings-skin-file": "@orange.xml",
            "class": "@text.WrittenAnswer",
            "code": "",
            "settings-report": "true",
            "settings-margin": "8",
            "scramble-times": "31",
            "settings-window-transparent": "true",
            "name": "què és? 2",
            "settings-container-counters-actions": "true",
            "settings-reportActions": "false",
            "settings-container-counters-time": "true",
            "settings-container-bgColor": "0x33CCFF"
        },
        "cell": [{
            "atributs": {
                "style-color-background": "0x339900",
                "style-font-size": "28",
                "style-font-family": "Arial Black",
                "type": "initial",
                "p": "ESCRIU: LACASITOS"
            }
        }, {
            "atributs": {
                "media-level": "1",
                "style-font-family": "Arial Black",
                "p": "OHH QUE BÉ!!",
                "style-color-background": "0x33FF00",
                "style-font-size": "28",
                "media-type": "PLAY_AUDIO",
                "type": "final",
                "media-file": "ohh q be.mp3"
            }
        }],
        "celllist": [{
            "atributs": {
                "id": "primary",
                "shaper-rows": "1",
                "cols": "1",
                "shaper-cols": "1",
                "shaper-class": "@Rectangular",
                "cellHeight": "148.0",
                "border": "true",
                "cellWidth": "198.0",
                "rows": "1"
            },
            "cell": [{
                "atributs": {
                    "style-color-inactive": "0x66FF66",
                    "id": "0",
                    "media-level": "1",
                    "style-font-family": "Arial Black",
                    "style-color-background": "0x00FF00",
                    "style-font-size": "28",
                    "image": "IMG_8385 [320x200].JPG",
                    "media-type": "PLAY_AUDIO",
                    "media-file": "lacasitos.mp3"
                }
            }]
        }, {
            "atributs": {
                "id": "answers",
                "shaper-rows": "1",
                "cols": "1",
                "shaper-cols": "1",
                "shaper-class": "@Rectangular",
                "cellHeight": "148.0",
                "border": "true",
                "cellWidth": "240.0",
                "rows": "1"
            },
            "cell": [{
                "atributs": {
                    "style-color-inactive": "0x66FF66",
                    "style-color-background": "0x00FF00",
                    "style-font-size": "28",
                    "style-font-family": "Arial Black",
                    "p": "LACASITOS"
                }
            }]
        }]
    },


    {
        "atributsActivitat": {
            "settings-window-border": "true",
            "settings-window-bgColor": "0xFF6600",
            "settings-container-gradient-dest": "0xFFFF00",
            "settings-container-counters-score": "true",
            "layout-position": "AUB",
            "settings-container-gradient-angle": "250",
            "class": "@puzzles.DoublePuzzle",
            "settings-dragCells": "true",
            "code": "",
            "settings-report": "true",
            "settings-margin": "8",
            "scramble-times": "31",
            "settings-container-gradient-source": "0xFFFFFF",
            "name": "sèrie 3",
            "settings-container-counters-actions": "true",
            "settings-reportActions": "false",
            "settings-container-counters-time": "true",
            "settings-container-bgColor": "0xC0C0C0"
        },
        "cell": [{
            "atributs": {
                "style-color-background": "0xFFFFFF",
                "type": "initial",
                "image": "receptes i tast/braç de galetes/serie 3 [320x200].jpg"
            }
        }, {
            "atributs": {
                "media-level": "1",
                "style-font-family": "Arial Black",
                "p": "SUPER BÉ!",
                "style-color-background": "0x000000",
                "style-color-foreground": "0xFF3300",
                "style-font-size": "28",
                "media-type": "PLAY_AUDIO",
                "type": "final",
                "media-file": "super be.mp3"
            }
        }],
        "celllist": [{
            "atributs": {
                "style-color-inactive": "0xFFFFFF",
                "shaper-rows": "1",
                "cols": "12",
                "shaper-cols": "12",
                "shaper-class": "@Rectangular",
                "cellHeight": "67.0",
                "border": "true",
                "cellWidth": "70.0",
                "rows": "1"
            },
            "cell": [{
                "atributs": {
                    "style-color-inactive": "0xFFFFFF",
                    "style-color-background": "0x666666",
                    "style-color-foreground": "0xFFFF00",
                    "style-font-size": "28",
                    "image": "marron [320x200].jpg",
                    "style-color-border": "0xFF33CC",
                    "style-font-family": "Arial Black"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFFFFFF",
                    "style-color-background": "0x666666",
                    "style-color-foreground": "0xFFFF00",
                    "style-font-size": "28",
                    "image": "naranja [320x200].jpg",
                    "style-color-border": "0xFF6600",
                    "style-font-family": "Arial Black"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFFFFFF",
                    "style-color-background": "0x666666",
                    "style-color-foreground": "0xFFFF00",
                    "style-font-size": "28",
                    "image": "verde [320x200].jpg",
                    "style-color-border": "0xFF0000",
                    "style-font-family": "Arial Black"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFFFFFF",
                    "style-color-background": "0x666666",
                    "style-color-foreground": "0xFFFF00",
                    "style-font-size": "28",
                    "image": "marron [320x200].jpg",
                    "style-color-border": "0x006666",
                    "style-font-family": "Arial Black"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFFFFFF",
                    "style-color-background": "0x666666",
                    "style-color-foreground": "0xFFFF00",
                    "style-font-size": "28",
                    "image": "naranja [320x200].jpg",
                    "style-color-border": "0x3300FF",
                    "style-font-family": "Arial Black"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFFFFFF",
                    "style-color-background": "0x666666",
                    "style-color-foreground": "0xFFFF00",
                    "style-font-size": "28",
                    "image": "verde [320x200].jpg",
                    "style-color-border": "0xFFFF00",
                    "style-font-family": "Arial Black"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFFFFFF",
                    "style-color-background": "0x666666",
                    "style-color-foreground": "0xFFFF00",
                    "style-font-size": "28",
                    "image": "marron [320x200].jpg",
                    "style-color-border": "0x6600FF",
                    "style-font-family": "Arial Black"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFFFFFF",
                    "style-color-background": "0x666666",
                    "style-color-foreground": "0xFFFF00",
                    "style-font-size": "28",
                    "image": "naranja [320x200].jpg",
                    "style-color-border": "0xCC0000",
                    "style-font-family": "Arial Black"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFFFFFF",
                    "style-color-background": "0x666666",
                    "style-color-foreground": "0xFFFF00",
                    "style-font-size": "28",
                    "image": "verde [320x200].jpg",
                    "style-color-border": "0x0066FF",
                    "style-font-family": "Arial Black"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFFFFFF",
                    "style-color-background": "0x666666",
                    "style-color-foreground": "0xFFFF00",
                    "style-font-size": "28",
                    "image": "marron [320x200].jpg",
                    "style-color-border": "0xCC00CC",
                    "style-font-family": "Arial Black"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFFFFFF",
                    "style-color-background": "0x666666",
                    "style-color-foreground": "0xFFFF00",
                    "style-font-size": "28",
                    "image": "naranja [320x200].jpg",
                    "style-color-border": "0xFF3300",
                    "style-font-family": "Arial Black"
                }
            }, {
                "atributs": {
                    "style-color-inactive": "0xFFFFFF",
                    "style-color-background": "0x666666",
                    "style-color-foreground": "0xFFFF00",
                    "style-font-size": "28",
                    "image": "verde [320x200].jpg",
                    "style-color-border": "0xFF0099",
                    "style-font-family": "Arial Black"
                }
            }]
        }]
    },


    {
        "atributsActivitat": {
            "settings-window-border": "true",
            "settings-window-bgColor": "0xC0C0C0",
            "settings-container-counters-score": "true",
            "layout-position": "AUB",
            "scramble-primary": "false",
            "class": "@text.WrittenAnswer",
            "code": "",
            "settings-report": "true",
            "settings-margin": "8",
            "scramble-times": "31",
            "name": "que es3",
            "settings-container-counters-actions": "true",
            "settings-reportActions": "false",
            "settings-container-counters-time": "true",
            "settings-container-bgColor": "0x33CCFF"
        },
        "cell": [{
            "atributs": {
                "style-color-background": "0xFFFF00",
                "style-font-size": "24",
                "style-font-family": "Arial Black",
                "style-borderStroke": "0.7",
                "type": "initial",
                "style-markerStroke": "5.0",
                "p": "ESCRIU: BOMBONS"
            }
        }, {
            "atributs": {
                "media-level": "1",
                "style-font-family": "Arial Black",
                "p": "MOLT BÉ!",
                "style-color-background": "0xFFFF66",
                "style-font-size": "24",
                "media-type": "PLAY_AUDIO",
                "type": "final",
                "media-file": "moltbe.mp3"
            }
        }],
        "celllist": [{
            "atributs": {
                "id": "primary",
                "shaper-rows": "1",
                "cols": "1",
                "shaper-cols": "1",
                "shaper-class": "@Rectangular",
                "cellHeight": "148.0",
                "border": "true",
                "cellWidth": "196.0",
                "rows": "1"
            },
            "cell": [{
                "atributs": {
                    "id": "0",
                    "media-level": "1",
                    "style-font-family": "Arial Black",
                    "style-color-background": "0xFFFF33",
                    "style-font-size": "24",
                    "image": "bombons [320x200].jpg",
                    "media-type": "PLAY_AUDIO",
                    "media-file": "bombons r.mp3"
                }
            }]
        }, {
            "atributs": {
                "id": "answers",
                "shaper-rows": "1",
                "cols": "1",
                "shaper-cols": "1",
                "shaper-class": "@Rectangular",
                "cellHeight": "148.0",
                "border": "true",
                "cellWidth": "240.0",
                "rows": "1"
            },
            "cell": [{
                "atributs": {
                    "style-color-background": "0xFFFF33",
                    "style-font-size": "24",
                    "p": "BOMBONS",
                    "style-font-family": "Arial Black"
                }
            }]
        }]
    }, ]
};