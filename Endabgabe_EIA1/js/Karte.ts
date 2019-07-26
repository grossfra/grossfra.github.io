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

let karten:Karte[] = [] // erzueugt einzigartige Karten
for( let i=0; i< farben.length; i++)
{
    for( let j=0; j< wertigkeiten.length; j++) {
        let farbe = farben[i]
        let wert = wertigkeiten[j]
        let karte = new Karte(farbe, wert)
        karten.push(karte)
    }
}