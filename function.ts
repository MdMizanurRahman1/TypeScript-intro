function addTwo(num: number): number {
    return num + 2;
}

console.log(addTwo(6));


function getUpper(name: string): string {
    return name.toUpperCase()
}

console.log(getUpper('mizanur'));



function logIn(name: string, email: string, password: number) {
    return {
        name,
        email
    }
}


console.log(logIn('Rahman', 'mizan.rahman2217@gmail.com', 12345))



function userInfo(name: string, email: string, password: number = 12345) { }



userInfo('Md Mizanur Rahman', 'mizan@gmail.com')

const getHello = (sum: string): string => {
    return 'Hello from us'
}
console.log(getHello('This is mizan'))


const heros = ['spiderman', 'thor', 'marvel', 'avater'];

heros.map((hero): string => {
    return `Our hero is ${hero}`
})
console.log(heros);

const erroCount = (errmsg: string): void => {
    console.log(errmsg);
}
const handleerror = (msg: string): never => {
    throw new Error(msg);

}












export { }