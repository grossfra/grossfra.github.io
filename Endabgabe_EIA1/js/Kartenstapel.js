"use strict";
var Kartenstapel = /** @class */ (function () {
    function Kartenstapel() {
    }
    Kartenstapel.prototype.ziehen = function () { return new Karte(new Farbe(""), new Wertigkeit("")); };
    return Kartenstapel;
}());
