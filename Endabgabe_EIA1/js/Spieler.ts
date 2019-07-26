class Spieler {
    anzahl: number = 0
    karten: Karte[]=[]
    spielen() {}
    gewinnen(): boolean{return true;}
    erhalten(karte:Karte|undefined){
        if (karte==undefined)
            return;
        else{ 
this.anzahl++
this.karten.push(karte)
        }
    }

}