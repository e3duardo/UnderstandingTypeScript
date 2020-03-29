//sample1
interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;
user1 = {
  name: "Branquinha",
  age: 8,
  greet(phrase: string) {
    console.log(phrase + " hi cowboy");
  }
};
user1.greet("hello or");

//sample2
interface Named {
  readonly name?: string; //? = optional variable
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

class User implements Greetable {
  name?: string;
  readonly age: number;

  constructor(n: string = "", age: number) {
    if (n) this.name = n;
    this.age = age;
  }

  greet(phrase: string): void {
    console.log(`${phrase} ${this.name ? this.name : ""} (${this.age})`);
  }
}

const user2 = new User("Jaqueline", 29);
user2.greet("Hello, ");
//user2.age = 3; //its a readonly property

//sample 3 - interface as function type
// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}
let add: AddFn;
add = (n1: number, n2: number) => n1 + n2;
