//hello
console.log("Konsolen-Test");
window.onload = function()
{
    console.log("Elemente sind bereit");
    document.getElementById("id");
    document.getElementById("Button").addEventListener("click", ChangeName);
    document.getElementById("id1").addEventListener("click", ChangeClass);
    window.alert("Bitte zuerst hier klicken");
    console.log("Seite geladen");
    newelements();

    let name: string = "Name";
    let surname: string = "Name";
    let number1: number = 1;
    let number2: number = 2;
    let number3: number = 3;
    number1 = 2;
    console.log(number1 + number2);
    number1 = number2 + number3 + number2;
    console.log (name + number1);
    console.log (name + surname);
    console.log (number1);
}
function ChangeName() {
    document.getElementById("Button").innerHTML = "Name geändert";
}
function ChangeClass() {
    document.getElementById("id1").className = "Klasse1";
    console.log("Neuer Klassenname: "+ document.getElementById("id1").className);
}
function newelements() {
    let NeuesDiv = document.createElement("div");
    let NeuerButton = document.createElement("button");
    document.body.appendChild(NeuesDiv);
    NeuesDiv.appendChild(NeuerButton);
    NeuerButton.innerHTML = "Button wurde durch TS erstellt";
    console.log("Neuer Button wurde erstellt");
    let ZweiterButton = document.createElement("button");
    NeuesDiv.appendChild(ZweiterButton);
    ZweiterButton.innerHTML = "Ich wurde durch TS erstellt";
}