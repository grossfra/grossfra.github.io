"use strict";
var Karte = /** @class */ (function () {
    function Karte(farbe, wert) {
        this.farbe = farbe;
        this.wert = wert;
    }
    Karte.prototype.anzeigen = function () {
        document.writeln(this.farbe.name + " " + this.wert.wert);
    };
    Karte.prototype.passtAuf = function (obersteKarteAufDemStapel) {
        if (this.farbe == obersteKarteAufDemStapel.farbe)
            return true;
        if (this.wert == obersteKarteAufDemStapel.wert)
            return true;
        else
            return false;
    };
    return Karte;
}());
