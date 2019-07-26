class Karte {
    farbe: Farbe;
    wert: Wertigkeit;
    constructor(farbe: Farbe, wert: Wertigkeit){
        this.farbe=farbe;
        this.wert=wert;
    }
    anzeigen(){
        document.writeln(this.farbe.name + " " + this.wert.wert)

    }
} 

