class Spieler {
    spielen() {
        throw new Error("Method not implemented.");
    }
    meineKarten: Kartenstapel
    kartenstapel: Kartenstapel
    ablagestapel: Kartenstapel
    constructor(kartenstapel: Kartenstapel, ablagestapel: Kartenstapel) {
        this.kartenstapel = kartenstapel
        this.ablagestapel = ablagestapel
        this.meineKarten = new Kartenstapel([])
    }
    automatischspielen() {
        let obersteKarteAufDemStapel = this.ablagestapel.oberste()
        for (let i = 0; i < this.meineKarten.anzahl; i++) {
            let karte = this.meineKarten.karten[i]
            if (karte.passtAuf(obersteKarteAufDemStapel)) {
                this.ablagestapel.ablegen(karte)
                this.meineKarten.entferne(karte)

                return
            }
        }

        let neueKarte = this.kartenstapel.ziehen()
        this.meineKarten.ablegen(neueKarte)

    }
    gewinnen(): boolean {
        if (this.meineKarten.anzahl == 0) {
            alert("Gewonnen!")
            return (true)
        }
        else {
            return (false)
        }
    }
    erhalten(karte: Karte | undefined) {
        if (karte == undefined)
            return;
        else {
            this.meineKarten.ablegen(karte)
        }
    }

}