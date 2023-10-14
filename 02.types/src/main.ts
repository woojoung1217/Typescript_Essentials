// boolean
let boolean: boolean;
let falseBoolean: boolean = false;

// number

let number: number;
let inteager: number = 6;
let float: number = 1.2345;

//Stirng

let string: string;

let firstName: string = "YOON";

//Array
// 타입이 한가지
let names1: string[] = ["john", "kim"];

let names2: Array<string> = ["john", "Lee"];

let names3: Array<any> = ["john", "Lee", 123];
// 타입 2~개

let array1: (string | number)[] = ["john", 12];
let array2: Array<string | number> = ["john", 12];

//타입을 확정하지 못한 경우 :any

let someArray: any[] = ["john", 1, [], {}, false];

// interface , Type

// leadonly

let stringArray: readonly string[] = ["A", "B"];
let numberArray: ReadonlyArray<number> = [1, 2];

// Tuple

let tuple1: [string, number];

tuple1 = ["a", 1];

let users: [number, string][];

users = [
  [1, "json"],
  [2, "doe"],
];

//any

let any: any = "abc";
any = 1;
any = [];

// unknown

let unknown: unknown = false;

let someValue: boolean = unknown as boolean;

// Object

let object: object = {};

let arr: object = [];
let date: object = new Date();

const obj1: { id: number; sex: string; job: string } = {
  id: 1,
  sex: "man",
  job: "police",
};

// Union

let union: string | number;

union = "hi";
union = 123;

// function

let func1: (arg1: number, arg2: number) => number;

func1 = function (x, y) {
  return x * y;
};

let func2: () => void;

func2 = function () {
  console.log("hi");
};

// null , undefined

// never

function thorwError(): never {
  throw new Error("error");
}

function keepProcess(): never {
  while (true) {
    console.log("hi");
  }
}
