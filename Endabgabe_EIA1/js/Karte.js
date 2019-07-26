"use strict";
var Karte = /** @class */ (function () {
    function Karte(farbe, wert) {
        this.farbe = farbe;
        this.wert = wert;
    }
    Karte.prototype.anzeigen = function () {
        document.writeln(this.farbe.name + " " + this.wert.wert);
    };
    return Karte;
}());
var karten = []; // erzueugt einzigartige Karten
for (var i = 0; i < farben.length; i++) {
    for (var j = 0; j < wertigkeiten.length; j++) {
        var farbe = farben[i];
        var wert = wertigkeiten[j];
        var karte = new Karte(farbe, wert);
        karten.push(karte);
    }
}
karten.forEach(function (k) {
    k.anzeigen();
});
