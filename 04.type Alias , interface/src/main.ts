interface Animal {
  name: string;
}

interface Bear {
  honey: boolean;
}

type NewType = Animal | Bear;

const bear1: NewType = {
  name: "Bear",
  honey: true,
};

console.log(bear1);
