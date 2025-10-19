// Basic Object
let user = { name: "hitesh" };
console.log(user.name); // "hitesh"

//  Primitive types
let greeting: string = "hello";
let m = 5; // inferred as number
greeting.toLowerCase();
console.log(greeting);

//  Explicit type annotation
let userId: number;
userId = 5;

let isLogged: boolean = false;

userId.toFixed(); // available only for numbers
console.log(userId);
console.log(isLogged);

let test: number; // declared but not initialized → undefined

/* 
NOTES:
- `let variable: type = value`
- If TypeScript can infer the type, you can skip it.
- Use explicit types when value is assigned later (like `userId`).
*/

// --------------------------
//  Functions in TypeScript
// --------------------------

// Explicit return type (:string)
function add(num: number): string {
  return num + 2 + "i"; // returns a string
}

// Default parameter value
function signup(name: string, email: string, isPaid: boolean = false) {
  return name + email;
}

signup("hitesh", "hitesh@.com");

/*
NOTES:
- Add types to both parameters & return values.
- Default params are defined as: paramName: type = defaultValue
*/

// ------------------------------------
//  Union return types (multiple types)
// ------------------------------------
function getValue(myVal: number): boolean | string {
  if (myVal > 5) {
    return true;
  }
  return "200 OK";
}

/*
 Explanation:
- `: boolean | string` means it can return either type.
- Helps TypeScript know both outcomes.
*/

// -----------------------------------
// ⚡ Arrow function with return type
// -----------------------------------
const getHello = (s: string): string => {
  return "";
};

// -----------------------------------
//  Array with mixed types (Union)
// -----------------------------------
const heros = [1, "spiderman", "ironman"];

heros.map((hero: string | number): string | number => {
  return `hero is ${hero}`;
});

/*
 NOTE:
- You can type arrays with union: (string | number)[]
- Always type callback params too.
*/

// -----------------------------------
// Void and Never
// -----------------------------------

// `void` = function doesn’t return anything
const consoleError = (msg: string): void => {
  console.log(msg);
};

// `never` = function never returns (throws error or infinite loop)
const handleError = (msg: string): never => {
  throw new Error(msg);
};

/*
 Summary:
- `void`: executes but doesn’t return value
- `never`: function stops execution completely
*/
export{}