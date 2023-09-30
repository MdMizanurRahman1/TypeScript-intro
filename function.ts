function addTwo(num: number) {
    return num + 2;
}

console.log(addTwo(6));


function getUpper(name: string) {
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

export { }