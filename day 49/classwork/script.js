function printNumbers() {
    for (let i = 0; i <= 30; i++) {
        console.log(i);
    }
}

function showLetters() {
    let name = prompt("შეიყვანე შენი სახელი:");

    for (let i = 0; i < name.length; i++) {
        console.log(name[i]);
    }
}


function showLetters() {
    let name = document.getElementById("nameInput").value; // მომხმარებლის სახელი
    let i = 0;
    let output = "";

    while (i < name.length) {
        output += name[i] + "<br>"; // ვწერთ თითო ასოს ახალ ხაზზე
        i++;
    }

    document.getElementById("letters").innerHTML = output;
}


let i = 1; // საწყისი რიცხვი
let output = ""; // სტრინგი რიცხვებისთვის

while (i <= 40) {
    output += i + " "; // ვამატებთ რიცხვს სტრინგში
    i++; // ზრდა 1-ით
}

document.getElementById("numbers").innerText = output;
