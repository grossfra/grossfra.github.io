"use strict";
var Spieler = /** @class */ (function () {
    function Spieler(kartenstapel, ablagestapel) {
        this.kartenstapel = kartenstapel;
        this.ablagestapel = ablagestapel;
        this.meineKarten = new Kartenstapel([]);
    }
    Spieler.prototype.spielen = function () {
        throw new Error("Method not implemented.");
    };
    Spieler.prototype.automatischspielen = function () {
        var obersteKarteAufDemStapel = this.ablagestapel.oberste();
        for (var i = 0; i < this.meineKarten.anzahl; i++) {
            var karte = this.meineKarten.karten[i];
            if (karte.passtAuf(obersteKarteAufDemStapel)) {
                this.ablagestapel.ablegen(karte);
                this.meineKarten.entferne(karte);
                return;
            }
        }
        var neueKarte = this.kartenstapel.ziehen();
        this.meineKarten.ablegen(neueKarte);
    };
    Spieler.prototype.gewinnen = function () {
        if (this.meineKarten.anzahl == 0) {
            alert("Gewonnen!");
            return (true);
        }
        else {
            return (false);
        }
    };
    Spieler.prototype.erhalten = function (karte) {
        if (karte == undefined)
            return;
        else {
            this.meineKarten.ablegen(karte);
        }
    };
    return Spieler;
}());
