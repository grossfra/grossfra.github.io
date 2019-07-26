"use strict";
var Ablagestapel = /** @class */ (function () {
    function Ablagestapel() {
        this.anzahl = 0;
        this.karten = [];
    }
    Ablagestapel.prototype.erscheinen = function (karte) {
        this.anzahl = this.anzahl + 1;
        this.karten.push(karte);
    };
    return Ablagestapel;
}());
