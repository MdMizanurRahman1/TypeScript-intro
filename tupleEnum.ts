// A tuple is a typed array with a pre-defined length and types for each index.


let tUser: [number, string, boolean];

tUser = [23, 'ok', true];

console.log(tUser);

let myUsers: readonly [string, number, boolean];

myUsers = ['error', 34, false]

// myUsers.push(89)
console.log(myUsers);


// enum type

// An enum is a special "class" that represents a group of constants (unchangeable variables).

//Enums come in two flavors string and numeric. Lets start with numeric.

// initialized enum
enum MyEnum {
    north,
    south = 10,
    east = 'typescript',
    west = 20
}

const myvalue = MyEnum.south;
const value = MyEnum.east;

console.log(myvalue);
console.log(value);

// default
enum YourEnum {
    middleEastern,
    southen,
    eastern,
    western
}

const enumvalue = YourEnum.southen;
const valueid = YourEnum.eastern;

console.log(enumvalue);
console.log(valueid);

// string enum

enum CardinalDirections2 {
    North1 = 'Northen',
    East2 = "Easten",
    South3 = "Southen",
    West4 = "Westen"
};
// logs "North"
console.log(CardinalDirections2.North1);
