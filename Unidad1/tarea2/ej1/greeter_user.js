/**
 * @author: Héctor Cevallos Paredes
 */

class Greeter {
    name = "unnamed";
    static greetWord = "Hello";

    constructor({ name }) {
        this.name = name;
    }
    greet() {
        return `${Greeter.greetWord}, I'm ${this.name}`;
    }

}

class User extends Greeter {
    surname = "";
    constructor({ name, surname}) {
        super({ name });
        this.surname = surname;
    }
    greet() {
        return `${super.greet()} ${this.surname}`;
    }
}

const user = new User({ name: "Héctor", surname: "Cevallos"});
console.log(user.greet());
Greeter.greetWord = "Hola";
console.log(user.greet());