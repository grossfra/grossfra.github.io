interface Kartenspiel {
    KartenWertigkeit: number;
    Kartenfarbe: string;
}
let eigeneHandkartenArray: Kartenspiel[] = [];
let HandkartenGegnerArray: Kartenspiel[] = [];
let KartenstapelArray: Kartenspiel[] = [];
let gespielteKartenArray: Kartenspiel[] = [];

function neuesDeckGenerieren() {
let neueKartenwertigkeit: number;
let neueKartenfarbe: string;

for(let i:number=1; i<=9; i++){
    for(let j:number=0; j<4; j++){
        neueKartenwertigkeit=i;
        switch(j){
            case 0: neueKartenfarbe = "rot"; break;
            case 1: neueKartenfarbe = "blau"; break;
            case 2: neueKartenfarbe = "gelb"; break;
            case 3: neueKartenfarbe = "grün"; break;
        }
        let newCard: Kartenspiel = {                                         
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
    let divToEmpty: HTMLElement = document.getElementById("Spieler");
    let children: HTMLCollection = divToEmpty.children;
    let childCount: number = children.length;
    for (let i: number = 0; i < childCount; i++) {                           
        if (divToEmpty.firstElementChild != null)                          
        divToEmpty.removeChild(divToEmpty.firstElementChild);       
    }
    divToEmpty = document.getElementById("Gegner");
    children = divToEmpty.children;
    childCount = children.length;
    for (let i: number = 0; i < childCount; i++) {                           
        if (divToEmpty.firstElementChild != null)                          
        divToEmpty.removeChild(divToEmpty.firstElementChild);       
    }

    // Lösche alle HTML-Elemente des Decks.
    divToEmpty = document.getElementById("deckArea");
    children = divToEmpty.children;
    childCount = children.length;
    for (let i: number = 0; i < childCount; i++) {                           
        if (divToEmpty.firstElementChild != null)                          
        divToEmpty.removeChild(divToEmpty.firstElementChild);       
    }

    // Lösche alle HTML-Elemente des Ablage-Stapels.
    divToEmpty = document.getElementById("playArea");
    children = divToEmpty.children;
    childCount = children.length;
    for (let i: number = 0; i < childCount; i++) {                           
        if (divToEmpty.firstElementChild != null)                          
        divToEmpty.removeChild(divToEmpty.firstElementChild);       
    }
}

}
function drawCard(tempPlayersTurn: boolean){
    if (tempPlayersTurn==true){                    
        eigeneHandkartenArray.push(KartenstapelArray[0]);
        KartenstapelArray.splice(0,1);
        setTimeout(computersTurn,350);
    } else{
        compHandArray.push(deckArray[0]);
        deckArray.splice(0,1);
        playersTurn=true;
    }
    updateHTML();
}

