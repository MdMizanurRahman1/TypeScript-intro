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