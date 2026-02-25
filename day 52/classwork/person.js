function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;

    this.talk = function () {
        document.write("Hello, my name is " + this.name);
    };
}

let person1 = new Person("Giorgi", "Tsurtsumia", 13);

// სულ არის 3 გზა 
// 1 გზა const name = []
// 2 გზა const name = new array[]
// 3 გზა let name = new Array(2);

function Name(GIORGI) {
    console.log("name");
}