// A tuple is a typed array with a pre-defined length and types for each index.


let tUser: [number, string, boolean];

tUser = [23, 'ok', true];

console.log(tUser);

let myUsers: readonly [string, number, boolean];

myUsers = ['error', 34, false]

// myUsers.push(89)
console.log(myUsers);


// enum type