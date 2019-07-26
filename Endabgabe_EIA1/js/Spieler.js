"use strict";
var Spieler = /** @class */ (function () {
    function Spieler(kartenstapel, ablagestapel) {
        this.kartenstapel = kartenstapel;
        this.ablagestapel = ablagestapel;
        this.meineKarten = new Kartenstapel([]);
    }
    Spieler.prototype.spielen = function () {
        var _this = this;
        var obersteKarteAufDemStapel = this.ablagestapel.oberste();
        this.meineKarten.karten.forEach(function (karte) {
            if (karte.passtAuf(obersteKarteAufDemStapel)) {
                _this.ablagestapel.erscheinen(karte);
                _this.meineKarten.entferne(karte);
            }
        });
    };
    Spieler.prototype.gewinnen = function () {
        if (this.meineKarten.anzahl == 0)
            return (true);
        else
            return (false);
    };
    Spieler.prototype.erhalten = function (karte) {
        if (karte == undefined)
            return;
        else {
            this.meineKarten.erscheinen(karte);
        }
    };
    return Spieler;
}());
