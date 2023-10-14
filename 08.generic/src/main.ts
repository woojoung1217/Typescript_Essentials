// // function getArrayLength(arr: number[] | string[] | boolean[]): number {
// //   return arr.length;
// // }

// function getArrayLength<T>(arr: T[]): number {
//   return arr.length;
// }
// const array1 = [1, 2, 3, 4];
// const array2 = ["a", "b", "c", "d"];
// const array3 = [true, false, false];

// getArrayLength<number>(array1);
// getArrayLength<string>(array2);
// getArrayLength<boolean>(array3);

// generic function

const makeArray = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y];
};

const array1 = makeArray<number, number>(4, 5);
const array2 = makeArray<string, string>("a", "b");

const makeFullName = (obj: { firstName: string; lastName: string }) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
};

makeFullName({ firstName: "John", lastName: "Doe" });
