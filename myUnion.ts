let heros: number | string = 3;
heros = '4'

console.log(heros);

type User = {
    name: string;
    id: number
}

type Admin = {
    userName: string;
    id: number
}

let myUser: User | Admin = { name: 'Mizan', id: 23 };

myUser = { userName: 'Piano', id: 234 }

console.log(myUser);

function myFunction(id: number | string) {
    console.log(`My id number is ${id}`);
}

myFunction(2);
myFunction('34')

function mifunction(id: number | string) {
    if (typeof id === 'number') {
        return id + 5;
    } else {
        return id.toLowerCase()
    }
}

console.log(mifunction('MYKING'));

const data: number[] = [1, 2, 3]
const data2: string[] = ['1', '2', '3'];
const data3: string[] | number[] = [1, 2]
const data4: (string | number | boolean)[] = [1, '2', true]