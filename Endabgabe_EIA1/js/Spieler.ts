class Spieler {
    meineKarten: Kartenstapel
    kartenstapel: Kartenstapel
    ablagestapel: Kartenstapel
    constructor(kartenstapel: Kartenstapel, ablagestapel: Kartenstapel) {
        this.kartenstapel = kartenstapel
        this.ablagestapel = ablagestapel
        this.meineKarten = new Kartenstapel([])}
    spielen() {
        let obersteKarteAufDemStapel = this.ablagestapel.oberste()
        karten.forEach(karte => {
            if (karte.passtAuf(obersteKarteAufDemStapel)) {
                this.ablagestapel.erscheinen(karte)
                this.meineKarten.entferne(karte)

            }
        })
    }
    gewinnen(): boolean {
        if (this.meineKarten.anzahl == 0) return (true)
        else return (false)
    }
    erhalten(karte: Karte | undefined) {
        if (karte == undefined)
            return;
        else {
            this.meineKarten.erscheinen(karte)
        }
    }

}