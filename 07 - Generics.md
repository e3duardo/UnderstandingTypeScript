# Generics

## Introduction

In this module we will dive into a concept called generics. Generics exist in typescript not in vanilla javascript, so there is no real translation here, but we can utilize it in typescript and the concept of generic types all exists in other programming languages.

## Build-in Generics & What are Generics?

```typescript
const names: Array<string> = []; // string[]

const promise: Primise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is done!');
    }, 2000);
});
```

## Creating a Generic Function

```typescript
function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Max'}, {age: 30});
```

## Working with Contraints

```typescript
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Max'}, 30); // does not compile
```

## Another Generic Function

```typescript
interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) : [T, string] {
    let descriptionText = 'Got no value.';

    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    } else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements.`;
    }

    return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['Sports', 'Cooking']));
```

## The keyof constraint

```typescript
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){
    return `Value: ${obj[key]}`
}

console.log(extractAndConvert({ name: 'Max' }, 'name'));
```

## Generic Classes

```typescript
class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
       this.data.splice(this.data.indexOf(item), 1); 
    }

    getItems(){
        return [...this.data];
    }
}

const textStorage = new DataStore<string>();
textStore.addItem('Max');
```

## A First Summary

## Generic Utility Types

```typescript
// Partial
interface CourseGoal {
    title: string;
    description: string;
    completeUtil: Date;
}

function createCourseGoal(title: string, description: string, date: Date) : CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

// Readonly
const names: Readonly<string[]> = ['Max', 'Sports'];
```

## Generic Types vs Union Types

## Useful Resources & Links

- [https://www.typescriptlang.org/docs/handbook/generics.html](More on Generics)