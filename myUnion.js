var heros = 3;
heros = '4';
console.log(heros);
var myUser = { name: 'Mizan', id: 23 };
myUser = { userName: 'Piano', id: 234 };
console.log(myUser);
function myFunction(id) {
    console.log("My id number is ".concat(id));
}
myFunction(2);
myFunction('34');
function mifunction(id) {
    if (typeof id === 'number') {
        return id + 5;
    }
    else {
        return id.toLowerCase();
    }
}
console.log(mifunction('MYKING'));
var data = [1, 2, 3];
var data2 = ['1', '2', '3'];
var data3 = [1, 2];
var data4 = [1, '2', true];
