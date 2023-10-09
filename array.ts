const myArray: number[] = [];

myArray.push(3);

// console.log(myArray);

const yourArray: string[] = ['rohima', 'bala', 'karima']

yourArray.push('momina');

console.log(yourArray);

yourArray.unshift('error');
console.log(yourArray);


const loveArray: Array<number> = [];

loveArray.push(5);


type superHero = {
    name: string,
    email: string,
    id: number,
    isActive: boolean
}

const yurVariable: superHero[] = [];

yurVariable.push({ name: 'mizan', email: 'mr@gmail.com', id: 2, isActive: true });

console.log(yurVariable);