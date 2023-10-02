let names: object;
names = { name1: "mizan" };
console.log(names);

let users: object[];
users = [];

let users1: { name: string, id: number, email: string }
users1 = { name: 'mizan', id: 123, email: 'mr@gmail.com' }

users.push(users1)

let users2: { name: string, id: number, email: string }
users2 = { name: 'rahman', id: 234, email: 'm@com' }

users.push(users2)


console.log(users);


function createUser2({ name1: string, email: number }) { }

createUser2({ name1: 'mizan', email: 123 })



function createUser({ name: string, isPaid: boolean }) { }

let newUser = { name: "hitesh", isPaid: false }
createUser(newUser)

function createCourse(): { name: string, price: number } {
    return { name: 'mizan', price: 234 }

}

type User = {
    name: string;
    email: string;
    isActive: boolean
}

function cUser(user: User): User {
    return { name: 'mizan', email: 'mr@gmail.com', isActive: true }
}

cUser({ name: 'mizan', email: 'mr@gmail.com', isActive: true })




export { }