class Kartenstapel {
    anzahl: number = 0
    karten: Karte[] = []

    ziehen(): Karte | undefined {
        this.anzahl--
        let a = this.karten.pop()
        return a
    }
    constructor(karten: Karte[]) {
        this.karten = karten;
        this.anzahl = karten.length
    }


}