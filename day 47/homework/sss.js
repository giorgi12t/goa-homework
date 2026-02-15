function showName() {

    const name = prompt("შეიყვანეთ თქვენი სახელი:");

    alert("თქვენი სახელი არის: " + name);
}

function sumNumbers() {

    const num1 = prompt("შეიყვანეთ პირველი რიცხვი:");
    
    const num2 = prompt("შეიყვანეთ მეორე რიცხვი:");

    const sum = Number(num1) + Number(num2);

    console.log("რიცხვების ჯამი:", sum);
}

function showAge() {
    const age = prompt("შეიყვანეთ თქვენი ასაკი:");
    alert("შენი ასაკია: " + age);
}

function favoriteColor() {
    const color = prompt("შეიყვანეთ თქვენი საყვარელი ფერი:");
    console.log("საყვარელი ფერი:", color);
}
