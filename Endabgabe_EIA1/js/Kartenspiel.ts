interface Karte {
    Wertigkeit: number;
    Farbe: string;
}

let HandkartenGegner: Karte [] = [];
let HandkartenSpieler: Karte [] = [];
let Kartenstapel: Karte [] = [];
let Ablagestapel: Karte [] = [];

function Spielablauf (){
    ErstellungKarten();
    Kartenstapel = mischen(Kartenstapel); //Mischen

    for (let i = 0; i < 5; i++){                  //Verteilung Handkarten Spieler
        HandkartenSpieler.push(Kartenstapel[i]);
        HandkartenGegner.push(Kartenstapel[i+5]);
    }

    Ablagestapel.push(Kartenstapel[10]);
    Kartenstapel.splice(0,11);
    
    for(let i = 0; i < HandkartenSpieler.length; i++) {
        KarteHTML(HandkartenSpieler[i],"HandkartenSpieler",i);
    }

    for(let i = 0; i < HandkartenGegner.length; i++){
        verdeckteKarte(HandkartenGegner [i], "HandkartenGegner",i);
    }

    KarteHTML(Ablagestapel[Ablagestapel.length - 1], "Ablagestapel",Ablagestapel.length-1);
    verdeckteKarte(Kartenstapel[Kartenstapel.length -1], "Kartenstapel",Kartenstapel.length-1);
}

window.onload = function (){
    document.getElementById("Kartenstapel").addEventListener("click",KarteZiehen,false);
     Spielablauf();   
}

function KarteHTML (karte:Karte, Zielort: string, index : number){
     let holdingDiv: HTMLElement = document.createElement ("div");
     holdingDiv.setAttribute("class", "Karte"  + " " + karte.Farbe);
     document.getElementById(Zielort).appendChild(holdingDiv);

     let Wertigkeit: HTMLElement = document.createElement ("p");
     Wertigkeit.setAttribute ("class", "Wertigkeit");
     Wertigkeit.innerHTML = "" + karte.Wertigkeit;
     holdingDiv.appendChild(Wertigkeit);
     if (Zielort == "HandkartenSpieler"){
        holdingDiv.addEventListener("click", function() {KarteLegen(karte, index)}, false);
    }
}

function KarteZiehen(){                             //neue Karte ziehen
    if(KartenPrüfung(HandkartenSpieler)==false){
        HandkartenSpieler.push(Kartenstapel[Kartenstapel.length - 1]);
        Kartenstapel.splice(Kartenstapel.length -1, 1);
        updateHTML("HandkartenSpieler");
        updateHTML("Kartenstapel");
    }
 
    if(KartenPrüfung(HandkartenSpieler)==false){    
        ZugGegner();
    }
 }

function KarteLegen(karte :Karte, index: number){        //Karte wird abgelegt 
   if(karte.Farbe == Ablagestapel[Ablagestapel.length-1].Farbe || karte.Wertigkeit ==Ablagestapel[Ablagestapel.length-1].Wertigkeit){
       Ablagestapel.push(karte);
       HandkartenSpieler.splice(index, 1);
       updateHTML("HandkartenSpieler");
       updateHTML("Ablagestapel");
       ZugGegner();
       if (HandkartenSpieler.length==0){          //Spieler bekommt Nachricht, wenn er alle Karten losgeworden ist
        alert("Glückwunsch - du hast gewonnen!");                          
    }
   }
}

function ZugGegner(){      //Gegner legt Karte; wenn keine passt, zieht er vom Kartenstapel
       let i = 0;
       for (i; i<HandkartenGegner.length;i++){
           if(HandkartenGegner[i].Farbe == Ablagestapel[Ablagestapel.length-1].Farbe || HandkartenGegner[i].Wertigkeit == Ablagestapel[Ablagestapel.length-1].Wertigkeit){
               Ablagestapel.push(HandkartenGegner[i]);
               HandkartenGegner.splice(i, 1);
               updateHTML("Ablagestapel");
               updateHTML("HandkartenGegner");
               break;
           }
       }

       if (i >= HandkartenGegner.length){
        HandkartenGegner.push(Kartenstapel[Kartenstapel.length-1]);
        Kartenstapel.splice(Kartenstapel.length-1,1);
        updateHTML("HandkartenGegner");
        updateHTML("Kartenstapel");
        if (HandkartenGegner[HandkartenGegner.length-1].Farbe==Ablagestapel[Ablagestapel.length-1].Farbe || HandkartenGegner[HandkartenGegner.length-1].Wertigkeit == Ablagestapel[Ablagestapel.length-1].Wertigkeit){
            Ablagestapel.push(HandkartenGegner[HandkartenGegner.length-1]);
            HandkartenGegner.splice(HandkartenGegner.length-1, 1);
            updateHTML("Ablagestapel");
            updateHTML("HandkartenGegner"); 
        }
    }
}

function verdeckteKarte(karte: Karte, Zielort: string, index: number) {
    let holdingDiv: HTMLElement = document.createElement("div");
    holdingDiv.setAttribute("class", "Karte" + " " + "Verdeckt");
    document.getElementById(Zielort).appendChild(holdingDiv);
 }

function KartenPrüfung(array :Karte[]) :boolean {    //Prüfung, ob Karte legbar ist
let passendeKarte : boolean = false;
for (let i=0; i<array.length;i++){
    if(array[i].Farbe == Ablagestapel[Ablagestapel.length-1].Farbe || array[i].Wertigkeit == Ablagestapel[Ablagestapel.length-1].Wertigkeit){
        passendeKarte = true;
        break;
    }
}

return passendeKarte;
}

function updateHTML(Zielort :string){
ClearHTML(Zielort);
if (Zielort =="HandkartenSpieler"){
    for(let i = 0; i < HandkartenSpieler.length; i++) {
        KarteHTML(HandkartenSpieler[i],"HandkartenSpieler",i);
    }
}

if (Zielort == "HandkartenGegner"){
    for(let i = 0; i < HandkartenGegner.length; i++){
        verdeckteKarte(HandkartenGegner [i], "HandkartenGegner",i);
    }
}

if (Zielort == "Ablagestapel"){
    KarteHTML(Ablagestapel[Ablagestapel.length - 1], "Ablagestapel",Ablagestapel.length-1);
}

if (Zielort == "Kartenstapel"){
    verdeckteKarte(Kartenstapel[Kartenstapel.length-1], "Kartenstapel",Kartenstapel.length-1);
}
}

function ClearHTML(Zielort: string){
let Element: HTMLElement = document.getElementById(Zielort);
while (Element.firstChild){
    Element.removeChild(Element.firstChild);
}
}

function ErstellungKarten (){        //Spielkarte wird erstellt mit Farbe und Wertigkeit  
let Farbe: string;
for(let i = 1; i <= 8; i++){
    for(let j = 1; j <= 4; j++){
       if (j == 1){
           Farbe = "Blau"}
           
        else if (j == 2){
           Farbe = "Gelb"}

        else if (j == 3){
           Farbe = "Grün"}

        else if ( j == 4){
           Farbe = "Rot"}    

        let NewKarte: Karte = {
            Farbe: Farbe,
            Wertigkeit: i
        }

        Kartenstapel.push(NewKarte);
    }
}
}

function mischen(array : Karte[]){    //erneutes Mischen der Karten  
let currentIndex = array.length;
let temporaryValue;
let randomIndex;

while (currentIndex != 0){
    randomIndex = Math.floor(Math.random()*currentIndex);
    currentIndex -= 1;
    temporaryValue = array [currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
}

return array;
}