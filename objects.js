"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var names;
names = { name1: "mizan" };
console.log(names);
var users;
users = [];
var users1;
users1 = { name: 'mizan', id: 123, email: 'mr@gmail.com' };
users.push(users1);
var users2;
users2 = { name: 'rahman', id: 234, email: 'm@com' };
users.push(users2);
console.log(users);
function createUser2(_a) {
    var string = _a.name1, number = _a.email;
}
createUser2({ name1: 'mizan', email: 123 });
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "hitesh", isPaid: false };
createUser(newUser);
function createCourse() {
    return { name: 'mizan', price: 234 };
}
function cUser(user) {
    return { name: 'mizan', email: 'mr@gmail.com', isActive: true };
}
cUser({ name: 'mizan', email: 'mr@gmail.com', isActive: true });
