# Decorators

## Introduction

Decorators are a feature whitch can be very useful for meta-programming. It means that you typically won't use tech writers that often to have a direct impact on the end users on your pages, instead decorators are particularly well suited instrument for writing code which is then easier to use by other developers.

## A First Class Decorator

```typescript
function Logger(constructor: Function){
    console.log('Logging...');
}

@Logger
class Person {
    name = 'Max';

    constructor(){
        console.log('Creating person object...');
    }
}

const pers = new Person();

console.log(pers);
 ```

## Working with Decorator Factories

```typescript
function Logger(logString: string){
    return function(constructor: Function){
        console.log(logString);
    }
}

@Logger('LOGGING-PERSON')
class Person {
    name = 'Max';

    constructor(){
        console.log('Creating person object...');
    }
}

const pers = new Person();

console.log(pers);
```

## Building More Useful Decorators

```typescript
function WithTemplate(template: string, hookId: string){
    return function(_ : Function){
        const hookEl = document.getElementById(hookId);
        if(hookEl){
            hookEl.innerHTML = template;
        }
    }
}

@WithTemplate('<h1>My person object</h1>', 'app')
class Person {
    name = 'Max';

    constructor(){
        console.log('Creating person object...');
    }
}
```

## Adding Multiple Decorators

```typescript
@Logger('LOGGING') // second
@WithTemplate('<h1>My person object</h1>', 'app') // first
class Person {
    name = 'Max';

    constructor(){
        console.log('Creating person object...');
    }
}
```

## Diving into Property Decorators