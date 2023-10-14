"use strict";
// boolean
let boolean;
let falseBoolean = false;
// number
let number;
let inteager = 6;
let float = 1.2345;
//Stirng
let string;
let firstName = "YOON";
//Array
// 타입이 한가지
let names1 = ["john", "kim"];
let names2 = ["john", "Lee"];
let names3 = ["john", "Lee", 123];
// 타입 2~개
let array1 = ["john", 12];
let array2 = ["john", 12];
//타입을 확정하지 못한 경우 :any
let someArray = ["john", 1, [], {}, false];
// interface , Type
// leadonly
let stringArray = ["A", "B"];
let numberArray = [1, 2];
// Tuple
let tuple1;
tuple1 = ["a", 1];
let users;
users = [
    [1, "json"],
    [2, "doe"],
];
//any
let any = "abc";
any = 1;
any = [];
// unknown
let unknown = false;
let someValue = unknown;
// Object
let object = {};
let arr = [];
let date = new Date();
const obj1 = {
    id: 1,
    sex: "man",
    job: "police",
};
// Union
let union;
union = "hi";
union = 123;
// function
let func1;
func1 = function (x, y) {
    return x * y;
};
let func2;
func2 = function () {
    console.log("hi");
};
// null , undefined
// never
function thorwError() {
    throw new Error("error");
}
function keepProcess() {
    while (true) {
        console.log("hi");
    }
}
