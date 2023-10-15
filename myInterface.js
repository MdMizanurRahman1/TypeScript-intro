var mizan = {
    dbId: 43, email: 'mr@gmail.com', usedId: 1234,
    startTrial: function () {
        return 'Coding is typical';
    }
};
function multiply(a, b) {
    return a * b;
}
console.log(multiply(20, 30));
var User2 = /** @class */ (function () {
    function User2(email, name) {
        this.city = "Dhaka";
        this.email = email;
        this.name = name;
    }
    return User2;
}());
var person = new User2('mr@gmail.com', 'mrmri');
console.log(person.name);
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person1 = new Person("Jane Bey");
console.log(person1.getName());
