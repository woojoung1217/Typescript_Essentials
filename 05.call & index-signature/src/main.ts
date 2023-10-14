//call signature
// interface getLikeNumber {
//   (like: number): number;
// }

// interface Post {
//   id: number;
//   title: string;
//   getLikeNumber: getLikeNumber;
// }

// const post1 = {
//   id: 1,
//   title: "post1",
//   getLikeNumber(like: number) {
//     return like;
//   },
// };

// post1.getLikeNumber(1);

// index signature
interface Post {
  [key: string]: unknown;
  id: number;
  title: string;
}

const post1: Post = {
  id: 1,
  title: "pos1",
};

post1["description"] = "post1 description";
post1["pages"] = 300;

console.log(post1);

interface Names {
  [item: number]: string;
}

const userNames = ["john", "jane", "michael"];
