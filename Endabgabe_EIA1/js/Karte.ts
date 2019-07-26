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
    passtAuf(obersteKarteAufDemStapel: Karte) :boolean {if (this.farbe == obersteKarteAufDemStapel.farbe) return true 
        if (this.wert == obersteKarteAufDemStapel.wert) return true
    else return false}
    }
} 

