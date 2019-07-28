"use strict";
var Kartenspiel = /** @class */ (function () {
    function Kartenspiel() {
    }
    return Kartenspiel;
}());
var wertigkeiten = [
    new Wertigkeit("null"), new Wertigkeit("eins"), new Wertigkeit("zwei"), new Wertigkeit("drei"), new Wertigkeit("vier"), new Wertigkeit("fünf"), new Wertigkeit("sechs"), new Wertigkeit("sieben"), new Wertigkeit("acht"), new Wertigkeit("neun")
];
var farben = [
    new Farbe("rot"), new Farbe("grün"), new Farbe("blau"), new Farbe("gelb")
];
var karten = []; // erzueugt einzigartige Karten
for (var i = 0; i < farben.length; i++) {
    for (var j = 0; j < wertigkeiten.length; j++) {
        var farbe = farben[i];
        var wert = wertigkeiten[j];
        var karte = new Karte(farbe, wert);
        karten.push(karte);
    }
}
var ziehstapel = new Kartenstapel(karten);
ziehstapel.mischen();
var ablagestapel = new Kartenstapel([]);
var spieler = new Spieler(ziehstapel, ablagestapel);
var computer = new Spieler(ziehstapel, ablagestapel);
//Austeilen
for (var anzahl = 0; anzahl < 3; anzahl++) {
    spieler.erhalten(ziehstapel.ziehen());
    computer.erhalten(ziehstapel.ziehen());
}
//Startkarte legen
var obersteKarte = ziehstapel.ziehen();
ablagestapel.ablegen(obersteKarte);
while (true) { //Runden
    spieler.spielen(); // Zug
    spieler.meineKarten.anzeigen("eigeneHandkarten");
    ablagestapel.anzeigen("gespielteKarten");
    if (spieler.gewinnen()) {
        break;
    }
    computer.automatischspielen();
    ablagestapel.anzeigen("gespielteKarten");
    if (computer.gewinnen()) {
        break;
    }
    if (ziehstapel.anzahl == 0) {
        ziehstapel.karten = ablagestapel.karten;
        ablagestapel.karten = [];
        var oben = ziehstapel.ziehen();
        ablagestapel.ablegen(oben);
        ziehstapel.mischen();
    }
}
