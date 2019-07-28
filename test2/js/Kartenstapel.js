"use strict";
var Kartenstapel = /** @class */ (function () {
    function Kartenstapel(karten) {
        this.anzahl = 0;
        this.karten = [];
        this.karten = karten;
        this.anzahl = karten.length;
    }
    Kartenstapel.prototype.anzeigen = function (idOfDiv) {
        var element = document.getElementById(idOfDiv);
        element.innerHTML = "";
        this.karten.forEach(function (karte) {
            var div = document.createElement("div");
            div.innerText = karte.farbe.name + " " + karte.wert.wert;
            div.setAttribute("class", "eineKarte");
            element.appendChild(div);
        });
    };
    Kartenstapel.prototype.entferne = function (karte) {
        if (karte == undefined)
            return;
        var nummer = this.karten.indexOf(karte);
        this.karten.splice(nummer, 1);
        this.anzahl--;
    };
    Kartenstapel.prototype.ziehen = function () {
        var a = this.karten.pop();
        if (a != undefined) {
            this.anzahl--;
        }
        return a;
    };
    Kartenstapel.prototype.ablegen = function (karte) {
        if (karte == undefined)
            return;
        this.anzahl++;
        this.karten.push(karte);
    };
    Kartenstapel.prototype.oberste = function () {
        var letzte = this.karten.length - 1;
        return this.karten[letzte];
    };
    Kartenstapel.prototype.mischen = function () {
        for (var i = 0; i < this.anzahl; i++) {
            var z = this.zufallszahl(this.anzahl);
            var gelöscht = this.karten.splice(z, 1);
            this.karten.push(gelöscht[0]);
        }
    };
    Kartenstapel.prototype.zufallszahl = function (max) {
        return Math.floor(Math.random() * Math.floor(max));
    };
    return Kartenstapel;
}());
