class Kartenstapel {
    
    anzahl: number = 0
    karten: Karte[] = []

    entferne(karte: Karte | undefined) {
        if (karte == undefined) return
        let nummer = this.karten.indexOf(karte)
        this.karten.splice(nummer, 1)
        this.anzahl--
    }
    ziehen(): Karte | undefined {
        this.anzahl--
        let a = this.karten.pop()
        return a
    }
    erscheinen(karte: Karte | undefined) {
        if (karte == undefined) return
        this.anzahl++
        this.karten.push(karte)
    }
    oberste(): Karte {
        let letzte = this.karten.length - 1
        return this.karten[letzte]
    }
    constructor(karten: Karte[]) {
        this.karten = karten;
        this.anzahl = karten.length
    }


}