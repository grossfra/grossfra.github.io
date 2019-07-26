"use strict";
var Kartenstapel = /** @class */ (function () {
    function Kartenstapel(karten) {
        this.anzahl = 0;
        this.karten = [];
        this.karten = karten;
        this.anzahl = karten.length;
    }
    Kartenstapel.prototype.entferne = function (karte) {
        if (karte == undefined)
            return;
        var nummer = this.karten.indexOf(karte);
        this.karten.splice(nummer, 1);
        this.anzahl--;
    };
    Kartenstapel.prototype.ziehen = function () {
        this.anzahl--;
        var a = this.karten.pop();
        return a;
    };
    Kartenstapel.prototype.erscheinen = function (karte) {
        if (karte == undefined)
            return;
        this.anzahl++;
        this.karten.push(karte);
    };
    Kartenstapel.prototype.oberste = function () {
        var letzte = this.karten.length - 1;
        return this.karten[letzte];
    };
    return Kartenstapel;
}());
