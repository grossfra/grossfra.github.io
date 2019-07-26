class Ablagestapel{
    anzahl: number=0;
    karten: Karte[]=[];
erscheinen(karte:Karte){
this.anzahl=this.anzahl+1
this.karten.push(karte)
}
}