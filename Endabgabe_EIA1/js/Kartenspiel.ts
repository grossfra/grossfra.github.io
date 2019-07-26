class Kartenspiel { }
let wertigkeiten = [
    new Wertigkeit("null"), new Wertigkeit("eins"), new Wertigkeit("zwei"), new Wertigkeit("drei"), new Wertigkeit("vier"), new Wertigkeit("fünf"), new Wertigkeit("sechs"), new Wertigkeit("sieben")
]
let farben = [
    new Farbe("rot"), new Farbe("grün"), new Farbe("blau"), new Farbe("gelb")]
let karten: Karte[] = [] // erzueugt einzigartige Karten
for (let i = 0; i < farben.length; i++) {
    for (let j = 0; j < wertigkeiten.length; j++) {
        let farbe = farben[i]
        let wert = wertigkeiten[j]
        let karte = new Karte(farbe, wert)
        karten.push(karte)
    }
}
let ziehstapel = new Kartenstapel(karten) //mischen
let ablagestapel = new Kartenstapel([])
let spieler = new Spieler(ziehstapel, ablagestapel)
let computer = new Spieler(ziehstapel, ablagestapel)

for (let anzahl = 0; anzahl < 3; anzahl++) {
    spieler.erhalten(ziehstapel.ziehen())
    computer.erhalten(ziehstapel.ziehen())
}
let obersteKarte = ziehstapel.ziehen()
ablagestapel.erscheinen(obersteKarte)
ablagestapel.entferne(obersteKarte)
alert(ablagestapel.anzahl)
while (true) { //Runden
    spieler.spielen() // Zug
    if (spieler.gewinnen()) { break }
    computer.spielen()
    if (computer.gewinnen()) { break }
}
