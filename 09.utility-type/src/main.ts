// utility types

// partial = 선언한 인터페이스 내에서 객체가 그 값을 사용하지 않으면 오류가 나지만
// partial 를 사용하면 그 값에 일부만 사용해도 타입지정을 해줄 수 있음

// interface Address {
//   email: string;
//   adress: string;
// }

// const me: Partial<Address> = {};
// const you: Partial<Address> = { email: "joho@abe.com" };
// const all: Address = { email: "joho@abe.com", adress: "john" };

// //Pick

// // 특정 타입에서 몇개의 속성을 pick 해서 새롭게 타입을 지정 할 수 있음

// interface Todo {
//   titles: string;
//   desc: string;
//   completed: boolean;
// }

// type TodoPreview = Pick<Todo, "titles" | "completed">;

// const todo: TodoPreview = {
//   titles: "clean roon",
//   completed: false,
// };

// Omit= > 특정 타입을 제거하고 새로운 타입

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createAt: number;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "clean roon",
  completed: false,
  createAt: 123141241412,
};

// required

type User = {
  firstName: string;
  lastName?: string;
};

let fistUser: User = {
  firstName: "John",
};

// // requeired 를 사용하면 타입을 필수로 사용해야만 오류에서 벗아남
// let secondUser: Required<User> = {
//   firstName: "John",
// };

// Record

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "borisy" | "morderd";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "persian" },
  borisy: { age: 2, breed: "maine coon" },
  morderd: { age: 3, breed: "british" },
};

console.log(cats.miffy);
