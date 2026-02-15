function changeColor() {
    document.getElementById("text").style.color = "red";
}

const box = document.getElementById("box");

box.onclick = function() {
    if (box.style.border) {
        box.style.border = ""; // თუ აქვს, მოხსნა
    } else {
        box.style.border = "3px solid black"; // თუ არა, დაემატოს
    }
}
