interface User {
    readonly dbId: number,
    email: string,
    usedId: number,
    googleId?: string,
    startTrial: () => string
}

const mizan: User = {
    dbId: 43, email: 'mr@gmail.com', usedId: 1234,
    startTrial: () => {
        return 'Coding is typical'
    }
}



function multiply(a: number, b: number) {
    return a * b;
}

console.log(multiply(20, 30));


class User2 {
    email: string
    name: string
    readonly city: string = "Dhaka"
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name

    }
}
const person = new User2('mr@gmail.com', 'mrmri')
console.log(person.name);


class Person {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

const person1 = new Person("Jane Bey");
console.log(person1.getName());



function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
}


interface Rectangle {
    height: number,
    width: number
}

const rectangle: Rectangle = {
    height: 20,
    width: 10
};

enum CarDirections {
    Northst,
    Eastst,
    Southst,
    Westst
}
let currentDirection = CarDirections.Northst;


const car: { type: string, model: string, year: number } = {
    type: "Toyota Yaris",
    model: "Corolla",
    year: 2019
};

let ourTuple: [number, boolean, string];


ourTuple = [59, true, 'Coding is here'];


const names: readonly string[] = ["Dylan Baayton"];
// names.push("Jack");

const names2: string[] = [];
names2.push("Dylan");


let ourTup: [number, boolean, string];

ourTup = [765, false, 'Coding God was not okay here'];

ourTup.push('Something new and wrong is happening');
console.log(ourTuple);

type WrappedNum<T> = { value: T };

const wrappedValue: WrappedNum<number> = { value: 130 };


class Person3 {
    name: string;
}

const person5 = new Person3();
person5.name = "Jane Valterri";