// Type-safe arrays using generics
const score: Array<number> = [];  // same as number[]
const names: Array<string> = [];  // same as string[]

// ============ BASIC FUNCTION TYPES ============

// Example 1: Union type (not ideal for reusability)
function identityOne(val: boolean | number): boolean | number {
    return val;
}
// Problem: output type isn't tied to input type. If val is number, TS can't guarantee output is number.

// Example 2: Using 'any' (too flexible, no type safety)
function identityTwo(val: any): any {
    return val;
}
//  Problem: TS loses track of type, could return wrong types undetected.

// Example 3: Using Generics (Best practice)
function identitythree<T>(val: T): T {
    return val;
}
identitythree(3);  // T inferred as number
//  Advantage: Type-safe, flexible, and reusable.

// ============ GENERICS WITH INTERFACES ============

interface bottel {
    brand: string;
    type: number;
}

// Example 4: Generic function using custom interface
function tests<bottel>(val: bottel): bottel {
    return val;
}
//  Note: Here, 'bottel' inside <bottel> shadows the interface name (same name, different scope)
// Usually, we name generic type like <T> or <U> to avoid confusion.

// Example 5: Class implementing interface
class gymbottel implements bottel {
    constructor(
        public brand: string,
        public type: number,
    ) { }
}

const mine = new gymbottel("pepsi", 12);
console.log(tests(mine)); //  Works fine; returns same object type

// ============ GENERIC FUNCTIONS WITH ARRAYS ============

// Example 6: Generic function returning specific element
function getproducts<T>(prod: T[]): T {
    return prod[3];  // returns the 4th element of the array
}

// Example 7: Arrow function version
const getproduct = <T,>(prob: T[]): T => {
    return prob[3];
};
// Note: The comma after <T,> prevents TS from confusing <T> with JSX syntax (important in React projects)

export {}

// ================= INTERVIEW NOTES =================
//
//  What are Generics?
// - Generics let you create reusable components that work with multiple types safely.
// - Think of them as "type variables" (like function parameters, but for types).
//
//  Why use Generics instead of 'any'?
// - 'any' removes type checking; generics keep the type info throughout the function.
// - Example: if T = string, TS ensures everything stays string throughout.
//
//  Syntax: function identity<T>(arg: T): T { return arg; }
//
//  When to use multiple type parameters: <T, U>
// Example:
//   function pair<T, U>(a: T, b: U): [T, U] { return [a, b]; }
//
//  Generic constraints:
//   - You can restrict what types T can be.
//   Example:
//     function logLength<T extends { length: number }>(item: T): void {
//         console.log(item.length);
//     }
//
// Interface vs Generics naming tip:
//   - Prefer <T>, <U>, <V> for generic placeholders, to avoid shadowing actual interface names.
//
//Common patterns:
//   - <T> → Single generic type
//   - <T, U> → Two different generic types
//   - <T extends InterfaceName> → Restrict generic type
//
//  Quick Analogy:
//   - “Generics are like templates in C++ or type variables in Java — they help write once, use anywhere safely.”
//
// ========== SUMMARY ==========
//
// identityOne  → Union (limited)
// identityTwo  → any (no safety)
// identitythree → Generic (perfect balance)
// tests<bottel> → shows generic + interface
// getproducts / getproduct → generic with array
//
//  Golden takeaway: 
// Generics = Flexibility + Type Safety + Reusability
