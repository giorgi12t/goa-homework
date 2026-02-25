function Dog(name, surname, breed) {
    this.name = name;
    this.surname = surname;
    this.breed = breed;

    this.bark = function () {
        document.write("Bark bark bark");
    };
}

let dog1 = new Dog("Bobby", "Doggo", "Labrador");