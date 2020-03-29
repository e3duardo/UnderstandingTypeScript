# Advanced Typing Concepts

## Intersection Types

Allow us to combine other types.

```typescript
type Admin = {
  name: string;
  privileges: string[];
};
type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;
```

Is related to interfaces, we could use intersection type with interfaces or use only interfaces, for example:

```typescript
interface ElevateEmployee extends Employee, Admin {
  //...
}
```

## Type Guards

It's useful with union types. We could use **typeof**, **in** or **instanceof** keyword.

```typescript
// typeof keyword
type Combinable = string | number;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
```

```typescript
// in keyword
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(`Name: ${emp.name}`);
  if ("privileges" in emp) {
    console.log(`Privileges: ${emp.privileges}`);
  }
  if ("startDate" in emp) {
    console.log(`Start Date: ${emp.startDate}`);
  }
}
```

```typescript
// instanceof keyword
// just for clases, with interfaces this wont work
function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(`Name: ${emp.name}`);
  if (emp instanceof Admin) {
    console.log(`Privileges: ${emp.privileges}`);
  }
}
```

## Discriminated Unions

## Type Casting

## Function Overloads
