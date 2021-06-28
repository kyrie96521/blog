---
title: "TypeScript Review"
date: "2021-06-24"
draft: false
path: "/blog/typescript"
---
### Basic Types

- Type annotations
- Type inference:
```
	// const variable will be seen as type;
    // can not infer the parameter
```
- Any : no type checking
- Void : function return nothing
- Never : function never return
- Unknown : reduce our use of any and create more strongly-typed code
- Type assertions : 
```js
	// Angle-bracket syntax <number>  Not good, ambiguity in React
	(<number>getAge()) => {...}
	// "as"
	(getAge() as number) => {...}
```
### Creating Types
- Strong-type array/tuple/object
```js
    const numbers: Array<number> = [];
    const items: number[] = [];
    const tomScore: [string, number] = ["Tom", 70];
    const tomScore: { name: string; score: number; } = {
        name: "Tom",
        score: 70
    }
```
- Type aliases:
```js
    // aim to reduce redundant type annotations & add readability & reusing type 
    type NewName = ExistingType;
```
- Interfaces:
```js
    // Inherit all the properties and methods
    interface TypeName extends InterfaceB {
        // Optional/Readonly property
        // Readonly array can mutate the array but can not set to different array
        Readonly propertyName?: PropertyType;
        methodName: (paramName: ParamType) => MethodReturnType
    }
```

- Union type :
```js
    // type A_or_B_or_C = A | B | C;
    let age: number | null;
    // String literal union types
    let fruit:  "Banana" | "Apple" | "Pear"
    // Object union types
    type Actions = { type: "loading" } | { type: "loaded", data: {name: string} }
```
- Intersection types :
```js
    type A_and_B_and_C = A & B & C;
```
- Type compatibility : 
```
    /*  b = a
    A variable, a, can be assigned to another variable, b, if the type of b is wider than the type of a.
    An object, a, can be assigned to another object, b, if a has at least the same members as b.
    A function, a, can be assigned to another function, b, if each parameter in a has a corresponding parameter in b with a compatible type.
    */
```
		
### Generic Types
- Create types that are reusable


```js
// arrow function with generic type
const firstOrNull = <ItemType,>(
  array: ItemType[]
): ItemType | null =>
  array.length === 0 ? null : array[0];

// normal function with generic type
function firstOrNull<ItemType>(array: ItemType[]): ItemType | null {
  return array.length === 0 ? null : array[0];
}

// Generic interface syntax 
interface Form<T> {
  values: T;
}

interface Contact {
  name: string;
  email: string;
}

const contactForm = {
  values: {
    name: "Bob",
    email: "bob@someemail.com"
  }
}

// [P in keyof T] is the property name of the object being constructed. 
// So, for contactForm, the properties in the object are name and email.
// the type for the errors is {name?: string; email?: string}.
interface Form<T> {
  errors: {
    [P in keyof T]?: string;
  };
  values: T;
}

type TypeName<T> = {
    errors: {
        [P in keyof T]?: string;
    };
    values: T;
}

class List<ItemType> {
  private items: ItemType[] = [];  
  // ts can infer the return type  
  add(item: ItemType) {
    this.items.push(item);
  }
}
```



