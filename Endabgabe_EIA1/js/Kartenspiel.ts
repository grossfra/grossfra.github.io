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
let kartenstapel = new Kartenstapel(karten)
let spieler = new Spieler()
let computer = new Computer()
let ablagestapel = new Ablagestapel()
for (let anzahl = 0; anzahl < 3; anzahl++) {
    spieler.erhalten(kartenstapel.ziehen())
    computer.erhalten(kartenstapel.ziehen())
}
while (true){
spieler.spielen() // Zug
computer.spielen() }