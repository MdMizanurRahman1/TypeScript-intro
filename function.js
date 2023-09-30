"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
console.log(addTwo(6));
function getUpper(name) {
    return name.toUpperCase();
}
console.log(getUpper('mizanur'));
function logIn(name, email, password) {
    return {
        name: name,
        email: email
    };
}
console.log(logIn('Rahman', 'mizan.rahman2217@gmail.com', 12345));
function userInfo(name, email, password) {
    if (password === void 0) { password = 12345; }
}
userInfo('Md Mizanur Rahman', 'mizan@gmail.com');
