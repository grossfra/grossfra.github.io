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

}

