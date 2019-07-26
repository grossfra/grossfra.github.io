class Ablagestapel {
    anzahl: number = 0;
    karten: Karte[] = [];
    erscheinen(karte: Karte) {
        this.anzahl++
        this.karten.push(karte)
    }
}