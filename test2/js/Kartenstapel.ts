class Kartenstapel {
    anzeigen(idOfDiv: string) {
        let element : HTMLDivElement=<HTMLDivElement>document.getElementById(idOfDiv)
        element.innerHTML=""
        this.karten.forEach(karte=>{
            let div =document.createElement("div")
            div.innerText = karte.farbe.name + " "+karte.wert.wert
            div.setAttribute("class","eineKarte")
            element.appendChild(div)
        })
    }

    anzahl: number = 0
    karten: Karte[] = []

    entferne(karte: Karte | undefined) {
        if (karte == undefined) return
        let nummer = this.karten.indexOf(karte)
        this.karten.splice(nummer, 1)
        this.anzahl--
    }
    ziehen(): Karte | undefined {
        let a = this.karten.pop()
        if (a != undefined){
            this.anzahl--
        }
        return a
    }
    ablegen(karte: Karte | undefined) {
        if (karte == undefined) return
        this.anzahl++
        this.karten.push(karte)
    }
    oberste(): Karte {
        let letzte = this.karten.length - 1
        return this.karten[letzte]
    }
    mischen(): void {
        for (let i = 0; i < this.anzahl; i++) {
            let z = this.zufallszahl(this.anzahl)
            let gelöscht: Karte[] = this.karten.splice(z, 1)
            this.karten.push(gelöscht[0])
        }
    }
    zufallszahl(max: number) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    constructor(karten: Karte[]) {
        this.karten = karten;
        this.anzahl = karten.length
    }


}