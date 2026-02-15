const Body = document.getElementById("Screen");


function ChangeColor(){
    const Num1 = Math.floor(Math.random() * 255);
    const Num2 = Math.floor(Math.random() * 255);
    const Num3 = Math.floor(Math.random() * 255);

    Body.style.backgroundColor = "rgb(" + Num1 + "," + Num2 + "," + Num3 + ")";
}


//2)ჩამოწერეთ ყველა ნასწავლი math ფუნქცია გამოიყენეთ Math.pow ფუნქცია და აიყვანეთ 10, მე-3 ხარისხში
// math.random math.floor math.ceil math.pi math.round math.pow (x,y)
Math.pow (10,3)