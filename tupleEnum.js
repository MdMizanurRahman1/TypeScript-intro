// A tuple is a typed array with a pre-defined length and types for each index.
var tUser;
tUser = [23, 'ok', true];
console.log(tUser);
var myUsers;
myUsers = ['error', 34, false];
// myUsers.push(89)
console.log(myUsers);
// enum type
// An enum is a special "class" that represents a group of constants (unchangeable variables).
//Enums come in two flavors string and numeric. Lets start with numeric.
// initialized enum
var MyEnum;
(function (MyEnum) {
    MyEnum[MyEnum["north"] = 0] = "north";
    MyEnum[MyEnum["south"] = 10] = "south";
    MyEnum["east"] = "typescript";
    MyEnum[MyEnum["west"] = 20] = "west";
})(MyEnum || (MyEnum = {}));
var myvalue = MyEnum.south;
var value = MyEnum.east;
console.log(myvalue);
console.log(value);
// default
var YourEnum;
(function (YourEnum) {
    YourEnum[YourEnum["middleEastern"] = 0] = "middleEastern";
    YourEnum[YourEnum["southen"] = 1] = "southen";
    YourEnum[YourEnum["eastern"] = 2] = "eastern";
    YourEnum[YourEnum["western"] = 3] = "western";
})(YourEnum || (YourEnum = {}));
var enumvalue = YourEnum.southen;
var valueid = YourEnum.eastern;
console.log(enumvalue);
console.log(valueid);
// string enum
var CardinalDirections2;
(function (CardinalDirections2) {
    CardinalDirections2["North1"] = "Northen";
    CardinalDirections2["East2"] = "Easten";
    CardinalDirections2["South3"] = "Southen";
    CardinalDirections2["West4"] = "Westen";
})(CardinalDirections2 || (CardinalDirections2 = {}));
;
// logs "North"
console.log(CardinalDirections2.North1);
