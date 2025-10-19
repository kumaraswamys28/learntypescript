//  Function using Union Types
function getId(id: number | string): string | number {
  //  Type narrowing using typeof
  if (typeof id === "number") {
    return 1; //  returning number
  } else {
    return "string"; //  returning string
  }
}

console.log(getId("12")); // "string"

/*
 NOTES:
- `number | string` = union type → can accept either.
- TypeScript *narrows* the type inside each branch automatically.
- Return type can also be a union (string | number).
*/

// ---------------------------------------------------
//  Arrays with Union Types
// ---------------------------------------------------

//  Either an array of numbers OR an array of strings (not both at once)
const data: number[] | string[] = [1, 2, 3];
// data = ["a", "b"];  OK
// data = [1, "a"];  Error (mixed types not allowed)

//  This one allows mixed elements
const data1: (string | number)[] = [1, 2, "3"]; // both allowed


/*
 TL;DR:
- `string[] | number[]` → array must be all strings OR all numbers.
- `(string | number)[]` → array can mix both types.
*/

// ---------------------------------------------------
//  Literal Types
// ---------------------------------------------------
let pi: 123 = 123;
// pi = 1234;  Error — literal type only allows exactly 123

/*
 Literal Types:
- Restrict a variable to *one specific value*.
- Used for constants, enums, or flags.
*/

// ---------------------------------------------------
//  Union of Literal Types
// ---------------------------------------------------
let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";  
seatAllotment = "middle"; 
seatAllotment = "window"; 
// seatAllotment = "crew";  Error — not part of the union

/*
 NOTES:
- Union of string literals = only specific values allowed.
- Great for controlled enums, UI states, etc.
*/

export {};
//  Tuple — fixed-length, ordered types
let user: [string, number, boolean];

user = ["sdf", 1, true]; //  OK — must match the exact order & type
// user = [1, "sdf", true];  Error — order matters
// user = ["sdf", 1];  Error — missing element

/*
 NOTES:
- Tuples define a fixed-length array where each index has a defined type.
- Use them when order & type position both matter (e.g., [id, score, active]).
*/

// 🎨RGB color example (classic use-case)
let rgb: [number, number, number] = [255, 255, 255]; //  R, G, B

/*
 Common patterns:
- `[latitude, longitude]` for coordinates
- `[id, name, isActive]` for lightweight user data
- `[statusCode, message]` for API responses
*/

// ⚡ Bonus — Tuple with Optional or Readonly
type Response = readonly [number, string]; // cannot be modified
const res: Response = [200, "OK"];
// res[0] = 404  Error: readonly tuple

export {};
