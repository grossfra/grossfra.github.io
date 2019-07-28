interface Karte {
    Farbe: string;
    Wertigkeit: number;
}

let HandkartenGegner: Karte [] = [];
let HandkartenSpieler: Karte [] = [];
let Kartenstapel: Karte[] = [];
let Ablagestapel: Karte[] = [];

window.onload = function (){
    document.getElementById("Kartenstapel").addEventListener("click",KarteNehmen,false);
     GamePlay();   
}

function GamePlay (){
    KartenGenerierung();
    Kartenstapel = shuffle(Kartenstapel); //Karten werden gemischt

    //Spielerkarten werden verteilt:
    for (let i = 0; i < 5; i++){
        HandkartenSpieler.push(Kartenstapel[i]);
        HandkartenGegner.push(Kartenstapel[i+5]);
    }

    Ablagestapel.push(Kartenstapel[10]);
    Kartenstapel.splice(0,11);

    console.log(HandkartenSpieler);
    console.log (HandkartenGegner);
    console.log (Kartenstapel);  
    
    for(let i = 0; i < HandkartenSpieler.length; i++) {
        KarteHTML(HandkartenSpieler[i],"HandkartenSpieler",i);
    }

    for(let i = 0; i < HandkartenGegner.length; i++){
        KarteVerdeckt(HandkartenGegner [i], "HandkartenGegner",i);
    }

    KarteHTML(Ablagestapel[Ablagestapel.length - 1], "Ablagestapel",Ablagestapel.length-1);
    KarteVerdeckt(Kartenstapel[Kartenstapel.length -1], "Kartenstapel",Kartenstapel.length-1);
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

function KarteVerdeckt(karte: Karte, Zielort: string, index: number) {
   let holdingDiv: HTMLElement = document.createElement("div");
   holdingDiv.setAttribute("class", "Karte" + " " + "Verdeckt");
   document.getElementById(Zielort).appendChild(holdingDiv);
}

function KarteLegen(karte :Karte, index: number){
   if(karte.Farbe == Ablagestapel[Ablagestapel.length-1].Farbe || karte.Wertigkeit ==Ablagestapel[Ablagestapel.length-1].Wertigkeit){
       Ablagestapel.push(karte);
       HandkartenSpieler.splice(index, 1);
       updateHTML("HandkartenSpieler");
       updateHTML("Ablagestapel");
       Gegnerzug();
   }
   if(HandkartenSpieler.length == 0){
       alert("Gewonnen!");
   }
}

function KarteNehmen(){
   if(checkKarten(HandkartenSpieler)==false){
       HandkartenSpieler.push(Kartenstapel[Kartenstapel.length - 1]);
       Kartenstapel.splice(Kartenstapel.length -1, 1);
       updateHTML("HandkartenSpieler");
       updateHTML("Kartenstapel");
   }
   if(checkKarten(HandkartenSpieler)==false){
       Gegnerzug();
   }
}

function Gegnerzug(){
   //Wenn Gegner nicht legen kann, nimmt er Karte vom Kartenstapel
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

function checkKarten(array :Karte[]) :boolean {
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
        KarteVerdeckt(HandkartenGegner [i], "HandkartenGegner",i);
    }
}
if (Zielort == "Ablagestapel"){
    KarteHTML(Ablagestapel[Ablagestapel.length - 1], "Ablagestapel",Ablagestapel.length-1);
}
if (Zielort == "Kartenstapel"){
    KarteVerdeckt(Kartenstapel[Kartenstapel.length-1], "Kartenstapel",Kartenstapel.length-1);
}
}

function ClearHTML(Zielort: string){
let Element: HTMLElement = document.getElementById(Zielort);
while (Element.firstChild){
    Element.removeChild(Element.firstChild);
}
}

function KartenGenerierung (){
let Farbe: string;
for(let i = 1; i <= 8; i++){
    for(let j = 1; j <= 4; j++){
      
       if (j == 1){
           Farbe = "Blau"  
       }

       else if (j == 2){
           Farbe = "Rot"
       }

       else if (j == 3){
           Farbe = "Gelb"
       }

       else if ( j == 4){
           Farbe = "Grün"
       }
            
        let NewKarte: Karte = {
            Farbe: Farbe,
            Wertigkeit: i
        }
        Kartenstapel.push(NewKarte);
    }
}
console.log(Kartenstapel);
}

function shuffle(array : Karte[]){
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