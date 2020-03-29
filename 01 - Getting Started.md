# TypeScript

## Getting Started

TypeScript is a JavaScript superset, is not a new language, just add news features and advantages to JavaScript. It is like babel, I can use modern features and they will be compilated down to olders browsers, and it adds new features like interfaces or generics

Browser can't execute TypeScript directly, it has to be compilated to normal JavaScript first.

```
    $ npm install -g typescript
```

`$ tsc` compile a TypeScript file (.ts) to vanilla JavaScript.

### Extensions for VSCode

- Path IntelliSense
- TsLint

---

```html
<script src="..." defer></script>
<!-- defer: only execute this script wen page was loaded -->
```

**!** - tells to TypeScript that a variable never should be null, for example:

```typescript
document.getElementById("numero1")!;
```

We can also cast values to a type like:

```typescript
document.getElementById("numero1")! as HtmlInputElement;
```

And specify types for functions parameters like this:

```typescript
function add(n1: number, n2: number) {
  return n1 + n2;
}
```

## Working with types - Core syntax features

### Core types

- number - 1; 5.3; -10
- string - "hi", 'hi'
- boolean - true, false
- object - { age: 30 }
- array (number[]) - [1, 2, 3]
- tuple ([number, number]) - [1, 2]
- enum - enum{ new, old }
- any - anything could be stored into and any type

```typescript
const person: {
  name: string; // this code here is not a json or a object,
  age: number; // is a TypeScript object representation
} = {
  name: "Eduardo Santos",
  age: 29
};

// we don't need to do this because TypeScript infer the types
// at compilation time, then the code below should be enough
const person = {
  name: "Eduardo Santos",
  age: 29
};
```

TypeScript always infer the type at the first declarion of a variable, like this:

```typescript
// the variable name always has to be a string
let name = "Eduardo Santos";
// if we specify another type,
name = 19;
// are throw us an error
```

### Enum Type

```typescript
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}
```

### Union Type

Declare multiples types in a single variable, for example:

```typescript
let value: number | string;
// this should be work
value = 15;
value = "quinze";
```

### Literal Type

Declare a specific value of a variable of a core type, for example:

```typescript
const age: 30;
// the type shold be "30" or "number"
// this is literal type
```

We can combine literal type with union types like this:

```typescript
let variable: "active" | "inactive";
// then a variable 'variable = "pending"' shold NOT compile
// we restricted the possible values
```

### Type Alias

We can create a custom type to not repeat definitions, like:

```typescript
type Combinable = number | string;
let input: Combinable = 32;
```

### Functions

We can define type of returning function like this:

```typescript
function (n1:number, n2:number):number {
    return n1+n2;
}
// in this specific example we do not need to specify the
// return type, cause compiler can infer itself
```

**Void Type:** Functions could not return a value, when it's happens, we can tell that function return void. JavaScript does not recognised void like a type but TypeScript does.

**Function types:** We can declare a function type to ours variables:

```typescript
let combine: Function;
combine = add;

combine(1, 1);
```

We also can specify the function types with an structure like this:

```typescript
let combine: (a: number, b: number) => number;
```

Who tell us, a function that receive 2 numbers and return another number.

### Unknown Type

Unknown is like any type, but is more restrictive. We have to check type before put an unknown type into an specific type.

### Never Type

It's used to functions in functions that never return a value, like functions that throw an error or with contains an infinity loop.

## TypeScript Compiler

To get away from `tsc index.ts` everytime we can use watch mode `tsc index.ts -w`.
We also can init a TypeScript project a once:

`tsc --init`

And then use:

`tsc -w`

To TypeScript recompile everyfile when it changes.
