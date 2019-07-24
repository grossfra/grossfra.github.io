let eigeneHandkartenArray = [];
let HandkartenGegnerArray = [];
let KartenstapelArray = [];
let gespielteKartenArray = [];
function neuesDeckGenerieren() {
    let neueKartenwertigkeit;
    let neueKartenfarbe;
    for (let i = 1; i <= 9; i++) {
        for (let j = 0; j < 4; j++) {
            neueKartenwertigkeit = i;
            switch (j) {
                case 0:
                    neueKartenfarbe = "rot";
                    break;
                case 1:
                    neueKartenfarbe = "blau";
                    break;
                case 2:
                    neueKartenfarbe = "gelb";
                    break;
                case 3:
                    neueKartenfarbe = "grün";
                    break;
            }
            let newCard = {
                KartenWertigkeit: neueKartenwertigkeit,
                Kartenfarbe: neueKartenfarbe
            };
            KartenstapelArray.push(newCard);
        }
    }
}
//# sourceMappingURL=Kartenspiel.js.map