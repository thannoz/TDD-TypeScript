interface BasicUser {
  name: string;
  surname: string;
  age: number;
  isAdmin: boolean;
}

interface AdvancedUser extends BasicUser {
  permissions: string[];
}

const carlos: AdvancedUser = {
  name: "Carlos",
  surname: "Maiza",
  age: 29,
  isAdmin: true,
  permissions: ["manager", "operator", "instructor"],
};

const kalonji: BasicUser = {
  name: "Kalonji",
  surname: "Maiza",
  age: 4,
  isAdmin: false,
};

type MathFunc = (a: number, b: number) => number;

const mul: MathFunc = (a, b) => a * b;
const add: MathFunc = (a, b) => a + b;
