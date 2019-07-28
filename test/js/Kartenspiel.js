let eigeneHandkartenArray = [];
let HandkartenGegnerArray = [];
let KartenstapelArray = [];
let gespielteKartenArray = [];
let picSrc = ["imgs/blau0.jpg", "imgs/blau1.jpg", blau2, blau3, blau4, blau5, blau6, blau7, blau8, blau9, gelb0, gelb1, gelb2, gelb3, gelb4, gelb5, gelb6, gelb7, gelb8, gelb9, grün0, grün1, grün2, grün3, grün4, grün5, grün6, grün7, grün8, grün9, rot0, rot1, rot2, rot3, rot4, rot5, rot6, rot7, rot8, rot9, uno];
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
    divToEmpty = document.getElementById("Kartendeck");
    children = divToEmpty.children;
    childCount = children.length;
    for (let i = 0; i < childCount; i++) {
        if (divToEmpty.firstElementChild != null)
            divToEmpty.removeChild(divToEmpty.firstElementChild);
    }
    divToEmpty = document.getElementById("Ablagestapel");
    children = divToEmpty.children;
    childCount = children.length;
    for (let i = 0; i < childCount; i++) {
        if (divToEmpty.firstElementChild != null)
            divToEmpty.removeChild(divToEmpty.firstElementChild);
    }
}
function generateAllHTML() {
    for (let i = 0; i < HandkartenGegnerArray.length; i++) {
        generateGegnerHTML(i);
    }
    for (let j = 0; j < eigeneHandkartenArray.length; j++) {
        generateSpielerHTML(j);
    }
    for (let k = 0; k < gespielteKartenArray.length; k++) {
        generategespielteKartenHTML(k);
    }
    generateKartenstapelHTML();
}
function generateSpielerHTML(CardNr) {
    let cardDiv = document.createElement("div");
    cardDiv.setAttribute("id", "SpielerKarte" + (CardNr + 1));
    cardDiv.setAttribute("class", "card");
    cardDiv.addEventListener('click', function () { playCard(CardNr, playersTurn); }, false);
    document.getElementById("Spieler").appendChild(cardDiv);
}
function generateGegnerHTML(CardNr) {
    if (!GegnerVisible) {
        let cardDiv = document.createElement("div");
        cardDiv.setAttribute("id", "GegnerKarte" + (CardNr + 1));
        cardDiv.setAttribute("class", "hiddenCard");
        document.getElementById("Gegner").appendChild(cardDiv);
    }
    else {
        let cardDiv = document.createElement("div");
        cardDiv.setAttribute("id", "GegnerKarte" + (CardNr + 1));
        cardDiv.setAttribute("class", "card");
        document.getElementById("Gegner").appendChild(cardDiv);
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
    }
}
//# sourceMappingURL=Kartenspiel.js.map