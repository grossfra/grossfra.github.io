"use strict";
var Kartenspiel = /** @class */ (function () {
    function Kartenspiel() {
    }
    return Kartenspiel;
}());
var wertigkeiten = [
    new Wertigkeit("null"), new Wertigkeit("eins"), new Wertigkeit("zwei"), new Wertigkeit("drei"), new Wertigkeit("vier"), new Wertigkeit("fünf"), new Wertigkeit("sechs"), new Wertigkeit("sieben")
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
var ziehstapel = new Kartenstapel(karten); //mischen
var ablagestapel = new Kartenstapel([]);
var spieler = new Spieler(ziehstapel, ablagestapel);
var computer = new Spieler(ziehstapel, ablagestapel);
for (var anzahl = 0; anzahl < 3; anzahl++) {
    spieler.erhalten(ziehstapel.ziehen());
    computer.erhalten(ziehstapel.ziehen());
}
var obersteKarte = ziehstapel.ziehen();
ablagestapel.erscheinen(obersteKarte);
ablagestapel.entferne(obersteKarte);
alert(ablagestapel.anzahl);
while (true) { //Runden
    spieler.spielen(); // Zug
    if (spieler.gewinnen()) {
        break;
    }
    computer.spielen();
    if (computer.gewinnen()) {
        break;
    }
}
