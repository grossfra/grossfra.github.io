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
    updateHTML();
}
function updateHTML() {
    clearAllHTML();
    generateAllHTML();
}
function clearAllHTML() {
    let divToEmpty = document.getElementById("Spieler");
    let children = divToEmpty.children;
    let childCount = children.length;
    for (let i = 0; i < childCount; i++) {
        if (divToEmpty.firstElementChild != null)
            divToEmpty.removeChild(divToEmpty.firstElementChild);
    }
    divToEmpty = document.getElementById("Gegner");
    children = divToEmpty.children;
    childCount = children.length;
    for (let i = 0; i < childCount; i++) {
        if (divToEmpty.firstElementChild != null)
            divToEmpty.removeChild(divToEmpty.firstElementChild);
    }
    // Lösche alle HTML-Elemente des Decks.
    divToEmpty = document.getElementById("deckArea");
    children = divToEmpty.children;
    childCount = children.length;
    for (let i = 0; i < childCount; i++) {
        if (divToEmpty.firstElementChild != null)
            divToEmpty.removeChild(divToEmpty.firstElementChild);
    }
    // Lösche alle HTML-Elemente des Ablage-Stapels.
    divToEmpty = document.getElementById("playArea");
    children = divToEmpty.children;
    childCount = children.length;
    for (let i = 0; i < childCount; i++) {
        if (divToEmpty.firstElementChild != null)
            divToEmpty.removeChild(divToEmpty.firstElementChild);
    }
}
function drawCard(tempPlayersTurn) {
    if (tempPlayersTurn == true) {
        eigeneHandkartenArray.push(KartenstapelArray[0]);
        KartenstapelArray.splice(0, 1);
        setTimeout(computersTurn, 350);
    }
    else {
        compHandArray.push(deckArray[0]);
        deckArray.splice(0, 1);
        playersTurn = true;
    }
    updateHTML();
}
//# sourceMappingURL=Kartenspiel.js.map