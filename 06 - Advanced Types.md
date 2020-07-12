# Advanced Types

## Introduction


## Intersection Types

Intersection types allow us to combine our types.

```typescript
type Admin = {
    name: string;
    privileges: string[];
}
type Employee = {
    name: string;
    startDate: Date;
}
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date
}
```
```typescript 
// this example could be done with interfaces like:
interface Admin {
    name: string;
    privileges: string[];
}
interface Employee {
    name: string;
    startDate: Date;
}
interface ElevatedEmployee extends Admin, Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date
}
```

## More on Type Guards

Type guards allows us to utilize the flexibility union types gives us and still ensure that our code runs correcly at runtime.

```typescript
type Combinable = string | number;

function add (a: Combinable, b: Combinable): number {
    if(typeof a === 'string' || typeof b === 'string'){ // a type guard example
        return a.toString() + b.toString();
    }
    return a + b;
 }
```

## Discrimiated Unions

A special type guard or simething that helps you with type guards is discriminated unions. It's a partern that we can use when working with unions types that makes implementing type guards easier.

```typescript
interface Bird {
    type: 'bird';
    flyingSpeed: number;
}
interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal){
    let speed;
    switch (animal.type){
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving with speed: ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10});
```

## Type Casting

There are two ways to type casting in typescript

```typescript
const input = <HTMLInputElement>document.querySelector(`#myInput`)!;

// or

const input = document.querySelector(`#myInput`) as HTMLInputElement;
```


## Index Properties (Index Types)

A feature that allow us to create objects with are more flexible regarging the properties that they might hold.

```typescript
interface ErrorContainer{ 
    [prop: string]: string;
}

const errorBad: ErrorContainer = {
    email: 'Not a valid email!'
}
```

## Function Overloads

A feature that allow us to define multiple functions signatures.

```typescript
type Combinable = string | number;

function add (a: number, b: number): number;
function add (a: string, b: string): string;
function add (a: string, b: number): string;
function add (a: number, b: string): string;
function add (a: Combinable, b: Combinable): number {
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a + b;
}
```

## Optional Chaining

Let's say you have an application where you're getting data from a backend and there from a database or from any source where you don't know with certainty if in a object a certain property is defined.

```typescript
const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    // job: { title: 'CEO', description: 'My own company' }
}

console.log(fetchedUserData?.job?.title);
```

## Nullish Coalescing

Now loosely related to Optional Chaining we got another nice feature in typescript which helps us deal with nullish data and that feature is called Nullish Coalescing

```typescript
const userInput = null; // can come from backend

const storedData = userInput ?? 'DEFAULT'; // if is null or undefined, not empty string

console.log(storedData)
```

## Useful Resources & Links

- [https://www.typescriptlang.org/docs/handbook/advanced-types.html](More on advanced types)
